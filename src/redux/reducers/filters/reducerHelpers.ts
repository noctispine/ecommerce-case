import { FilterStateType, IFilterState } from './types'

type FilterFunc = (state: IFilterState, payload: string) => IFilterState
type FilterAllFunc = (
  state: IFilterState,
  payload: FilterStateType
) => IFilterState

export const addFilterBrand: FilterFunc = (state, payload) => {
  let newBrands = state.brands
  let newState = { ...state }
  newBrands.push(payload)
  newState.brands = newBrands
  return newState
}

export const removeFilterBrand: FilterFunc = (state, payload) => {
  let newBrands = state.brands
  let newState = { ...state }
  newBrands = newBrands.filter((brand) => brand !== payload)
  newState.brands = newBrands
  return newState
}

export const addFilterTag: FilterFunc = (state, payload) => {
  let newTags = state.tags
  let newState = { ...state }
  newTags.push(payload)
  newState.tags = newTags
  return newState
}

export const removeFilterTag: FilterFunc = (state, payload) => {
  let newTags = state.tags
  let newState = { ...state }
  newTags = newTags.filter((tag) => tag !== payload)
  newState.tags = newTags
  return newState
}

export const addFilterItemType: FilterFunc = (state, payload) => {
  let newState = { ...state }
  newState.itemType = payload
  return newState
}

export const removeFilterItemType: FilterFunc = (state, payload) => {
  let newState = { ...state }
  newState.itemType = ''
  return newState
}

export const removeAll: FilterAllFunc = (state, payload) => {
  let newState = { ...state }
  switch (payload) {
    case 'tags': {
      newState.tags = []
      return newState
    }

    case 'brands': {
      newState.brands = []
      return newState
    }

    default:
      return state
  }
}
