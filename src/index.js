import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </ChakraProvider>,
  document.getElementById('root')
);
