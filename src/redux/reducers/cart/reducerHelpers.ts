// interfaces

export interface ICartItem {
  name: string
  price: number
  quantity: number
}

export interface ICartState {
  items: ICartItem[]
  total: number
}

// Action Interfaces

export interface IIncrementItemAction {
  type: 'INCREMENT_ITEM'
  name: string
  price: number
}

export interface IDecrementItemAction {
  type: 'DECREMENT_ITEM'
  name: string
  price: number
}

export type CartAction = IIncrementItemAction | IDecrementItemAction

export type IncrementCreator = (
  itemName: string,
  price: number
) => IIncrementItemAction
export type DecrementCreator = (
  itemName: string,
  price: number
) => IDecrementItemAction

export function cartHandler(state: ICartState, action: CartAction) {
  let newState = { ...state }

  // if the item that will be added is already in cart, it returns the
  // index of it, otherwise returns -1
  const cartItemIndex = state.items.findIndex((item) => item.name === action.name)
  let newTotal: number = newState.total

  // if item has been already added, incerement by one
  if (cartItemIndex !== -1) {
    let oldQuantity = newState.items[cartItemIndex].quantity
    let newQuantity: number

    if (action.type === 'INCREMENT_ITEM') {
      newQuantity = oldQuantity + 1
      newState.items[cartItemIndex].quantity = newQuantity
      newTotal += action.price
    } else {
      newTotal -= action.price
      newQuantity = oldQuantity - 1
      newState.items[cartItemIndex].quantity = newQuantity
      if (newQuantity === 0) newState.items.splice(cartItemIndex, 1)
    }
  } else {
    if (action.type === 'INCREMENT_ITEM') {
      const newItem: ICartItem = {
        name: action.name,
        price: action.price,
        quantity: 1,
      }

      newTotal += action.price

      newState.items.push(newItem)
    }
  }

  newState.total = roundToTwo(newTotal)
  return newState
}

export function roundToTwo(num: number): number {
  return Math.round((num + Number.EPSILON) * 100) / 100
}
