import { AnyAction } from 'redux';
import { authActions } from '../../actions';

export interface AuthState {
  fetching: boolean,
  error: string,
  token: string
}

export const authReducer = (state = {} as AuthState, action: AnyAction) => {
  switch (action.type) {
    case authActions.TYPES.AUTH_LOGIN_REQUEST:
      return { ...state, fetching: true, error: "" }
    case authActions.TYPES.AUTH_LOGIN_RESPONSE:
      return { ...state, fetching: false, error: "", token: action.payload }
    case authActions.TYPES.AUTH_LOGIN_ERROR:
      return { ...state, fetching: false, error: action.payload }
    case authActions.TYPES.AUTH__LOGOUT:
      return { ...state, fetching: false, error: "", token: "" }
    default:
      return { ...state }
  }
}