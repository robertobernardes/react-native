
/*
import { AppRegistry } from 'react-native';
import App from './App';
import Login from './screens/Login';

AppRegistry.registerComponent('InstaluraMobile', () => Login);
*/
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import AppNavigation from './screens/AppNavigation'

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class InstaluraMobile extends Component {
  render() {
    return <AppNavigation/>
  }
}

AppRegistry.registerComponent('InstaluraMobile', () => InstaluraMobile);
