import { all, fork } from '@redux-saga/core/effects'
import { fetchProducts } from './product'


export default function* rootSaga() {
  yield all([
    fork(fetchProducts),
  ])
}