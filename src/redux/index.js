import { logger } from "./middleWare";
import { todos } from "./reducer";
import {
  applyMiddleware,
  combineReducers,
  createStore
} from "redux";

const middleWare = applyMiddleware(logger);

const reducer = combineReducers({
  todos
});

const store = createStore(reducer, middleWare);
export default store;