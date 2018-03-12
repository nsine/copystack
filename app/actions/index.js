import * as ActionTypes from '../constants';

export const addSnippet = (snippet) => ({
  type: ActionTypes.ADD_SNIPPET,
  snippet,
});
