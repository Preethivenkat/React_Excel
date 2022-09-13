import { combineReducers } from "redux";

import { getUserList } from "./LevelReducer";

export default combineReducers(
    {
        userDetails: getUserList,
 
    }
)