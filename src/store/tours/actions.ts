import { INestedCreatorsMap, ActionFunctionAny, Action, ActionMap } from 'redux-actions'
import { identity } from '@@store/helpers'

// Action creators configuration map
export const configMap: ActionMap<any, any> = { TOURS: { FETCH: identity, FILTER: identity } }

// The shape of the actions object
export interface Actions extends INestedCreatorsMap {
  readonly tours: {
    readonly fetch: ActionFunctionAny<Action<Tour[]>>
    readonly filter: ActionFunctionAny<Action<string>>
  }
}
