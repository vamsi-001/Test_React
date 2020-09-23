import React from 'react';
import '../App.css';
import {
  Switch,
  Route, withRouter
} from "react-router-dom";
import Login from './Login.js';
import Navigation from './navbar.js';
import updateClaim from './claimUpdate.js';
import ClaimMenu from './claimList.js';
import HomeClaim from './homeClaim.js';
import "bootstrap/dist/css/bootstrap.min.css";

const Routes = withRouter(({ location }) => {

  return (
    <div className="App">
      <header className="App-header">
        Claim Management System
      </header>
      {location.pathname !== '/' ? <Navigation /> : null}
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/main' component={HomeClaim}></Route>
        <Route exact path='/claimList' component={ClaimMenu}></Route>
        < Route exact path='/claimUpdate/:id' component={updateClaim}></Route>
      </Switch>
      <footer className="page-footer font-small blue pt-2 mt-5">
        <div className="footer-copyright text-center py-2">© 2020 Copyright:Reserved
        </div>
      </footer>
    </div>
  )
})

export default Routes;
