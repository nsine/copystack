import * as md5 from 'md5';

import * as ActionTypes from '../constants';


const initialState = {
  snippets: [],
};

const actionsMap = {
  [ActionTypes.ADD_SNIPPET](state, action) {
    const hash = md5.default(JSON.stringify(action.snippet));

    const snippetsWithoutSame = state.snippets.filter(s => s.hash !== hash);

    const nextId = snippetsWithoutSame.length ? snippetsWithoutSame[0].id + 1 : 1;
    const time = new Date();

    return {
      snippets: [
        {
          id: nextId,
          time,
          hash,
          ...action.snippet,
        },
        ...snippetsWithoutSame,
      ],
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
