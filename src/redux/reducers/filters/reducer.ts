// // Constants

import { Reducer } from 'redux'
import {
  addFilterBrand,
  addFilterItemType,
  addFilterTag,
  removeAll,
  removeFilterBrand,
  removeFilterItemType,
  removeFilterTag,
} from './reducerHelpers'
import {
  AddFilterBrandCreator,
  AddFilterItemTypeCreator,
  AddFilterTagCreator,
  FilterAction,
  IFilterState,
  RemoveAllFiltersFromSpecificTypeCreator,
  RemoveFilterBrandCreator,
  RemoveFilterItemTypeCreator,
  RemoveFilterTagCreator,
} from './types'

// import { Reducer } from 'redux'

export const ADD_FILTER_BRAND = 'ADD_FILTER_BRAND'
export const ADD_FILTER_TAG = 'ADD_FILTER_TAG'
export const ADD_FILTER_ITEMTYPE = 'ADD_FILTER_ITEMTYPE'

export const REMOVE_FILTER_BRAND = 'REMOVE_FILTER_BRAND'
export const REMOVE_FILTER_TAG = 'REMOVE_FILTER_TAG'
export const REMOVE_FILTER_ITEMTYPE = 'REMOVE_FILTER_ITEMTYPE'

export const REMOVE_ALL_FILTERS_FROM_SPECIFIC_TYPE =
  'REMOVE_ALL_FILTERS_FROM_SPECIFIC_TYPE'

const initialState: IFilterState = {
  brands: [],
  itemType: '',
  tags: [],
}

// Reducer

const filterReducer: Reducer<IFilterState, FilterAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_FILTER_BRAND:
      return addFilterBrand(state, action.payload)

    case REMOVE_FILTER_BRAND:
      return removeFilterBrand(state, action.payload)

    case ADD_FILTER_TAG:
      return addFilterTag(state, action.payload)

    case REMOVE_FILTER_TAG:
      return removeFilterTag(state, action.payload)

    case ADD_FILTER_ITEMTYPE:
      return addFilterItemType(state, action.payload)

    case REMOVE_FILTER_ITEMTYPE:
      return removeFilterItemType(state, action.payload)

    case REMOVE_ALL_FILTERS_FROM_SPECIFIC_TYPE:
      return removeAll(state, action.payload)

    default:
      return state
  }
}

export default filterReducer

const addTagCreator: AddFilterTagCreator = (tag) => {
  return { type: ADD_FILTER_TAG, payload: tag }
}

const removeTagCreator: RemoveFilterTagCreator = (tag) => {
  return { type: REMOVE_FILTER_TAG, payload: tag }
}

const addItemTypeCreator: AddFilterItemTypeCreator = (itemType) => {
  return { type: ADD_FILTER_ITEMTYPE, payload: itemType }
}

const removeItemTypeCreator: RemoveFilterItemTypeCreator = (itemType) => {
  return { type: REMOVE_FILTER_ITEMTYPE, payload: itemType }
}

const addBrandCreator: AddFilterBrandCreator = (brand) => {
  return { type: ADD_FILTER_BRAND, payload: brand }
}

const removeBrandCreator: RemoveFilterBrandCreator = (brand) => {
  return { type: REMOVE_FILTER_BRAND, payload: brand }
}

const removeAllFilterCreator: RemoveAllFiltersFromSpecificTypeCreator =
  (typeName) => {
    return { type: REMOVE_ALL_FILTERS_FROM_SPECIFIC_TYPE, payload: typeName }
  }

export const filterActionCreators = {
  addTagCreator,
  removeTagCreator,
  addItemTypeCreator,
  removeItemTypeCreator,
  addBrandCreator,
  removeBrandCreator,
  removeAllFilterCreator,
}
