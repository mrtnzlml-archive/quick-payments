// @flow

import * as React from 'react';
import {ScrollView} from 'react-native';
import {QueryRenderer, graphql} from '_relay';
import idx from 'idx';

import PaymentRow from './PaymentRow';
import type {PaymentsListQueryResponse} from './__generated__/PaymentsListQuery.graphql';

type QueryRendererResponse = {
  +props: ?PaymentsListQueryResponse,
};

export default class PaymentsList extends React.Component<{||}> {
  renderQueryRendererResult = ({props}: QueryRendererResponse) => {
    const payments = idx(props, _ => _.scenes.dashboard.payments) || [];
    return (
      <ScrollView>
        {payments.map(payment => {
          if (payment) {
            return <PaymentRow key={payment.id} data={payment} />;
          }
          return undefined;
        })}
      </ScrollView>
    );
  };

  render = () => (
    <QueryRenderer
      query={graphql`
        query PaymentsListQuery($clientId: ID!) {
          scenes {
            dashboard {
              payments(clientId: $clientId) {
                id
                ...PaymentRow
              }
            }
          }
        }
      `}
      variables={{
        // TODO: this should be stored in the device after onboarding
        clientId: 'EA53A691-9970-46BB-BACD-80D4A120334E',
      }}
      render={this.renderQueryRendererResult}
    />
  );
}
