
import 'bulma/css/bulma.css';
import './style/index.css';
import './style/line-clamp.css';

import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import App from 'App';
import BuildExplore from 'BuildExplore';
import Overview from 'Overview/Overview';
import LeaderBoard from 'LeaderBoard/LeaderBoard';
import Tournaments from 'Tournaments/Tournaments';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App>
        <Switch>
          <Route path="/builds/" component={BuildExplore} />
          <Route path="/hall/" component={LeaderBoard} />
          <Route path="/tournaments/" component={Tournaments} />

          <Route path="/" component={Overview} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

  registerServiceWorker();
