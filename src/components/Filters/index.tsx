import React from 'react'
import Sorting from './components/Sorting/Sorting'
import Tags from './components/Tags/Tags'
import { FilterLayout } from './style'

type Props = {}

const Filters = (props: Props) => {
  return (
    <FilterLayout>
      <Sorting />
      <Tags />
    </FilterLayout>
  )
}

export default Filters
