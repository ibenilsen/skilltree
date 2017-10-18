
import 'bulma/css/bulma.css';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import App from './App';
import Overview from './components/Overview';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App>
        <Switch>
          <Route path="/:company/" component={Overview} />
          <Route path="/" component={Overview} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

  registerServiceWorker();
