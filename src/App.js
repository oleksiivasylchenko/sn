import React from 'react';
import './App.css';
import Profile from "./components/profile";
import ThemeContext from "./components/context/theme";
import { Provider } from 'react-redux'
import ProductList from "./components/productList";

import { createStore } from 'redux'
import mainReducer from './reducers';

const store = createStore(mainReducer);

function App() {

  return (
      <ThemeContext>
          <Provider store={store}>
            <div className="App">
              <Profile />
              <ProductList />
            </div>
          </Provider>
      </ThemeContext>
  );
}

export default App;
