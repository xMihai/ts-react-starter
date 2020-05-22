/* eslint-disable @typescript-eslint/no-explicit-any */
import autoBind from 'auto-bind'

function withBoundedMethods<T extends { new (...args: any[]): {} }>(constructor: T): T {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args)
      autoBind(this)
    }
  }
}

export default withBoundedMethods
