

'use strict'

import {
  ReduceStore,
} from 'flux/utils'

import Dispatcher from '../Dispatchers'

import {
  ActionTypes
} from '../Actions'

import { globalNav } from '../../AppNavigator'

/**
* RouteStore - only holds stack of app routes.
*/
class RouteStore extends ReduceStore {

  constructor() {
    super(Dispatcher)
  }

  getInitialState() {
    const initalState = {
      route: [
        'Landing'
      ],
    }

    return initalState
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.PUSH_NEW_ROUTE: {
        globalNav.navigator.push({id: action.payload});
        return {
          route: [
            ...state.route,
            action.payload
          ]
        }
      }

      case ActionTypes.POP: {
        globalNav.navigator.pop();
        let routes = state.route;
        routes.pop();
        return {
            route: [
              ...routes,
              action.route
            ]
        }
      }

      default:
        return state
    }
  }
}

export default new RouteStore()
