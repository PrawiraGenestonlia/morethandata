const TYPES = {
  TOGGLE_THEME: "TOGGLE_THEME"
}

export const actions = {
  toggleTheme: (payload: string) => ({
    type: TYPES.TOGGLE_THEME, payload
  }),
  TYPES: TYPES
}