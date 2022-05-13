import { applyMiddleware, createStore } from "redux"
import todoApp from "../reducers/index"

import thunk from 'redux-thunk';

const store = createStore(todoApp,{},applyMiddleware(thunk));
export default store