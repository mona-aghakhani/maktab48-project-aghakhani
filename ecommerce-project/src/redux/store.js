import { applyMiddleware, createStore } from "redux";

import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import logger from "redux-logger";
import { reducers } from "./reducers/index";

const middlewareEnhancer = applyMiddleware(ReduxThunk);

// const middlewareEnhancer = applyMiddleware(logger, ReduxThunk);
const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(reducers, undefined, composedEnhancers);

export default store;
// const store = createStore(
//   reducers,
//   undefined,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;
// const loggerMiddleware = store => next => action => {
//   console.log("STATE BEFORE", store.getState());
//   console.log("ACTION DISPATCHED", action);
//   next(action);
//   console.log("STATE AFTER", store.getState());
// };

// const store = createStore(todosReducer, applyMiddleware(loggerMiddleware));
// const store = createStore(
//   reducers,
//   {},
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;
