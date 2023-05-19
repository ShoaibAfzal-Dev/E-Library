import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Store} from './redux/Store';
import { Provider } from 'react-redux'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <Provider store={Store}>
    <App />
  </Provider>
  </>
);

serviceWorkerRegistration.register();
