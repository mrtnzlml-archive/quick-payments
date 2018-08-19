// @flow

import * as React from 'react';
import idx from 'idx';
import {QueryRenderer, graphql} from '_relay';

import Confirmation from './Confirmation';
import Rejection from './Rejection';
import type {resultQueryResponse} from './__generated__/resultQuery.graphql';

type Props = {|
  +paymentId: string,
|};

type QueryRendererResponse = {|
  +props: resultQueryResponse,
|};

export default class PaymentStatus extends React.Component<Props> {
  renderQueryRendererResult = ({props}: QueryRendererResponse) => {
    const data = idx(props, _ => _.scenes.payment.checkStatus);
    const status = data && data.status;

    if (status === 'PAID') {
      return <Confirmation data={data} />;
    } else {
      return <Rejection data={data} />;
    }
  };

  render = () => (
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
}
