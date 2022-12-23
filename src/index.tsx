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
import { TypedUseSelectorHook, useSelector as SelectorHook, useDispatch as dispatchHook } from 'react-redux';
import { Action, ActionCreator, Dispatch } from "redux";
import { TUtilsActions } from './services/actions/utils-actions';




declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TAppActions>
>;

export type TAppActions = TUtilsActions;
export type AppDispatch = Dispatch<TAppActions>;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
   // socketMiddleware(wsUrls, wsActions),
   // socketMiddleware(wsUrls, wsAuthActions)
  )
);

const store = createStore(rootReducer, enhancer);
export type RootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<RootState> = SelectorHook;
export const useDispatch = () => dispatchHook<AppDispatch & AppThunk>();

declare module "react" {
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  }
}



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
