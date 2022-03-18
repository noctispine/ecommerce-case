import { FilterContainer, InputContainer } from '../../style'


type Props = {
  children: JSX.Element | JSX.Element[]
  title: string
  isSort?: boolean
}

const SharedFilterContainer = (props: Props) => {
  return (
    <FilterContainer>
      {props.title}
      <InputContainer isSort={props.isSort}>{props.children}</InputContainer>
    </FilterContainer>
  )
}

export default SharedFilterContainer
