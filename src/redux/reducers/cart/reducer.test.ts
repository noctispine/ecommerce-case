import cartReducer, { cartActionCreators } from './reducer'
import { ICartItem, ICartState } from './reducerHelpers'

let initialState = {
  items: [],
  total: 0,
}

let nonEmptyState: ICartState = {
  items: [
    { name: 'mock1', price: 2.5, quantity: 4 },
    { name: 'mock2', price: 0.3, quantity: 1 },
  ],
  total: 10.3,
}

describe('actions on initial state', () => {
  beforeEach(() => {
    initialState = {
      items: [],
      total: 0,
    }
  })

  test('should add new item to basket with quantity 1', () => {
    let expectedState: ICartState = {
      items: [],
      total: 0,
    }
    expectedState.items.push({ name: 'mockItem', price: 10, quantity: 1 })
    expectedState.total = 10
    expect(
      cartReducer(initialState, cartActionCreators.incrementCreator('mockItem', 10))
    ).toEqual(expectedState)
  })

  test('should do nothing if try to decrement the non-existing item', () => {
    const expectedState: ICartState = {
      items: [],
      total: 0,
    }
    expect(
      cartReducer(
        initialState,
        cartActionCreators.decrementCreator('mockItem', 2999)
      )
    ).toEqual(expectedState)
  })
})

describe('actions on non empty state', () => {
  test('should increment item mock2', () => {
    const expectedState: ICartState = {
      items: [
        { name: 'mock1', price: 2.5, quantity: 5 },
        { name: 'mock2', price: 0.3, quantity: 1 },
      ],
      total: 12.8,
    }

    expect(
      cartReducer(nonEmptyState, cartActionCreators.incrementCreator('mock1', 2.5))
    ).toEqual(expectedState)
  })

  test('should delete item if its quantity equals 1', () => {
    const expectedState: ICartState = {
      items: [{ name: 'mock1', price: 2.5, quantity: 5 }],
      total: 10,
    }

    expect(
      cartReducer(nonEmptyState, cartActionCreators.decrementCreator('mock2', 0.3))
    ).toEqual(expectedState)
  })
})
