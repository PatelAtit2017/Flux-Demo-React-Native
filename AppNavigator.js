/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Navigator,
} from 'react-native-deprecated-custom-components'

import Landing from './js/components/Landing'
import Home from './js/components/Home'

export var globalNav = {}

// Component Map // To be utilized by renderScene method of Root Navigator
const componentMap = {
  'Landing': Landing,
  'Home': Home,
}

/*
 *   Root component of the app
 *
 */

class AppNavigator extends Component {

  componentWillMount() {
    globalNav.navigator = this.navigator
  }

  render() {
    return (
      <Navigator
        ref={(ref) => this.navigator = ref}
        initialRoute={{
          id: 'Landing',
          title: 'My Initial Scene',
        }}
        renderScene={this.renderScene}
        style={{flex: 1}}
      />
    )
  }

  renderScene(route, navigator) {
    globalNav.navigator = navigator
    const Component = componentMap[route.id]
    return (
      <Component navigator={navigator} route={route} />
    )
  }

}

export default AppNavigator
