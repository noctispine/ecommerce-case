// Constants

import { Reducer } from 'redux'
import { IProduct } from '../products/reducer'
import {
  computeCompaniesWithAmounts,
  FetchCompaniesAction,
  FetchCompaniesFailCreator,
  FetchCompaniesStartCreator,
  FetchCompaniesSuccessCreator,
  ICompany,
  ICompanyState,
  UpdateCompaniesAndAmountsCreator,
} from './reducerHelpers'

export const FETCH_COMPANIES_START = 'FETCH_COMPANIES_START'
export const FETCH_COMPANIES_SUCCESS = 'FETCH_COMPANIES_SUCCESS'
export const FETCH_COMPANIES_FAIL = 'FETCH_COMPANIES_FAIL'
export const UPDATE_COMPANIES_AND_AMOUNTS = 'UPDATE_COMPANIES_AND_AMOUNTS'

// Initial State
const initialState: ICompanyState = {
  companies: [],
  companiesWithAmounts: [],
  total: 0,
  error: null,
  loading: false,
}

// Reducer

const companiesReducer: Reducer<ICompanyState, FetchCompaniesAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_COMPANIES_START:
      return { ...state, loading: true }

    case FETCH_COMPANIES_SUCCESS:
      return { ...state, loading: false, companies: action.payload }

    case FETCH_COMPANIES_FAIL:
      return { ...state, loading: false, error: action.payload }

    case UPDATE_COMPANIES_AND_AMOUNTS:
      let companiesWithAmounts = computeCompaniesWithAmounts(
        state.companies,
        action.payload
      )
      return {
        ...state,
        companiesWithAmounts: companiesWithAmounts.companiesWithAmounts,
        total: companiesWithAmounts.total,
      }

    default:
      return state
  }
}

// Action Creators
const fetchStart: FetchCompaniesStartCreator = () => {
  return { type: FETCH_COMPANIES_START }
}

const fetchSuccess: FetchCompaniesSuccessCreator = (companies: ICompany[]) => {
  return { type: FETCH_COMPANIES_SUCCESS, payload: companies }
}

const fetchFail: FetchCompaniesFailCreator = (error: string) => {
  return { type: FETCH_COMPANIES_FAIL, payload: error }
}

const updateCompaniesAndAmountsCreator: UpdateCompaniesAndAmountsCreator = (
  products: IProduct[]
) => {
  return { type: UPDATE_COMPANIES_AND_AMOUNTS, payload: products }
}

export const companyActionCreators = {
  fetchStart,
  fetchSuccess,
  fetchFail,
  updateCompaniesAndAmountsCreator,
}

export default companiesReducer
