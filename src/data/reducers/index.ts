import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/lib/storage/session';

import { authReducer, AuthState } from './auth';
import { themeReducer, ThemeState } from './theme';

type withPersistance = {
  _persist: {
    version: number,
    rehydrated: boolean
  }
}

export type REDUCER_TYPES = {
  auth: AuthState & withPersistance,
  theme: ThemeState & withPersistance
}

export default combineReducers({
  auth: persistReducer({ key: 'auth', storage: sessionStorage }, authReducer),
  theme: persistReducer({ key: 'theme', storage: localStorage }, themeReducer),
})