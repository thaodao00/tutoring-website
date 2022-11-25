import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import GlobalStyles from './components/GlobalStyles';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';

import IndexReducer from './index-reducer';
import IndexSagas from './index-sagas';

const sagaMiddleware = createSagaMiddleware();

// const composeSetup =
//     process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//         ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//         : compose;

const store = createStore(IndexReducer, applyMiddleware(sagaMiddleware));

const persistor = persistStore(store);

sagaMiddleware.run(IndexSagas);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
        <PersistGate persistor={persistor}>
            {/*<React.StrictMode>*/}
                <GlobalStyles>
                    <App />
                </GlobalStyles>
            {/*</React.StrictMode>*/}
        </PersistGate>
    </Provider>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
