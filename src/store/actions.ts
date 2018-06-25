import { createActions } from 'redux-actions'
import * as Tours from './tours/actions'
// import * as Other from './other/actions'

type Actions = Tours.Actions /* & Other.Actions */
const configMap = { ...Tours.configMap /*, ...Other.configMap */ }

// Create actions map
export default createActions(configMap) as Actions
