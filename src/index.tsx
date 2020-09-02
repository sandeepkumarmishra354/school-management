import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'rsuite/lib/styles/themes/default/index.less';
import { authStore } from './mobx/store/auth/store.auth';
import {utilsStore} from './mobx/store/store.util';

ReactDOM.render(
  <React.StrictMode>
    <App authStore={authStore} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
