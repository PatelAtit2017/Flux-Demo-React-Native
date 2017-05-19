'use strict'

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  Container
} from 'flux/utils'

import Actions from '../../Actions'
import CounterStore from '../../Stores'
import RouteStore from '../../Stores/route'

/**
*  landing Screen - The first Screen where user will land. User can increase count or push to Home from here.
*/

class Landing extends Component {

  static getStores() {
    return [
      CounterStore,
      RouteStore,
    ]
  }

  static calculateState(prevState) {
    return {
      CounterStore: CounterStore.getState()
    }
  }

  increase() {
    Actions.increase()
  }

  goToNextScreen() {
    Actions.pushNewRoute('Home')
  }

  render() {
    const {
      counter
    } = this.state.CounterStore

    return (
      <View style={styles.container}>
        <View style={[styles.counterButton, { marginBottom : 10 }]}>
          <Text style={styles.buttonLabel}>{counter}</Text>
        </View>
        <TouchableOpacity style={[styles.counterButton, { marginBottom : 10 }]} onPress={() => this.increase()}>
          <Text style={styles.buttonLabel}>Increase Counter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.counterButton} onPress={() => this.goToNextScreen()}>
          <Text style={styles.buttonLabel}>Push Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(67,88,101)',
  },
  counterButton: {
    height: 60,
    width: Dimensions.get('window').width / 2  ,
    backgroundColor: 'rgb(239,69,53)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  buttonLabel: {
    color: 'white',
    fontSize: 16,
  },
});


export default Container.create(Landing)
