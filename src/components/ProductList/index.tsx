import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  defaultItemTypes,
  NEW_TO_OLD,
  OLD_TO_NEW,
  PRICE_HIGH_TO_LOW,
  PRICE_LOW_TO_HIGH,
} from '../../constants'
import { filterActionCreators } from '../../redux/reducers/filters/reducer'
import {
  IProduct,
} from '../../redux/reducers/products/reducer'
import { RootState } from '../../redux/reducers/rootReducer'
import { Sort } from '../../redux/reducers/sort/reducer'
import Pagination from './components/Pagination/Pagination'
import ProductItem from './components/ProductItem/ProductItem'
import {
  Button,
  ItemTypeContainer,
  ProductContainer,
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
  const productState = useSelector((state: RootState) => state.product)
  let products = productState.products

  const filterState = useSelector((state: RootState) => state.filter)
  const itemType = filterState.itemType

  const sortState = useSelector((state: RootState) => state.sort)
  const sortType = sortState.sort

  const filteredProducts = useMemo(
    () => filterByItemType(products, itemType),
    [products, itemType]
  )

  const sortedProducts = useMemo(
    () => sortProducts(filteredProducts, sortType),
    [sortType, filteredProducts]
  )

  const [currentPage, setCurrentPage] = useState<number>(1)

  // set current page to if user sorts or filters
  useEffect(() => {
    setCurrentPage(1)
  }, [filteredProducts])

  const pageSize = 16

  const dispatch = useDispatch()

  // dispachtes add type if selecedted type is already in filter state
  // it removes the filter
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    let button = e.target as HTMLInputElement
    let type = button.name
    if (itemType === '' || itemType !== type) {
      dispatch(filterActionCreators.addFilterItemTypeCreator(type))
    } else {
      dispatch(filterActionCreators.removeFilterItemTypeCreator(type))
    }
  }

  return (
    <ProductListWrapper>
      {/* Item Type Filter */}
      <Title>Products</Title>
      <ItemTypeContainer>
        {/* If tags include provided item type then change its style with isSelected*/}
        {defaultItemTypes.map((defaultItemType) => {
          return (
            <Button
              isSelected={defaultItemType === itemType}
              name={defaultItemType}
              onClick={handleOnClick}
            >
              {defaultItemType}
            </Button>
          )
        })}
      </ItemTypeContainer>

      {/* List Container */}
      <ProductContainer>
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
