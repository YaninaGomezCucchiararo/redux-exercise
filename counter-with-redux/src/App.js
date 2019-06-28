import React from 'react';
import CounterContainer from './containers/Counter'
import { counterApp } from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(counterApp)

function App() {
  return (
    <Provider store={store} >
      <CounterContainer />
    </Provider>
  );
}

export default App;
