import React, {Component} from 'react';
import {  Text, View, Dimensions, Platform} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'
import Bottom from './components/Bottom';
import { Header } from './components/Header';

import reducers from './reducers';



import List from './components/Main'
import AddList from './components/AddList'

import { Router, Scene, Stack, Actions } from 'react-native-router-flux';

// import RealmDB from './components/RealmDB';
const { width, height } = Dimensions.get('window');

export default class App extends Component {

  state = {
    title: 'Deneme',
    premiumArray: ['Menü 1', 'Menü 2', 'Menü 3', 'Menü 4', 'Menü 5'],

    defaultArray: ['Menü 1', 'Menü 2', 'Menü 3', ],

    isPremium: true
  }
  renderRight() {
    return(
      <Text 
      onPress={() => {
        Actions.addlist({ isUpdate: false });
      }}
      style={{ paddingRight: 10, color: 'blue' }}>Add Item</Text>
    );
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));

    return (
      <Provider store={store}>
      <Router 
        navigationBarStyle={styles.navBar}
        titleStyle={styles.titleStyle}
      >
       <Stack key="root">
        <Scene 
          key="list" 
          component={List} 
          title="TODO LIST"
          initial
          renderRightButton={this.renderRight()}
        />

        <Scene 
          key="addlist" 
          component={AddList} 
          title="ADD LIST"
        />

       </Stack>
      </Router>
      </Provider>
    );
  }
}

const styles = {
  navBar: {
    backgroundColor: 'pink'
  },
  titleStyle: {
    color: 'white'
  },
  container: {
    flex: 1,

    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'blue',
      },
    }),
  },
};
