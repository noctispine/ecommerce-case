import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterActionCreators } from '../../../../redux/reducers/filters/reducer'
import { RootState } from '../../../../redux/reducers/rootReducer'
import {
  FilterContainer,
  InputContainer,
  ListContainer,
  SearchInput,
} from '../../style'
import TagItem from './component/TagItem'

type Props = {}

const Tags = (props: Props) => {
  const productState = useSelector((state: RootState) => state.product)
  const tagsWithTotal = productState.tags

  const filterState = useSelector((state: RootState) => state.filter)
  const tagFilters = filterState.tags

  const dispacth = useDispatch()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let search = e.target as HTMLInputElement
  }

  const handleAddFilterTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target
    if (input.value === 'All') {
      dispacth(
        filterActionCreators.removeAllFiltersFromSpecificTypeCreator('tags')
      )
    } else {
      if (input.checked) {
        dispacth(filterActionCreators.addFilterTagCreator(input.value))
      } else {
        dispacth(filterActionCreators.removeFilterTagCreator(input.value))
      }
    }
  }

  return (
    <FilterContainer>
      Tags
      <InputContainer>
        <SearchInput placeholder="Search Tag" onChange={handleSearch} />
        <ListContainer>
          <TagItem
            key={tagsWithTotal.total + 1}
            name="All"
            quantity={tagsWithTotal.total}
            isChecked={tagFilters.length === 0}
            handleAddFilterTag={handleAddFilterTag}
          />
          {tagsWithTotal.tags.map((tag, indx) => (
            <TagItem
              key={indx}
              name={tag.name}
              quantity={tag.quantity}
              isChecked={tagFilters.includes(tag.name)}
              handleAddFilterTag={handleAddFilterTag}
            />
          ))}
        </ListContainer>
      </InputContainer>
    </FilterContainer>
  )
}

export default Tags
