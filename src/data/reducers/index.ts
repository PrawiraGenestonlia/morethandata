import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/lib/storage/session';

import { templateReducer, TemplateState } from './_template';
import { authReducer, AuthState } from './auth';

type withPersistance = {
  _persist: {
    version: number,
    rehydrated: boolean
  }
}

export type REDUCER_TYPES = {
  template: TemplateState & withPersistance,
  auth: AuthState & withPersistance
}

export default combineReducers({
  template: persistReducer({ key: 'template', storage: localStorage }, templateReducer),
  auth: persistReducer({ key: 'auth', storage: sessionStorage }, authReducer),
})