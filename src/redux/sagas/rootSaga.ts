import { all, fork } from '@redux-saga/core/effects'
import { fetchCompanies } from './company'
import { fetchProducts } from './product'


export default function* rootSaga() {
  yield all([
    fork(fetchProducts),
    fork(fetchCompanies)
  ])
}