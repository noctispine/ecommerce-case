import React from 'react'
import { CheckBox, CheckBoxContainer, LabelCheckBox } from '../../../style'

type Props = {
  name: string
  isChecked: boolean
  quantity: number
  handleAddFilterTag: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TagItem = ({ name, quantity, isChecked, handleAddFilterTag }: Props) => {
  return (
    <CheckBoxContainer>
      <CheckBox
        type="checkbox"
        value={name}
        id={name}
        checked={isChecked}
        onChange={handleAddFilterTag}
      />
      <LabelCheckBox>
        {name} <span>({quantity})</span>
      </LabelCheckBox>
    </CheckBoxContainer>
  )
}

export default TagItem

// type="checkbox"
//                 name="sort"
//                 value={sortType}
//                 id={sortType}
//                 onChange={radioHandler}
//                 checked={sortType === sortState.sort}
