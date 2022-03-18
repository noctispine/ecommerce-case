import { Reducer } from 'redux'
import {
  CartAction,
  cartHandler,
  DecrementCreator,
  ICartState,
  IIncrementItemAction,
  IncrementCreator,
} from './reducerHelpers'

export const INCREMENT_ITEM = 'INCREMENT_ITEM'
export const DECREMENT_ITEM = 'DECREMENT_ITEM'

// Initial State
const initialState: ICartState = {
  items: [],
  total: 0,
}

// Reducer
const cartReducer: Reducer<ICartState, CartAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case INCREMENT_ITEM:
    case DECREMENT_ITEM:
      return cartHandler(state, action)

    default:
      return state
  }
}

export default cartReducer

// Action Creators
const incrementCreator: IncrementCreator = (name, price) => {
  return { type: INCREMENT_ITEM, name, price }
}

const decrementCreator: DecrementCreator = (name, price) => {
  return { type: DECREMENT_ITEM, name, price }
}

export const cartActionCreators = {
    incrementCreator,
    decrementCreator
}