// Constants

import { Reducer } from 'redux'
import {
  FetchProductsAction,
  FetchProductsFailCreator,
  FetchProductsStartCreator,
  FetchProductsSuccessCreator,
  IProduct,
  IProductState,
  populateTags,
  UpdateTagsCreator,
} from './reducerHelper'

export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS__FAIL = 'FETCH_PRODUCTS_FAIL'

export const UPDATE_TAGS = 'UPDATE_TAGS'

// Initial State
const initialState: IProductState = {
  products: [],
  tags: {
    tags: [],
    total: 0,
  },

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

    case FETCH_PRODUCTS_SUCCESS: {
      let populatedTags = populateTags(action.payload)
      return {
        ...state,
        loading: false,
        products: action.payload,
        tags: populatedTags,
      }
    }

    case FETCH_PRODUCTS__FAIL:
      return { ...state, loading: false, error: action.payload }

    case UPDATE_TAGS:
      return { ...state, tags: populateTags(action.payload) }

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

const updateTags: UpdateTagsCreator = (products) => {
  return { type: UPDATE_TAGS, payload: products }
}

export const productActionCreators = {
  fetchStart,
  fetchSuccess,
  fetchFail,
  updateTags,
}

export default productsReducer
