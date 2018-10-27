// @flow

import {View} from 'react-native';
import * as React from 'react';
import ReactDOM from 'react-dom';
import {invariant} from '_utils';
import {Text, StyleSheet, Colors} from '_shared';
import Translation from '_translations';
import {Switchboard} from '_navigation';

// TODO: separate into truly shared package
import PaymentsList from '../../packages/scenes/dashboard/PaymentsList';
import BaseApplication from '../BaseApplication';

const container = document.getElementById('⚛'); // eslint-disable-line no-undef
invariant(container !== null, 'Cannot render React application because root element is missing.');

function Application() {
  return (
    <BaseApplication>
      <Switchboard
        initialScene={
          <View style={styleSheet.application}>
            <View style={styleSheet.menu}>
              <View style={styleSheet.menuItem}>
                <Text style={styleSheet.menuItemText}>
                  <Translation id="Dashboard.Title" />
                </Text>
              </View>
            </View>
            <View style={styleSheet.content}>
              <PaymentsList />
            </View>
          </View>
        }
      />
    </BaseApplication>
  );
}

const styleSheet = StyleSheet.create({
  application: {
    flex: 1,
    flexDirection: 'row',
  },
  menu: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.brandPrimary,
    paddingTop: 50,
  },
  menuItem: {
    backgroundColor: Colors.green.$200,
    paddingLeft: 10,
    paddingVertical: 15,
  },
  menuItemText: {
    color: Colors.text,
  },
  content: {
    flex: 5,
    marginHorizontal: 20,
  },
});

ReactDOM.render(<Application />, container);
