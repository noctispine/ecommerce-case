import companiesReducer, { companyActionCreators } from './reducer'
import * as data from '../../../db/db.json'
import {
  mockInitialCompanyState,
  mockProducts,
  mockSuccessfulFetchState,
} from '../mocks/mocks'
import { ICompaniesWithAmountsAndTotal } from './reducerHelpers'

describe('companies actions', () => {
  it('should handle FETCH_COMPANIES_START', () => {
    expect(
      companiesReducer(mockInitialCompanyState, companyActionCreators.fetchStart())
    ).toEqual({ ...mockInitialCompanyState, loading: true })
  })

  it('should handle FETCH_COMPANIES_SUCCESS', () => {
    expect(
      companiesReducer(
        mockInitialCompanyState,
        companyActionCreators.fetchSuccess(data.companies)
      )
    ).toEqual({
      ...mockInitialCompanyState,
      loading: false,
      companies: data.companies,
    })
  })
})

it('should handle FETCH_COMPANIES_FAIL', () => {
  const testMsg = 'error occurred while fetching'
  expect(
    companiesReducer(
      mockInitialCompanyState,
      companyActionCreators.fetchFail(testMsg)
    )
  ).toEqual({
    ...mockInitialCompanyState,
    loading: false,
    error: testMsg,
  })
})

it('should handle UPDATE_COMPANIES_AND_AMOUNTS', () => {
  const expected: ICompaniesWithAmountsAndTotal = {
    companiesWithAmounts: [
      {
        name: "O'Hara Group",
        quantity: 2,
      },
      {
        name: 'Sipes Inc',
        quantity: 1,
      },
    ],
    total: 3,
  }

  // first fetch companies

  expect(
    companiesReducer(
      mockSuccessfulFetchState,
      companyActionCreators.updateCompaniesAndAmountsCreator(mockProducts)
    )
  ).toEqual({
    ...mockSuccessfulFetchState,
    companiesWithAmounts: expected.companiesWithAmounts,
    total: expected.total,
  })
})
