// @flow

import * as React from 'react';
import {QueryRenderer, graphql} from '_relay';
import {View} from 'react-native';
import Text from '_components/typography/Text';
import Layout from '_components/layout';

import PaymentRow from './PaymentRow';

function renderQueryRendererResult(props: PaymentsListQueryResponse) {
  return (
    <Layout title={props.spaces?.dashboard?.title}>
      {props.spaces?.dashboard?.blocks.map(block => {
        return (
          <View>
            <Text>{block.type}</Text>
            {block.items.map(item => {
              switch (item.__typename) {
                case 'Payment':
                  return <PaymentRow data={item} />;
                case 'ItemTODO':
                  return <Text>{item.body}</Text>;
                default:
                  (item: empty);
              }
            })}
          </View>
        );
      })}
    </Layout>
  );
}

export default function DashboardSpaces() {
  return (
    <QueryRenderer
      query={graphql`
        query indexSpacesQuery {
          spaces {
            dashboard {
              title
              blocks {
                type
                items {
                  __typename
                  ... on Payment {
                    ...PaymentRow_data
                  }
                  ... on ItemTODO {
                    body
                  }
                }
              }
            }
          }
        }
      `}
      render={renderQueryRendererResult}
    />
  );
}
