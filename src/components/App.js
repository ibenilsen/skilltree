import React, { Component } from 'react';
import TopNav from './TopNav/TopNav';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { authActions, getAuth } from '../auth';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Explore from './Explore/Explore';
import Overview from './Overview/Overview';
import LeaderBoard from './LeaderBoard/LeaderBoard';
import SignIn from './sign-in';
import firebase from 'firebase';


class App extends Component {
  render() {
    console.log(this);
    const authenticated = this.props.authenticated;
    return (
      <div className="App">
        <TopNav
          authenticated={authenticated}
          signOut={this.props.signOut}

        />
        <div className="Primary">
          <div className="width-constraint">
            <Switch>
              <Route path="/skills/" component={Overview} authenticated={authenticated}/>
              <Route path="/signin/" component={SignIn} authenticated={authenticated}/>
              <Route path="/hall/" component={LeaderBoard} authenticated={authenticated}/>
              <Route path="/" component={Explore} authenticated={authenticated}/>
            </Switch>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = getAuth;

const mapDispatchToProps = {
  signOut: authActions.signOut
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
