export interface IAddFilterBrandAction {
  type: 'ADD_FILTER_BRAND'
  payload: string
}

export interface IRemoveFilterBrandAction {
  type: 'REMOVE_FILTER_BRAND'
  payload: string
}

export interface IAddFilterTagAction {
  type: 'ADD_FILTER_TAG'
  payload: string
}

export interface IRemoveFilterTagAction {
  type: 'REMOVE_FILTER_TAG'
  payload: string
}

export interface IAddFilterItemTypeAction {
  type: 'ADD_FILTER_ITEMTYPE'
  payload: string
}

export interface IRemoveFilterItemTypeAction {
  type: 'REMOVE_FILTER_ITEMTYPE'
  payload: string
}

export interface IFilterState {
  tags: string[]
  brands: string[]
  itemType: string
}

export type FilterAction =
  | IAddFilterBrandAction
  | IRemoveFilterBrandAction
  | IAddFilterTagAction
  | IRemoveFilterTagAction
  | IAddFilterItemTypeAction
  | IRemoveFilterItemTypeAction

// Action Creators

export type AddFilterBrandCreator = (brand: string) => IAddFilterBrandAction
export type RemoveFilterBrandCreator = (
  brand: string
) => IRemoveFilterBrandAction

export type AddFilterTagCreator = (tag: string) => IAddFilterTagAction
export type RemoveFilterTagCreator = (tag: string) => IRemoveFilterTagAction

export type AddFilterItemTypeCreator = (itemType: string) => IAddFilterItemTypeAction
export type RemoveFilterItemTypeCreator = (
  itemType: string
) => IRemoveFilterItemTypeAction