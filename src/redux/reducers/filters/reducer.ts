// // Constants

import { Reducer } from 'redux'
import {
  addFilterBrand,
  addFilterItemType,
  addFilterTag,
  removeFilterBrand,
  removeFilterItemType,
  removeFilterTag,
} from './reducerHelpers'
import {
  AddFilterItemTypeCreator,
  AddFilterTagCreator,
  FilterAction,
  IFilterState,
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

    default:
      return state
  }
}

export default filterReducer

const addFilterTagCreator: AddFilterTagCreator = (tag) => {
  return { type: ADD_FILTER_TAG, payload: tag }
}

const removeFilterTagCreator: RemoveFilterTagCreator = (tag) => {
  return { type: REMOVE_FILTER_TAG, payload: tag }
}

const addFilterItemTypeCreator: AddFilterItemTypeCreator = (itemType) => {
  return { type: ADD_FILTER_ITEMTYPE, payload: itemType }
}

const removeFilterItemTypeCreator: RemoveFilterItemTypeCreator = (itemType) => {
  return {type: REMOVE_FILTER_ITEMTYPE, payload: itemType}
} 

export const filterActionCreators = {
  addFilterTagCreator,
  removeFilterTagCreator,
  addFilterItemTypeCreator,
  removeFilterItemTypeCreator
}
