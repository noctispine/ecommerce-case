import { useDispatch, useSelector } from 'react-redux'
import { defaultSortTypes } from '../../../../constants'
import { RootState } from '../../../../redux/reducers/rootReducer'
import {
  selectSortActionCreator,
  Sort,
} from '../../../../redux/reducers/sort/reducer'
import {
  capitalizeFirstLetter,
  replaceAllAndToLowerCase,
} from '../../../../utils/stringFormatters'
import { FilterContainer, InputContainer } from '../../style'
import { InputSort, LabelSort } from './style'

type Props = {}

const Sorting = (props: Props) => {
  const dispatch = useDispatch()
  const sortState = useSelector((state: RootState) => state.sort)

  // if target val is already in sort state change it with the null value to
  // disable sorting, otherwise just put the value into sorting state
  const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault()
    let button = e.target as HTMLInputElement
    if (sortState.sort === button.value) {
      dispatch(selectSortActionCreator(null))
    } else {
      dispatch(selectSortActionCreator(button.value as Sort))
    }
  }

  return (
    <FilterContainer isSort>
      Sorting
      <InputContainer>
        {defaultSortTypes.map((sortType, indx) => {
          return (
            <p>
              <InputSort
                type="checkbox"
                name="sort"
                value={sortType}
                id={sortType}
                key={indx}
                onChange={radioHandler}
                checked={sortType === sortState.sort}
              />
              <LabelSort key={indx} htmlFor={sortType}>
                {capitalizeFirstLetter(
                  replaceAllAndToLowerCase(sortType, '_', ' ')
                )}
              </LabelSort>
            </p>
          )
        })}
      </InputContainer>
    </FilterContainer>
  )
}

export default Sorting
