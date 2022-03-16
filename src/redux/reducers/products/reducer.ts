// Constants

import { Reducer } from 'redux'

export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS__FAIL = 'FETCH_PRODUCTS_FAIL'

// Interfaces

export interface IProduct {
  tags: string[]
  price: number
  name: string
  description: string
  slug: string
  added: number
  manufacturer: string
  itemType: string
}

export interface IProductState {
  products: IProduct[] | []
  error: string | null
  loading: boolean
}

export interface IFetchProductsStartAction {
  type: 'FETCH_PRODUCTS_START'
}

export interface IFetchProductsSuccessAction {
  type: 'FETCH_PRODUCTS_SUCCESS'
  payload: IProduct[]
}

export interface IFetchProductsFailAction {
  type: 'FETCH_PRODUCTS_FAIL'
  payload: string
}

type FetchProductsAction =
  | IFetchProductsStartAction
  | IFetchProductsSuccessAction
  | IFetchProductsFailAction

export type FetchProductsStartCreator = () => IFetchProductsStartAction
export type FetchProductsSuccessCreator = (
  products: IProduct[]
) => IFetchProductsSuccessAction
export type FetchProductsFailCreator = (
  error: string
) => IFetchProductsFailAction

// Initial State
const initialState: IProductState = {
  products: [],
  error: null,
  loading: false,
}

// Reducer

const productsReducer: Reducer<IProductState, FetchProductsAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return { ...state, loading: true }
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload }
    case FETCH_PRODUCTS__FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

// Action Creators
const fetchStart: FetchProductsStartCreator = () => {
  return { type: FETCH_PRODUCTS_START }
}

const fetchSuccess: FetchProductsSuccessCreator = (products: IProduct[]) => {
  return { type: FETCH_PRODUCTS_SUCCESS, payload: products }
}

const fetchFail: FetchProductsFailCreator = (error: string) => {
  return { type: FETCH_PRODUCTS__FAIL, payload: error }
}

export const productActionCreators = {
  fetchStart,
  fetchSuccess,
  fetchFail,
}

export default productsReducer
