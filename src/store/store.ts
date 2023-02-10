import { compose, createStore } from "redux";
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
function reducer(state: any): void {
  console.log(state)
}

const store = createStore(reducer)