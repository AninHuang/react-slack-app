import * as actionTypes from './types';

// Action Creator
export const setUser = user => {
  // Action - a plain JavaScript object that describes what happened
  return {
    type: actionTypes.SET_USER,
    payload: {
      currentUser: user
    }
  }
}

export const clearUser = user => {
  return {
    type: actionTypes.CLEAR_USER
  }
}