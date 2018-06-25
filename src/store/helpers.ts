import { Action } from 'redux-actions'

// Identity function, returns first argument
export const identity = <T>(x: T): T => x

// Increment argument by one
export const increment = (x: number) => x + 1

// Decrement argument by one
export const decrement = (x: number) => x - 1

// Checks if an action represents a request (no payload)
export const isRequestAction = (action: Action<any>): action is RequestAction => typeof action.payload === 'undefined'

// Checks if an action represents a success response (no error flag, has payload)
export const isPayloadAction = <T>(action: Action<T>): action is PayloadAction<T> =>
  !action.error && typeof action.payload !== 'undefined'

// Checks if an action represents an error response ( error flag)
export const isErrorAction = (action: Action<any>): action is ErrorAction => !!action.error
