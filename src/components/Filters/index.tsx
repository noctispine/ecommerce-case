import React from 'react'
import Sorting from './components/Sorting/Sorting'
import { FilterLayout } from './style'

type Props = {}

const Filters = (props: Props) => {
  return (
    <FilterLayout>
      <Sorting />
    </FilterLayout>
  )
}

export default Filters
