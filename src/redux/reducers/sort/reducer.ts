import { Reducer } from 'redux'

// Interfaces
export type Sort =
  | 'PRICE_HIGH_TO_LOW'
  | 'PRICE_LOW_TO_HIGH'
  | 'NEW_TO_OLD'
  | 'OLD_TO_NEW'
  | null

export interface ISortState {
  sort: Sort
}

type SortAction = { type: 'SELECT_SORT'; payload: Sort }

// Actions

export const SELECT_SORT = 'SELECT_SORT'

const initialState: ISortState = {
  sort: null,
}

// Reducer

const sortReducer: Reducer<ISortState, SortAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SELECT_SORT: {
      return { sort: action.payload }
    }
    default:
      return state
  }
}

export default sortReducer

// Action Creator Types
type SelectSortCreator = (sort: Sort) => SortAction

// Action Creators
export const selectSortActionCreator: SelectSortCreator = (sort: Sort) => {
  return { type: SELECT_SORT, payload: sort }
}
