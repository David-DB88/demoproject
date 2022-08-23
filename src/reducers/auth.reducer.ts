import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_OUT, loginDispatchTypes, LogOutDispatchType  } from "../actions/authActionsTypes";



export interface  authReduserI{
    authToken: string | undefined | null
    loading: boolean,
    isAuthencated: boolean
}
const initialAutheState: authReduserI = {
    authToken: localStorage.getItem('authToken'),
    loading: false,
    isAuthencated: false
};


export function authReduser(state: authReduserI = initialAutheState, action :loginDispatchTypes | LogOutDispatchType): authReduserI {
    switch (action.type) {
        case LOG_IN_REQUEST:
            return {
                ...state,
                loading: true
            };

        case LOG_IN_SUCCESS:
            localStorage.setItem('authToken', JSON.stringify(action.payload.access_token));
            return {
                ...state,
                authToken: action?.payload?.access_token,
                loading: false,
                isAuthencated: true,
            };

        case LOG_OUT:
            localStorage.removeItem('authToken');
            window.location.reload()
            return {
                ...state,
                authToken: null,
                isAuthencated: false,
            };

        default:
            return state
    }
};


