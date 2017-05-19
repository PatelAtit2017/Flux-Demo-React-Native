
'use strict'

import Dispatcher from '../Dispatchers'

/**
* Actions to Increase counter value, decrease counter value, Push New Route, Pop Route
*
*/

export const ActionTypes = {
  INCREASE: 'INCREASE',     // Increase counter value
  DECREASE: 'DECREASE',     // Decrease counter value
  PUSH_NEW_ROUTE: 'PUSH_NEW_ROUTE',   // Push New Route
  POP: 'POP',   // Pop route
}

const Actions = {

  increase() {
    Dispatcher.dispatch({
      type: ActionTypes.INCREASE,
    })
  },

  decrease() {
    Dispatcher.dispatch({
      type: ActionTypes.DECREASE,
    })
  },

  pushNewRoute(routeId) {
    Dispatcher.dispatch({
      type: ActionTypes.PUSH_NEW_ROUTE,
      payload: routeId,
    })
  },

  pop() {
    Dispatcher.dispatch({
      type: ActionTypes.POP,
    })
  }

}

export default Actions
