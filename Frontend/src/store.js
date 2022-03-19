import {createStore,compose,applyMiddleware} from 'redux'
import myReducer from "./reducers/index";
import thunkMiddleware from "redux-thunk";
import {sessionService} from "redux-react-session";
const store = createStore(myReducer,compose(applyMiddleware(thunkMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
sessionService.initSessionService(store);
export default store;