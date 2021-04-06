import { AnyAction } from 'redux';
import { _templateActions } from '../../actions';

export interface TemplateState {
  fetching: boolean,
  error: string,
  data: Object
}

export const templateReducer = (state = {} as TemplateState, action: AnyAction) => {
  switch (action.type) {
    case _templateActions.TYPES.ACTION_REQUEST:
      return { ...state, fetching: true, error: "" }
    case _templateActions.TYPES.ACTION_RESPONSE:
      return { ...state, fetching: false, error: "", data: action.payload }
    case _templateActions.TYPES.ACTION_ERROR:
      return { ...state, fetching: false, error: action.payload }
    default:
      return { ...state }
  }
}