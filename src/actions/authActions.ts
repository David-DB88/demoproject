import {Dispatch} from "redux";
import {LOG_IN_REQUEST, LOG_IN_SUCCESS, loginDispatchTypes, LogOutDispatchType, LOG_OUT} from "./authActionsTypes";
import { createBrowserHistory } from 'history';



export const history = createBrowserHistory();

export interface Idata {
    "email": string,
    "password": string
}

 export const loginRequest =(data: Idata)=> async (dispatch: Dispatch<loginDispatchTypes>)=>{
     try{
         dispatch({
             type: LOG_IN_REQUEST
         })
         const res = await fetch('http://localhost:8000/auth/login',{
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(data) // body data type must match "Content-Type"
         }).then((data)=>{
             return data.json()
         })
         dispatch({
             type: LOG_IN_SUCCESS,
             payload: res
         })
     }catch (e){

     };

}
export const logOutRequest =()=> async (dispatch: Dispatch<LogOutDispatchType>)=> {
    try {
        dispatch({
            type: LOG_OUT
        })
       history.push('/login')
    } catch (e) {

    }
}

