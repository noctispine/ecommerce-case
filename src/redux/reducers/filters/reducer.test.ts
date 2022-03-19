// export const ADD_FILTER_BRAND = 'ADD_FILTER_BRAND'
// export const ADD_FILTER_TAG = 'ADD_FILTER_TAG'
// export const ADD_FILTER_ITEMTYPE = 'ADD_FILTER_ITEMTYPE'

import { mockFilterState } from '../mocks/mocks'
import filterReducer, { filterActionCreators, initialState } from './reducer'

// export const REMOVE_FILTER_BRAND = 'REMOVE_FILTER_BRAND'
// export const REMOVE_FILTER_TAG = 'REMOVE_FILTER_TAG'
// export const REMOVE_FILTER_ITEMTYPE = 'REMOVE_FILTER_ITEMTYPE'

// export const REMOVE_ALL_FILTERS_FROM_SPECIFIC_TYPE =
//   'REMOVE_ALL_FILTERS_FROM_SPECIFIC_TYPE'

describe('filter actions', () => {
  it('should add brand to filters', () => {
    expect(
      filterReducer(
        initialState,
        filterActionCreators.addBrandCreator('exampleBrand')
      )
    ).toEqual({ ...initialState, brands: ['exampleBrand'] })
  })

  it('should remove brand', () => {
    initialState.brands = ['exampleBrand']
    expect(
      filterReducer(
        initialState,
        filterActionCreators.removeBrandCreator('exampleBrand')
      )
    ).toEqual({ ...initialState, brands: [] })
  })

  it('should add tag', () => {
    expect(
      filterReducer(initialState, filterActionCreators.addTagCreator('exampleTag'))
    ).toEqual({ ...initialState, tags: ['exampleTag'] })
  })

  it('should remove tag', () => {
    initialState.tags = ['tag1', 'tag2']
    expect(
      filterReducer(initialState, filterActionCreators.removeTagCreator('tag2'))
    ).toEqual({ ...initialState, tags: ['tag1'] })
  })

  it('should add item type', () => {
    expect(
      filterReducer(initialState, filterActionCreators.addItemTypeCreator('type'))
    ).toEqual({ ...initialState, itemType: 'type' })
  })

  it('should remove item type', () => {
    initialState.itemType = 'type'
    expect(
      filterReducer(initialState, filterActionCreators.removeItemTypeCreator('type'))
    ).toEqual({ ...initialState, itemType: '' })
  })

  it('should remove all tags', () => {
    expect(
      filterReducer(
        mockFilterState,
        filterActionCreators.removeAllFilterCreator('tags')
      )
    ).toEqual({ ...mockFilterState, tags: [] })
  })

  it('should remove all brands', () => {
    expect(
      filterReducer(
        mockFilterState,
        filterActionCreators.removeAllFilterCreator('brands')
      )
    ).toEqual({ ...mockFilterState, brands: [] })
  })
})
