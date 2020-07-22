import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainLayout from './containers/MainLayout';
import { globalStyleVariables } from './global-styles';

export default () => (
  <BrowserRouter>
    <ThemeProvider theme={globalStyleVariables}>
      <Switch>
        <Route path="/" component={MainLayout} />
      </Switch>
    </ThemeProvider>
  </BrowserRouter>
)
