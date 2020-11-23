import React from 'react';
import './App.css';
import Profile from "./components/profile";
import ThemeContext from "./components/context/theme";
import { Provider } from 'react-redux'
import ProductList from "./components/productList";

import { createStore } from 'redux'
import mainReducer from './reducers';
import Order from './components/order';
import ProductTypeSelector from "./components/productTypeSelector";

const store = createStore(
    mainReducer,

    // TODO: Remove debug extention on prod
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {

  return (
      <ThemeContext>
          <Provider store={store}>
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
