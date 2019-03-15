// @flow

import * as React from 'react';
import {ScrollView, View} from 'react-native';
import Layout from '_components/layout';
import StyleSheet from '_components/stylesheet';
import Translation from '_translations';

import Card from './Card';

/**
 * TODO:
 * https://medium.com/code-well-live-forever/credit-cards-with-stripe-and-react-native-1bfe9afcbb42
 */
export default function CardsScene() {
  return (
    <Layout title={<Translation id="Cards.Title" />}>
      <ScrollView>
        <View style={styleSheet.cardWrapper}>
          <Card />
        </View>
        <View style={styleSheet.cardWrapper}>
          <Card />
        </View>
      </ScrollView>

      {/* TODO: all customer cards / add new card */}
    </Layout>
  );
}

const styleSheet = StyleSheet.create({
  cardWrapper: {
    paddingBottom: 10,
  },
});
