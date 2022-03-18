import { IProduct } from '../products/reducer'

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

export interface ICompanyWithAmount {
  company: ICompany
  amount: number
}

export interface ICompanyState {
  companies: ICompany[]
  companiesWithAmounts: ICompanyWithAmount[]
  total: number
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

export interface IUpdateCompaniesWithAmountsAction {
  type: 'UPDATE_COMPANIES_AND_AMOUNTS'
  payload: IProduct[]
}

export type FetchCompaniesAction =
  | IFetchCompaniesStartAction
  | IFetchCompaniesSuccessAction
  | IFetchCompaniesFailAction
  | IUpdateCompaniesWithAmountsAction

export type FetchCompaniesStartCreator = () => IFetchCompaniesStartAction

export type FetchCompaniesSuccessCreator = (
  companies: ICompany[]
) => IFetchCompaniesSuccessAction

export type FetchCompaniesFailCreator = (
  error: string
) => IFetchCompaniesFailAction

export type UpdateCompaniesAndAmountsCreator = (
  products: IProduct[]
) => IUpdateCompaniesWithAmountsAction

export type CompaniesWithAmountsAndTotal = {
  companiesWithAmounts: ICompanyWithAmount[]
  total: number
}


export const computeCompaniesWithAmounts = (
  companies: ICompany[],
  products: IProduct[]
): CompaniesWithAmountsAndTotal => {
  let total = 0
  let companiesWithAmounts: ICompanyWithAmount[] = []

  companies.forEach((company) => {
    let amount = getNumberOfCompany(company, products)
    total += amount
    companiesWithAmounts.push({ company, amount })
  })

  return { companiesWithAmounts, total }
}

const getNumberOfCompany = (company: ICompany, products: IProduct[]) => {
  let amount = 0
  products.forEach((product) => {
    if (product.manufacturer === company.slug) amount++
  })

  return amount
}

// export const populateTags = (products: IProduct[]): ITagsWithTotal => {
//     let tagsArr = new Array<string>()
//     let total = 0
//     let tags: ITag[] = []

//     // get all tag names

//     products.forEach((product) => {
//       product.tags.forEach((tag) => {
//         tagsArr.push(tag)
//       })
//     })

//     const pairs = tagsArr.reduce(function (acc: any, curr) {
//       return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc
//     }, {})

//     for (let name in pairs) {
//       let quantity = pairs[name]
//       total += quantity
//       tags.push({ name, quantity })
//     }

//     return {tags, total}
//   }
