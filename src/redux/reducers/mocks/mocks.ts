import { ICompanyState } from '../companies/reducerHelpers'
import {
  IProduct,
  IProductState,
  ITag,
  ITagsWithTotal,
} from '../products/reducerHelper'
import * as data from '../../../db/db.json'
import { IFilterState } from '../filters/types'

export const mockProducts: IProduct[] = [
  {
    tags: ['Trees'],
    price: 10.99,
    name: 'Handcrafted Trees Mug',
    description:
      'enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur',
    slug: 'Handcrafted-Trees-Mug',
    added: 1485723766805,
    manufacturer: 'OHara-Group',
    itemType: 'mug',
  },
  {
    tags: ['Trees'],
    price: 10.99,
    name: 'Handcrafted Trees Mug',
    description:
      'enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur',
    slug: 'Handcrafted-Trees-Mug',
    added: 1485723766805,
    manufacturer: 'OHara-Group',
    itemType: 'mug',
  },
  {
    tags: ['Beach', 'Ocean', 'Water'],
    price: 19.99,
    name: 'Rustic Beach Mug',
    description:
      'totam at veritatis eligendi assumenda ex quia praesentium quibusdam ducimus',
    slug: 'Rustic-Beach-Mug',
    added: 1481573896833,
    manufacturer: 'Sipes-Inc',
    itemType: 'mug',
  },
]

export const mockTagsWithTotal: ITagsWithTotal = {
  tags: [
    { name: 'Trees', quantity: 2 },
    { name: 'Beach', quantity: 1 },
    { name: 'Ocean', quantity: 1 },
    { name: 'Water', quantity: 1 },
  ],

  total: 3,
}



export const mockSuccessfulFetchState: ICompanyState = {
  companies: data.companies,
  companiesWithAmounts: [],
  total: 0,
  error: null,
  loading: false,
}

export const mockFilterState: IFilterState = {
  brands: ['brand1', 'brand2', 'brand3'],
  itemType: 'mug',
  tags: ['tag1', 'tag2'],
}

export const mockInitialCompanyState: ICompanyState = {
  companies: [],
  companiesWithAmounts: [],
  total: 0,
  error: null,
  loading: false,
}

export const mockInitialProductsState: IProductState = {
  products: [],
  tags: {
    tags: [],
    total: 0,
  },

  error: null,
  loading: false,
}
