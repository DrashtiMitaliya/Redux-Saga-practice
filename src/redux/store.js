
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from 'redux-saga';
import productSaga from "./productSaga";




const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer,applyMiddleware(sagaMiddleware)
  
 
)

sagaMiddleware.run(productSaga)
export default store;