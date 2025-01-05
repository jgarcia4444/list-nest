import { combineReducers } from '@reduxjs/toolkit';

import UserReducer from './UserReducer/UserReducer';
import AuthControl from './AuthControl/AuthControl';
import ListsReducer from './ListsReducer/ListsReducer';

const rootReducer = combineReducers({
    UserInfo: UserReducer,
    AuthControl,
    Lists: ListsReducer,
});



export default rootReducer;