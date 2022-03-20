import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { companyActionCreators } from '../../../../redux/reducers/companies/reducer'
import { RootState } from '../../../../redux/reducers/rootReducer'
import { FilterContainer, InputContainer } from '../../style'
import SharedSearchFilter from '../SharedComponents/SharedSearchFilter'

type Props = {}

const Brands = (props: Props) => {
  const companyState = useSelector((state: RootState) => state.company)
  const companiesWithAmounts = companyState.companiesWithAmounts
  const companyTotal = companyState.total

  const filterState = useSelector((state: RootState) => state.filter)
  const brandFilter = filterState.brands

  return (
    <FilterContainer>
      Brands
      <InputContainer>
        <SharedSearchFilter
          name="Brand"
          items={companiesWithAmounts}
          total={companyTotal}
          filter={brandFilter}
        />
      </InputContainer>
    </FilterContainer>
  )
}

export default Brands
function tagFilteredProducts(
  tagFilteredProducts: any
): import('../../../../redux/reducers/companies/reducerHelpers').IUpdateCompaniesWithAmountsAction {
  throw new Error('Function not implemented.')
}
