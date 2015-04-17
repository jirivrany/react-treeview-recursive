'use strict';

//polyfill must be included for advanced ES6 features such as array.find
require('babel-core/polyfill');

import React from 'react';
import App from './App';

React.render(<App />, document.body);