/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import Page from 'components/layout/Page';
import HomePage from 'components/HomePage/HomePage';
import './style.scss';

const App = () => (
  <div className="megasplash-container">
    <div className="megasplash-home">
      <Page
        component={<HomePage />}
      />
    </div>
  </div>
);

export default App;
