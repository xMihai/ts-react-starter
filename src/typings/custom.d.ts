type Keys<T, U> = {
  [P in keyof T]: U
}

interface AssocArray<T> {
  [key: string]: T
}
