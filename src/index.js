import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//import from Router
import { BrowserRouter } from 'react-router-dom';

//import from Redux
import { Provider } from 'react-redux';

//import store
import store from './store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
