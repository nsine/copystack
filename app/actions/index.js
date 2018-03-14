import * as ActionTypes from '../constants';

export const addSnippet = (snippet) => ({
  type: ActionTypes.ADD_SNIPPET,
  snippet,
});

export const removeSnippet = (snippetId) => ({
  type: ActionTypes.REMOVE_SNIPPET,
  snippetId,
});

export const clearSnippets = () => ({
  type: ActionTypes.CLEAR_SNIPPETS,
});
