import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { companyActionCreators } from '../../../../redux/reducers/companies/reducer'
import { filterActionCreators } from '../../../../redux/reducers/filters/reducer'
import { ListContainer, SearchInput } from '../../style'
import FilterItem from './FilterItem'

interface IItem {
  name: string
  quantity: number
}
type SearchFilterName = 'Tag' | 'Brand'

type Props = {
  items: IItem[]
  total: number
  filter: string[]
  name: SearchFilterName
}

const SharedSearchFilter = ({ items, total, filter, name }: Props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const placeHolder = `Search ${name}`

  const dispatch = useDispatch()

  const handleAddFilterTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target
    if (name === 'Brand') {
      if (input.value.toLowerCase() === 'all') {
        dispatch(filterActionCreators.removeAllFilterCreator('brands'))
      } else if (input.checked) {
        dispatch(filterActionCreators.addBrandCreator(input.value))
      } else {
        dispatch(filterActionCreators.removeBrandCreator(input.value))
      }
    } else if (name === 'Tag') {
      if (input.value.toLowerCase() === 'all') {
        dispatch(filterActionCreators.removeAllFilterCreator('tags'))
      } else if (input.checked) {
        dispatch(filterActionCreators.addTagCreator(input.value))
      } else {
        dispatch(filterActionCreators.removeTagCreator(input.value))
      }
    }
  }

  return (
    <>
      <SearchInput
        placeholder={placeHolder}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ListContainer>
        <FilterItem
          key={total + 1}
          name="All"
          quantity={total}
          isChecked={filter.length === 0}
          handleAddFilterTag={handleAddFilterTag}
        />

        {/*  first filter wrt search bar, then map them into items */}
        {items
          .filter((item) => {
            if (searchQuery === '') return item
            else if (item.name.toLowerCase().includes(searchQuery.toLowerCase()))
              return item
          })
          .map((item, indx) => (
            <FilterItem
              key={indx}
              name={item.name}
              quantity={item.quantity}
              isChecked={filter.includes(item.name)}
              handleAddFilterTag={handleAddFilterTag}
            />
          ))}
      </ListContainer>
    </>
  )
}

export default SharedSearchFilter
