import React, { useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../../components/Header';

import { Layout, MainContent } from './MainLayoutStyle';
import { GlobalStyle } from '../../global-styles';
import Employee from '../Employee';

export default function MainLayout() {
  useEffect(() => {
    // fetchFavourites();
  }, []);
  return (
    <Layout>
      <Header />
      <MainContent>
        <Switch>
          <Route exact path="/" component={Employee} />
        </Switch>
      </MainContent>
      {/* <Footer /> */}
      <GlobalStyle />
    </Layout>
  )
}
