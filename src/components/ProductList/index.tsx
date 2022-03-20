import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  breakpoints,
  defaultItemTypes,
  NEW_TO_OLD,
  OLD_TO_NEW,
  PRICE_HIGH_TO_LOW,
  PRICE_LOW_TO_HIGH,
} from '../../constants'
import { companyActionCreators } from '../../redux/reducers/companies/reducer'
import { ICompany } from '../../redux/reducers/companies/reducerHelpers'
import { filterActionCreators } from '../../redux/reducers/filters/reducer'
import { productActionCreators } from '../../redux/reducers/products/reducer'
import { IProduct } from '../../redux/reducers/products/reducerHelper'
import { RootState } from '../../redux/reducers/rootReducer'
import { Sort } from '../../redux/reducers/sort/reducer'
import Pagination from './components/Pagination/Pagination'
import ProductItem from './components/ProductItem/ProductItem'
import {
  Button,
  ItemTypeContainer,
  ProductContainer,
  ProductContainerWrapper,
  ProductListWrapper,
  Title,
} from './style'

type Props = {}

const filterByItemType = (products: IProduct[], type: string) => {
  if (type !== '') {
    return products.filter((product) => product.itemType === type)
  }

  return products
}

const filterByTags = (products: IProduct[], tags: string[]) => {
  if (tags.length === 0) return products

  return products.filter((product) =>
    tags.every((tag) => product.tags.includes(tag))
  )
}

const filterByBrands = (
  products: IProduct[],
  companies: ICompany[],
  brands: string[]
) => {
  if (brands.length === 0) return products
  const slugs = companies.map((company) => {
    if (brands.includes(company.name)) return company.slug
  })
  return products.filter((product) => slugs.includes(product.manufacturer))
}

const sortProducts = (products: IProduct[], sortType: Sort) => {
  switch (sortType) {
    case PRICE_LOW_TO_HIGH:
      return [...products].sort((a, b) => a.price - b.price)

    case PRICE_HIGH_TO_LOW:
      return [...products].sort((a, b) => b.price - a.price)

    case NEW_TO_OLD:
      return [...products].sort((a, b) => a.added - b.added)

    case OLD_TO_NEW:
      return [...products].sort((a, b) => b.added - a.added)

    default:
      return products
  }
}

const ProductList = (props: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  const productState = useSelector((state: RootState) => state.product)
  let products = productState.products

  const companyState = useSelector((state: RootState) => state.company)
  const companies = companyState.companies

  const filterState = useSelector((state: RootState) => state.filter)
  const itemType = filterState.itemType

  const sortState = useSelector((state: RootState) => state.sort)
  const sortType = sortState.sort

  const typeFilteredProducts = useMemo(
    () => filterByItemType(products, itemType),
    [products, itemType]
  )

  const tagFilteredProducts = useMemo(
    () => filterByTags(typeFilteredProducts, filterState.tags),
    [typeFilteredProducts, filterState]
  )

  const brandFilteredProducts = useMemo(
    () => filterByBrands(tagFilteredProducts, companies, filterState.brands),
    [tagFilteredProducts, filterState]
  )

  const sortedProducts = useMemo(
    () => sortProducts(brandFilteredProducts, sortType),
    [sortType, brandFilteredProducts]
  )

  // set current page to 1 if user sorts or filters
  useEffect(() => {
    setCurrentPage(1)
  }, [sortedProducts])

  // set new amounts for tags and brands
  useEffect(() => {
    dispatch(productActionCreators.updateTags(brandFilteredProducts))

    dispatch(
      companyActionCreators.updateCompaniesAndAmountsCreator(tagFilteredProducts)
    )
  }, [tagFilteredProducts, brandFilteredProducts])

  const pageSize = window.innerWidth > parseInt(breakpoints.mobile) ? 16 : 12

  const dispatch = useDispatch()

  // dispachtes add filter type, if selecedted type is already in filter state
  // it removes the filter
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    let button = e.target as HTMLInputElement
    let type = button.name
    if (itemType === '' || itemType !== type) {
      dispatch(filterActionCreators.addItemTypeCreator(type))
    } else {
      dispatch(filterActionCreators.removeItemTypeCreator(type))
    }
  }

  return (
    <ProductListWrapper>
      {/* Item Type Filter */}
      <Title>Products</Title>
      <ItemTypeContainer>
        {/* If tags include provided item type then change its style with isSelected*/}
        {defaultItemTypes.map((defaultItemType, indx) => {
          return (
            <Button
              isSelected={defaultItemType === itemType}
              name={defaultItemType}
              onClick={handleOnClick}
              key={indx}
            >
              {defaultItemType}
            </Button>
          )
        })}
      </ItemTypeContainer>

      {/* List Container */}
      <ProductContainerWrapper>
        <ProductContainer className="cy test_product_list">
          {sortedProducts
            .slice(
              (currentPage - 1) * pageSize,
              (currentPage - 1) * pageSize + pageSize
            )
            .map((product) => (
              <ProductItem
                key={product.added}
                price={product.price}
                name={product.name}
              />
            ))}
        </ProductContainer>
      </ProductContainerWrapper>

      {/* Pagination */}
      <Pagination
        totalCount={sortedProducts.length}
        currentPage={currentPage}
        neighborCount={1}
        onPageChange={setCurrentPage}
        pageSize={pageSize}
      />
    </ProductListWrapper>
  )
}

export default ProductList
