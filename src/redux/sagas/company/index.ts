import { call, put, takeEvery, StrictEffect } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import { client } from '../../../utils/clientFetch';
import { companyActionCreators, FETCH_COMPANIES_START } from '../../reducers/companies/reducer';

const fetchItems = () =>
  client.request({
    method: 'GET',
    url: 'companies',
  });

// workers
function* onLoadProducts() {
    try {
        const response: AxiosResponse = yield call(fetchItems)
        
        yield put(companyActionCreators.fetchSuccess(response.data))
    } catch(error) {
        if (error instanceof Error) {
            yield put(companyActionCreators.fetchFail(error.message))
        }
    }
}

// watchers
export function* fetchCompanies(): Generator<StrictEffect> {
  yield takeEvery(FETCH_COMPANIES_START, onLoadProducts)
}

