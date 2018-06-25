import { createSelector } from 'reselect'

import { State } from './reducer'

// Special character that divides keywords in an internal string. Cannot be used by user in search string.
const DIVIDER = '%'

export const getData = (state: State) => state.tours.data

export const getFilter = (state: State) => state.tours.filter

// Gets all relevant string properties, converts them to lowercase and concatenates all into one string
// TODO: convert characters with accents
export const getMatchString = (tour: Tour) =>
  [tour.tour_name, tour.description, tour.tour_operator, tour.country, ...tour.destinations]
    .map(s => s.toLocaleLowerCase())
    .join(DIVIDER)

// Get list of tours enhanced with match string
export const getDataWithMatcher = createSelector([getData], data =>
  data.map(tour => ({ ...tour, match: getMatchString(tour) } as EnhancedTour))
)

// Get lowercase keywords with at least three letters
export const getFilterKeywords = createSelector([getFilter], filter =>
  [
    filter.toLocaleLowerCase(),
    ...filter
      .replace(/\W/g, ' ')
      .toLocaleLowerCase()
      .split(' '),
  ].filter(keyword => keyword.length >= 3)
)

// Get the list of tours matching keywords
export const getMatchingList = createSelector(
  [getDataWithMatcher, getFilterKeywords],
  (data, keywords) =>
    keywords.length > 0 ? data.filter(tour => keywords.some(keyword => tour.match.includes(keyword))) : data
)
