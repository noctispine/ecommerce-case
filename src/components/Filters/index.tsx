import Brands from './components/Brands/Brands'
import Sorting from './components/Sorting/Sorting'
import Tags from './components/Tags/Tags'
import { FilterLayout } from './style'

type Props = {}

const Filters = (props: Props) => {
  return (
    <FilterLayout>
      <Sorting />
      <Brands />
      <Tags />
    </FilterLayout>
  )
}

export default Filters
