const TYPES = {
  ACTION_REQUEST: "ACTION_REQUEST",
  ACTION_RESPONSE: "ACTION_RESPONSE",
  ACTION_ERROR: "ACTION_ERROR"
}

export const actions = {
  request: (params: unknown) => ({
    type: TYPES.ACTION_REQUEST, params
  }),
  response: (payload: unknown) => ({
    type: TYPES.ACTION_RESPONSE, payload
  }),
  error: (payload: unknown) => ({
    type: TYPES.ACTION_RESPONSE, payload
  }),
  TYPES: TYPES
}