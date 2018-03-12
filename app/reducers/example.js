import * as ActionTypes from '../constants';

const initialState = {};

const actionsMap = {
  [ActionTypes.TODO_SMTH](state) {
    return state;
  },
};

export default function example(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
