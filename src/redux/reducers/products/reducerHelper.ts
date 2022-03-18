// Interfaces

export interface IProduct {
  tags: string[]
  price: number
  name: string
  description: string
  slug: string
  added: number
  manufacturer: string
  itemType: string
}

export interface ITag {
  name: string
  quantity: number
}

export interface ITagsWithTotal {
  tags: ITag[]
  total: number
}

export interface IProductState {
  products: IProduct[]
  tags: ITagsWithTotal
  error: string | null
  loading: boolean
}

export interface IFetchProductsStartAction {
  type: 'FETCH_PRODUCTS_START'
}

export interface IFetchProductsSuccessAction {
  type: 'FETCH_PRODUCTS_SUCCESS'
  payload: IProduct[]
}

export interface IFetchProductsFailAction {
  type: 'FETCH_PRODUCTS_FAIL'
  payload: string
}

export interface IUpdateTagsAction {
  type: 'UPDATE_TAGS'
  payload: IProduct[]
}

export type FetchProductsAction =
  | IFetchProductsStartAction
  | IFetchProductsSuccessAction
  | IFetchProductsFailAction
  | IUpdateTagsAction

export type FetchProductsStartCreator = () => IFetchProductsStartAction
export type FetchProductsSuccessCreator = (
  products: IProduct[]
) => IFetchProductsSuccessAction
export type FetchProductsFailCreator = (error: string) => IFetchProductsFailAction

export type UpdateTagsCreator = (products: IProduct[]) => IUpdateTagsAction

export const populateTags = (products: IProduct[]): ITagsWithTotal => {
  let tagsArr = new Array<string>()
  let tags: ITag[] = []

  // get all tag names

  products.forEach((product) => {
    product.tags.forEach((tag) => {
      tagsArr.push(tag)
    })
  })

  const pairs = tagsArr.reduce(function (acc: any, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc
  }, {})

  for (let name in pairs) {
    let quantity = pairs[name]
    tags.push({ name, quantity })
  }

  return { tags, total: products.length }
}
