import { combineReducers } from 'redux'
import companiesReducer from './companies/reducer'
import filterReducer from './filters/reducer'
import productsReducer from './products/reducer'
import sortReducer from './sort/reducer'

const rootReducer = combineReducers({
  product: productsReducer,
  company: companiesReducer,
  filter: filterReducer,
  sort: sortReducer,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
