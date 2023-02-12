import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./ducks/saga";
import { rootReducer } from "./rootReducer";
import { TweetsState } from "./ducks/tweets/contracts/state";


const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;



const sagaMiddleware = createSagaMiddleware()

export interface RootState {
  tweets: TweetsState
}
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
