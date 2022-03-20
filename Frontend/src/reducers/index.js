import userSession from './loginReducer';
import { combineReducers } from 'redux';
import { sessionReducer as session } from "redux-react-session";
const rootReducer = combineReducers({
    userSession,
    session,
});

export default rootReducer;