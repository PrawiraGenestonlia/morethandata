const TYPES = {
  AUTH_LOGIN_REQUEST: "AUTH_LOGIN_REQUEST",
  AUTH_LOGIN_RESPONSE: "AUTH_LOGIN_RESPONSE",
  AUTH_LOGIN_ERROR: "AUTH_LOGIN_ERROR",
  AUTH__LOGOUT: "AUTH_LOGOUT"
}

export const actions = {
  login: (body: { username: string, password: string }) => ({
    type: TYPES.AUTH_LOGIN_REQUEST, body
  }),
  loginResponse: (payload: { token: string }) => ({
    type: TYPES.AUTH_LOGIN_RESPONSE, payload
  }),
  errorResponse: (payload: string) => ({
    type: TYPES.AUTH_LOGIN_ERROR, payload
  }),
  logout: () => ({
    type: TYPES.AUTH__LOGOUT
  }),
  TYPES: TYPES
}