import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './src/screen/Home'
import Coin from './src/screen/Coin';

const AppNavigator = StackNavigator({
  HomeScreen: { screen: Home },
  CoinScreen: { screen: Coin }
});

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}