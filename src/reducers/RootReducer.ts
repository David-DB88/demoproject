import { combineReducers } from 'redux';
import {authReduser} from "./auth.reducer";
import {dataReduser} from "./data.reducer";


export const rootReducer = combineReducers({
    auth: authReduser,
    data: dataReduser
})

export type RootState = ReturnType<typeof rootReducer>