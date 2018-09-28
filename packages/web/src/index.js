// @flow

import '@babel/polyfill';
import * as React from 'react';
import ReactDOM from 'react-dom';
import {invariant} from '_fbjs';

import Application from '../../Application';

const container = document.getElementById('⚛'); // eslint-disable-line no-undef

invariant(container !== null, 'Cannot render React application because root element is missing.');
ReactDOM.render(<Application />, container);
