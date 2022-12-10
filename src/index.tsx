import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from './services/store/rootReducer';
import thunk, { ThunkDispatch } from "redux-thunk";
import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator, Dispatch } from "redux";




declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
   // socketMiddleware(wsUrls, wsActions),
   // socketMiddleware(wsUrls, wsAuthActions)
  )
);

const store = createStore(rootReducer, enhancer);
//export type RootState = ReturnType<typeof rootReducer>;




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>          
          <App />
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
);


reportWebVitals();
