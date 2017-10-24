
import 'bulma/css/bulma.css';
import './style/index.css';
import './style/line-clamp.css';
import './style/flexboxgrid.min.css';

import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import reducers from './reducers';
import { initAuth } from './auth';
import App from './components/App';



const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);
const store = createStoreWithMiddleware(reducers);

registerServiceWorker();
function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
  }


  initAuth(store.dispatch)
  .then(() => render(App))
  .catch(error => console.error(error));
