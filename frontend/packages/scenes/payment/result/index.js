// @flow

import * as React from 'react';
import idx from 'idx';
import {QueryRenderer, graphql} from '_relay';
import {Button} from '_shared';
import {Switch} from '_navigation';
import {DashboardScene} from '_scenes';
import Translation from '_translations';

import Confirmation from './Confirmation';
import Rejection from './Rejection';
import type {resultQueryResponse} from './__generated__/resultQuery.graphql';

type Props = {|
  +paymentId: string,
|};

type State = {|
  performTransition: boolean,
|};

type QueryRendererResponse = {
  +props: ?resultQueryResponse,
};

export default class PaymentStatus extends React.Component<Props, State> {
  state = {
    performTransition: false,
  };

  transitionToDashboard = () => {
    this.setState({
      performTransition: true,
    });
  };

  renderQueryRendererResult = ({props}: QueryRendererResponse) => {
    const data = idx(props, _ => _.scenes.payment.checkStatus);
    const status = data && data.status;

    return (
      <React.Fragment>
        {status === 'PAID' ? <Confirmation data={data} /> : <Rejection data={data} />}
        <Button
          title={<Translation id="Payment.Result.GoToDashboard" />}
          onPress={this.transitionToDashboard}
        />
      </React.Fragment>
    );
  };

  render = () => {
    if (this.state.performTransition) {
      return <Switch to={<DashboardScene />} />;
    }

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
