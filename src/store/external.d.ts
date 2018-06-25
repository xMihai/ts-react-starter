import { ActionMap, ActionFunctionAny, Action } from 'redux-actions'

// tslint:disable:readonly-keyword

// redux-actions types are missing the case of nested action creators
// this is the overload for createActions
declare module 'redux-actions' {
  export function createActions(
    actionMapOrIdentityAction: ActionMap<any, any> | string,
    ...identityActions: string[]
  ): INestedCreatorsMap

  // Utility interface for nested action creators map
  export interface INestedCreatorsMap {
    readonly [actionName: string]: {
      readonly [actionName: string]: ActionFunctionAny<Action<any>>
    }
  }
}
