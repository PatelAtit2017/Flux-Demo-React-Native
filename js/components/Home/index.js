
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
*  Home Screen - The second Screen. user can decrease count or pop back from here.
*/

class Home extends Component {

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

  decrease() {
    Actions.decrease()
  }

  popBack() {
    Actions.pop()
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
        <TouchableOpacity style={[styles.counterButton, { marginBottom : 10 }]} onPress={() => this.decrease()}>
          <Text style={styles.buttonLabel}>Decrease Counter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.counterButton} onPress={() => this.popBack()}>
          <Text style={styles.buttonLabel}>Pop Back</Text>
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

export default Container.create(Home)
