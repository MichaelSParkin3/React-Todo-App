/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import InputBar from './input_bar';
import List from './list';

const App = () => (
  <div className="app-wrapper container-fluid">
    <InputBar />
    <List />
  </div>
);

export default App;
