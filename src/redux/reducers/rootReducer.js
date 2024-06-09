import { combineReducers } from '@reduxjs/toolkit';

import UserReducer from './UserReducer/UserReducer';
import AuthControl from './AuthControl/AuthControl';

const rootReducer = combineReducers({
    UserInfo: UserReducer,
    AuthControl
});

export default rootReducer;