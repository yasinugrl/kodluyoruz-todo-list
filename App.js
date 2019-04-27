import React, {Component} from 'react';
import {  Text, View, Dimensions, SafeAreaView} from 'react-native';
import Bottom from './components/Bottom';
import { Header } from './components/Header';

import Main from './components/Main'

const { width, height } = Dimensions.get('window');


export default class App extends Component {

  state = {
    title: 'Deneme',
    premiumArray: ['Menü 1', 'Menü 2', 'Menü 3', 'Menü 4', 'Menü 5'],

    defaultArray: ['Menü 1', 'Menü 2', 'Menü 3', ],

    isPremium: true
  }

  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {

    const { isPremium, premiumArray, defaultArray } = this.state;

    console.log('state', this.state);
    

    console.log('render');
    return (
      <SafeAreaView style={styles.container}>

          <Header isLogin={true} />

          <Main />

      </SafeAreaView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#ededed',
    flexDirection: 'column',
  },
};
