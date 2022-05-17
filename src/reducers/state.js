import {
  ACTION_SET_FROM,
  TOKEN_SAVE
} from "../actions/index";

const state = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default {
  token(state = localStorage.getItem('token'),action) {
    const { type, payload } = action;
    switch (type) {
      case TOKEN_SAVE:{
        localStorage.setItem('token',payload);
        return payload;
      }
      default:
    }

    return state;
  }

};