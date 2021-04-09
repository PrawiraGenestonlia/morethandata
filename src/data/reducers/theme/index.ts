import { AnyAction } from 'redux';
import { themeActions } from '../../actions';

export interface ThemeState {
  theme: string
}

export const themeReducer = (state = {} as ThemeState, action: AnyAction) => {
  switch (action.type) {
    case themeActions.TYPES.TOGGLE_THEME:
      return { ...state, theme: action.payload }
    default:
      return { ...state }
  }
}