import sortReducer, { selectSortActionCreator, Sort } from './reducer'

describe('should select sort', () => {
  const initialState = {
    sort: null,
  }
  it('should select sorts', () => {
    const sorts: Sort[] = [
      'NEW_TO_OLD',
      'OLD_TO_NEW',
      'PRICE_HIGH_TO_LOW',
      'PRICE_LOW_TO_HIGH',
    ]
    for (const sort of sorts) {
      expect(sortReducer(initialState, selectSortActionCreator(sort))).toEqual({
        sort,
      })
    }
  })
})
