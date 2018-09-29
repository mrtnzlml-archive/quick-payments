// @flow

import Expo from 'expo';
import * as React from 'react';
import {DashboardScene} from '_scenes';
import {Switchboard} from '_navigation';

import BaseApplication from '../BaseApplication';

function Application() {
  return (
    <BaseApplication>
      <Switchboard initialScene={<DashboardScene />} />
    </BaseApplication>
  );
}

Expo.registerRootComponent(Application);
