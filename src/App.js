import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import './App.css';
import Profile from "./components/profile";
import Alert from "./components/alert";
import ThemeContext from "./components/context/theme";
import { Provider } from 'react-redux'
import ProductList from "./components/productList";


import mainReducer from './reducers';
import Order from './components/order';
import ProductTypeSelector from "./components/productTypeSelector";
import {sagaWatcher} from "./saga/watchers";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    mainReducer,
    compose(
        applyMiddleware(
            thunk,
            sagaMiddleware,
        ),
        // TODO: Remove debug extention on prod
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(sagaWatcher);

function App() {

  return (
      <ThemeContext>
          <Provider store={store}>
            <Alert />
            <Order />
            <ProductTypeSelector />
            <div className="App">
              <Profile />
              <ProductList />
            </div>
          </Provider>
      </ThemeContext>
  );
}

export default App;
