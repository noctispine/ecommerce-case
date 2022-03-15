import { combineReducers } from 'redux'
import productsReducer from './products/reducer'

const rootReducer = combineReducers({
  product: productsReducer,
  
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>