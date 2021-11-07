import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@emotion/react';
import './index.css';

import App from './components/App/App';

import { PersistGate } from 'redux-persist/integration/react';
import store from '../src/redux/store';
import Preloader from './components/Loader/Loader';

const theme = {
  size: {
    title: '21px',
    subtitle: '15px',
    button: '17px',
    review: '18px',
    small: '13px',
  },

  icon: {
    small: '27px',
    medium: '40px',
  },

  colors: {
    white: '#ffffff',
    black: '#090c1c',
    blue: '#3f7df4',
    contacts: '#202437',
    primaryText: '#212121',
    secondaryText: '#757575',
    shadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);',
    shadowHover: '0px 0px 13px 5px rgba(122, 122, 122, 1)',
  },

  animate: {
    transition: '500ms cubic-bezier(0.075, 0.82, 0.165, 1)',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store.store}>
        <PersistGate loading={<Preloader />} persistor={store.persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
