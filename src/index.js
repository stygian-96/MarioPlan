import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducer/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore';
import { reactReduxFirebase, getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import firebase from 'firebase/app'
import { useSelector  } from 'react-redux'
import { isLoaded  } from 'react-redux-firebase'

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(fbConfig),
  )
);

const profileSpecificProps = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false
}

const rrfProps = {
  firebase,
  config: fbConfig,
  config: profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance,
  userProfile: 'users', 
  presence: 'presence', 
  sessions: 'sessions'
};


function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div></div>;
  return children
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
