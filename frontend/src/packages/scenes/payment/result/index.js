// @flow

import * as React from 'react';
import {QueryRenderer, graphql} from '_relay';
import {Button} from '_shared';
import Translation from '_translations';
import {warning} from '_utils';

import Confirmation from './Confirmation';
import Rejection from './Rejection';
import type {resultQueryResponse} from './__generated__/resultQuery.graphql';

type Props = {|
  +paymentId: string,
|};

type QueryRendererResponse = {
  +props: ?resultQueryResponse,
};

export default class PaymentStatus extends React.Component<Props> {
  void = () => {
    warning(false, 'TODO');
  };

  renderQueryRendererResult = ({props}: QueryRendererResponse) => {
    const data = props?.scenes?.payment?.checkStatus;
    const status = data && data.status;

    return (
      <React.Fragment>
        {status === 'PAID' ? (
          <Confirmation data={data} />
        ) : (
          <Rejection data={data} />
        )}
        <Button
          title={<Translation id="Payment.Result.GoToDashboard" />}
          onPress={this.void}
        />
      </React.Fragment>
    );
  };

  render = () => {
    return (
      <QueryRenderer
        query={graphql`
          query resultQuery($paymentId: ID!) {
            scenes {
              payment {
                checkStatus(paymentId: $paymentId) {
                  status
                  ...Confirmation
                  ...Rejection
                }
              }
            }
          }
        `}
        variables={{
          paymentId: this.props.paymentId,
        }}
        render={this.renderQueryRendererResult}
      />
    );
  };
}
