import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterActionCreators } from '../../../../redux/reducers/filters/reducer'
import { RootState } from '../../../../redux/reducers/rootReducer'
import {
  FilterContainer,
  InputContainer,
} from '../../style'
import SharedSearchFilter from '../SharedComponents/SharedSearchFilter'

type Props = {}

const Tags = (props: Props) => {
  const productState = useSelector((state: RootState) => state.product)
  const tagsWithTotal = productState.tags

  const filterState = useSelector((state: RootState) => state.filter)
  const tagFilters = filterState.tags

  

  return (
    <FilterContainer>
      Tags
      <InputContainer>
        <SharedSearchFilter
          name="Tag"
          items={tagsWithTotal.tags}
          total={tagsWithTotal.total}
          filter={tagFilters}
        />
      </InputContainer>
    </FilterContainer>
  )
}

export default Tags
