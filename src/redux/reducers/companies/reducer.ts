// Constants

import { Reducer } from 'redux'

export const FETCH_COMPANIES_START = 'FETCH_COMPANIES_START'
export const FETCH_COMPANIES_SUCCESS = 'FETCH_COMPANIES_SUCCESS'
export const FETCH_COMPANIES_FAIL = 'FETCH_COMPANIES_FAIL'

// Interfaces

export interface ICompany {
  slug: string
  name: string
  address: string
  city: string
  state: string
  zip: string
  account: number
  contact: string
}

export interface ICompanyState {
  companies: ICompany[] | []
  error: string | null
  loading: boolean
}

export interface IFetchCompaniesStartAction {
  type: 'FETCH_COMPANIES_START'
}

export interface IFetchCompaniesSuccessAction {
  type: 'FETCH_COMPANIES_SUCCESS'
  payload: ICompany[]
}

export interface IFetchCompaniesFailAction {
  type: 'FETCH_COMPANIES_FAIL'
  payload: string
}

type FetchCompaniesAction =
  | IFetchCompaniesStartAction
  | IFetchCompaniesSuccessAction
  | IFetchCompaniesFailAction

export type FetchCompaniesStartCreator = () => IFetchCompaniesStartAction
export type FetchCompaniesSuccessCreator = (
  companies: ICompany[]
) => IFetchCompaniesSuccessAction
export type FetchCompaniesFailCreator = (
  error: string
) => IFetchCompaniesFailAction

// Initial State
const initialState: ICompanyState = {
  companies: [],
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

export const companyActionCreators = {
  fetchStart,
  fetchSuccess,
  fetchFail,
}

export default companiesReducer
