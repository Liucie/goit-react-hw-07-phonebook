import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import {store} from './redux/store'
import 'normalize.css';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
