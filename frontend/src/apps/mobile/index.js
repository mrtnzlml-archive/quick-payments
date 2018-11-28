// @flow

import Expo from 'expo';
import * as React from 'react';
import {DashboardScene} from '_scenes';

import BaseApplication from '../BaseApplication';

function Application() {
  return (
    <BaseApplication>
      <DashboardScene />
    </BaseApplication>
  );
}

Expo.registerRootComponent(Application);
