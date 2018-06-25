import { handleActions } from 'redux-actions'
import * as Tours from './tours/reducer'
// import * as Other from './other/reducer'

type State = Tours.State /* & Other.State */
const configMap = { ...Tours.configMap /*, ...Other.configMap */ }
const initialState: State = { ...Tours.initialState /*, ...Other.initialState */ }

// Combined reducer
export default handleActions<State, any>(configMap, initialState)
