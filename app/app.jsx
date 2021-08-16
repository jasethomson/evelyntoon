import React from 'react';
// import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import AppSwitch from './appSwitch';
import NavHeader from './components/navHeader';
import SiteFooter from './components/siteFooter';

const App = props => {
  return (
    <Router>
      <NavHeader />
      <AppSwitch />
      <SiteFooter />
    </Router>
  );
}

export default App;
