import * as ActionTypes from '../constants';

const initialState = {
  snippets: [],
};

const actionsMap = {
  [ActionTypes.ADD_SNIPPET](state, action) {
    const nextId = state.snippets.length + 1;

    return {
      snippets: [...state.snippets, {
        id: nextId,
        ...action.snippet,
      }],
    };
  },

  [ActionTypes.REMOVE_SNIPPET](state, action) {
    const index = state.snippets.findIndex(s => s.id === action.snippetId);
    if (index === -1) {
      return state;
    }

    return {
      snippets: [
        ...state.snippets.slice(0, index),
        ...state.snippets.slice(index + 1),
      ],
    };
  }
};

export default function snippetReducer(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
