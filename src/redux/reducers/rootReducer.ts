import { combineReducers } from 'redux'
import companiesReducer from './companies/reducer'
import productsReducer from './products/reducer'

const rootReducer = combineReducers({
  product: productsReducer,
  company: companiesReducer
  
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>