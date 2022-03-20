import { call, put, takeEvery, StrictEffect } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import { client } from '../../../utils/clientFetch'
import {
  FETCH_PRODUCTS_START,
  productActionCreators,
} from '../../reducers/products/reducer'

const fetchItems = () =>
  client.request({
    method: 'GET',
    url: 'products',
  })

// workers
function* onLoadProducts() {
  try {
    const response: AxiosResponse = yield call(fetchItems)

    yield put(productActionCreators.fetchSuccess(response.data))
    yield put(productActionCreators.updateTags(response.data))
  } catch (error) {
    if (error instanceof Error) {
      yield put(productActionCreators.fetchFail(error.message))
    }
  }
}

// watchers
export function* fetchProducts(): Generator<StrictEffect> {
  yield takeEvery(FETCH_PRODUCTS_START, onLoadProducts)
}
