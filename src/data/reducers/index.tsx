import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// import localStorage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/lib/storage/session';

import { templateReducer, TemplateState } from './_template';

type withPersistance = {
  _persist: {
    version: number,
    rehydrated: boolean
  }
}

export type REDUCER_TYPES = {
  template: TemplateState & withPersistance
}

export default combineReducers({
  template: persistReducer({ key: 'template', storage: sessionStorage }, templateReducer),
})