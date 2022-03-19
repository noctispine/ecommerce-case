import {
  mockInitialProductsState,
  mockProducts,
  mockTagsWithTotal,
} from '../mocks/mocks'
import productsReducer, { productActionCreators } from './reducer'

describe('products actions', () => {
  it('should start to fetch products', () => {
    expect(
      productsReducer(mockInitialProductsState, productActionCreators.fetchStart())
    ).toEqual({ ...mockInitialProductsState, loading: true })
  })

  it('should fetch products successfully', () => {
    expect(
      productsReducer(
        mockInitialProductsState,
        productActionCreators.fetchSuccess(mockProducts)
      )
    ).toEqual({
      ...mockInitialProductsState,
      loading: false,
      products: mockProducts,
      tags: {
        tags: [
          { name: 'Trees', quantity: 2 },
          { name: 'Beach', quantity: 1 },
          { name: 'Ocean', quantity: 1 },
          { name: 'Water', quantity: 1 },
        ],

        total: 3,
      },
    })
  })

  it('should fetch products fail', () => {
    let errorMsg = 'error'
    expect(
      productsReducer(
        mockInitialProductsState,
        productActionCreators.fetchFail(errorMsg)
      )
    ).toEqual({ ...mockInitialProductsState, error: errorMsg })
  })

  it('should be able to update tags', () => {
    expect(
      productsReducer(
        mockInitialProductsState,
        productActionCreators.updateTags(mockProducts)
      )
    ).toEqual({ ...mockInitialProductsState, tags: mockTagsWithTotal })
  })
})
