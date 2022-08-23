export const LOG_IN_REQUEST = "LOG_IN_REQUEST"
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS"
export const LOG_IN_FAIL = "LOG_IN_FAIL"
export const LOG_OUT = "LOG_OUT"

export type loginRes = {
    access_token?: string

}
export interface loginRequest{
    type: typeof LOG_IN_REQUEST
}
export interface loginSuccess{
    type: typeof LOG_IN_SUCCESS
    payload: loginRes
}
export interface loginFail{
    type: typeof LOG_IN_FAIL
}



export type loginDispatchTypes = loginRequest  | loginSuccess | loginFail

// Types for log out
export interface LogOutDispatchType{
    type: typeof LOG_OUT
}