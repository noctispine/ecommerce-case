import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IProductState } from '../../redux/reducers/products/reducer'
import { RootState } from '../../redux/reducers/rootReducer'
import Pagination from './components/Pagination/Pagination'
import ProductItem from './components/ProductItem/ProductItem'
import { ProductContainer, ProductListWrapper } from './style'

type Props = {}

const ProductList = (props: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  // const filterState = useSelector((state: RootState) => state.filter)
  // const activeCategories = filterState.activeCategories
  // useEffect(() => {
  //   setCurrentPage(1)
  // }, [activeCategories])

  // const pageSize = window.innerWidth > 768 ? 9 : 8
  const pageSize = 16

  const productState: IProductState = useSelector(
    (state: RootState) => state.product
  )
  const products = productState.products
  // const isLoading = productState.loading

  return (
    <ProductListWrapper>
      {/* Item Type Filter */}

      {/* List Container */}
      <ProductContainer>
        {products
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

        {/* {!isLoading &&
            products
              .slice(
                (currentPage - 1) * pageSize,
                (currentPage - 1) * pageSize + pageSize
              )
              .map((product: IProduct) => {
                const { image, title, price, id, category } = product
                return (
                  <Product
                    key={id}
                    image={image}
                    title={title}
                    price={price}
                    category={category}
                    id={id}
                  />
                )
              })} */}
      </ProductContainer>

      {/* Pagination */}
      <Pagination
        totalCount={products.length}
        currentPage={currentPage}
        neighborCount={1}
        onPageChange={setCurrentPage}
        pageSize={pageSize}
      />
    </ProductListWrapper>
  )
}

export default ProductList
