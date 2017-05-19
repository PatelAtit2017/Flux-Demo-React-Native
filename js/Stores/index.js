
'use strict'

import {
  ReduceStore,
} from 'flux/utils'

import Dispatcher from '../Dispatchers'

import {
  ActionTypes
} from '../Actions'

/**
* Counter store - only holds counter value
*/

class CounterStore extends ReduceStore {

  constructor() {
    super(Dispatcher)
  }

  getInitialState() {
    const initalState = {
      counter: 0,
    }

    return initalState
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.INCREASE: {
        const currentValue = state.counter
        return {
          ...state,
          counter: currentValue + 1
        }
      }

      case ActionTypes.DECREASE: {
        const currentValue = state.counter
        return {
          ...state,
          counter: currentValue - 1
        }
      }

      default:
        return state
    }
  }
}

export default new CounterStore()
