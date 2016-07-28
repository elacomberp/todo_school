import { LIST_ADDED, REMOVED_LIST } from '../actions/list';
import { MADE_LISTS } from '../actions/fetch';
import _ from 'lodash';

export default function lists(state = {}, action) {
  switch (action.type) {
  case LIST_ADDED:
    return {
      ...state,
        [action.list.id]: {
          id: action.list.id,
          label: action.list.label,
        },
    };
  case REMOVED_LIST:
    return {
      ..._.omit(state, action.idList),
    };
  case MADE_LISTS:
    return {
      ...state,
      ...action.lists,
    };
  default:
    return state;
  }
}