import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootReducer from './redux/reducers/rootReducer'
import rootSaga from './redux/sagas/rootSaga'


const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware, logger]
// const middleware = [sagaMiddleware]

const store = createStore(rootReducer, applyMiddleware(...middleware))

sagaMiddleware.run(rootSaga)

export default store