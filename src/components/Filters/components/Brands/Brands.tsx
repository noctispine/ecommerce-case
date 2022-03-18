import React from 'react'
import { useSelector } from 'react-redux'
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
