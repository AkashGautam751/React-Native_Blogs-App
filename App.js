import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Routes from './components/Routes';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

export default class App extends Component {
    render() {
      const state= createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
          <Provider store={state}>
            <Routes/>
          </Provider>
        );
    }
}


