// tslint:disable:no-expression-statement
import { initialState, State } from './reducer'
import update from 'immutability-helper'
import { getData, getFilter, getMatchString, getDataWithMatcher, getFilterKeywords, getMatchingList } from './selectors'
import tours from './__mocks__/tours.json'

describe('Tours selectors', () => {
  test('getData is getter', () => {
    const state = { ...initialState }
    expect(getData(state)).toBe(state.tours.data)
  })

  test('getFilter is getter', () => {
    const state = update(initialState, { tours: { filter: { $set: 'aaa' } } })
    expect(getFilter(state)).toBe('aaa')
  })

  test('getMatchString', () => {
    expect(getMatchString(tours[0])).toMatchSnapshot()
  })

  test('getDataWithMatcher', () => {
    const state = update(initialState, { tours: { data: { $set: tours } } })
    expect(getDataWithMatcher(state)).toMatchSnapshot()
  })

  test('getFilterKeywords > empty filter', () => {
    const state = update(initialState, { tours: { filter: { $set: '' } } })
    expect(getFilterKeywords(state)).toEqual([])
  })

  test('getFilterKeywords > short filter', () => {
    const state = update(initialState, { tours: { filter: { $set: 'aa' } } })
    expect(getFilterKeywords(state)).toEqual([])
  })

  test('getFilterKeywords > short keywords', () => {
    const state = update(initialState, { tours: { filter: { $set: 'aa bb CC' } } })
    expect(getFilterKeywords(state)).toEqual(['aa bb cc'])
  })

  test('getFilterKeywords > some long keywords', () => {
    const state = update(initialState, { tours: { filter: { $set: 'aa BB CCC' } } })
    expect(getFilterKeywords(state)).toEqual(['aa bb ccc', 'ccc'])
  })
})
