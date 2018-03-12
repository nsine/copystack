import * as ActionTypes from '../constants';

const initialState = {
  snippets: [],
};

const actionsMap = {
  [ActionTypes.ADD_SNIPPET](state, action) {
    return {
      snippets: [...state.snippets, action.snippet],
    };
  },
};

export default function snippetReducer(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
