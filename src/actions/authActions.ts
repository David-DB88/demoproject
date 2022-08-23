import { AnyAction } from 'redux';
import {Dispatch} from "redux";
import {LOG_IN_REQUEST, LOG_IN_SUCCESS, loginDispatchTypes, LogOutDispatchType, LOG_OUT} from "./authActionsTypes";
import { createBrowserHistory } from 'history';



export const history = createBrowserHistory();

export interface Idata {
    "email": string,
    "password": string
}

// function logOut(path = "/") {
//     return dispatch => {
//         let cookieFirebase = cookie.load('HDeviceToken');
//         if(cookieFirebase){
//             dispatch(userActions.subscribeFirebase({firebase_token: ''})).then(()=>{
//                 localStorage.removeItem('token');
//                 localStorage.setItem('LoginStatus', 'false');
//                 localStorage.removeItem('mobileModalPromo');
//                 navigate(path)
//                 window.location.reload();
//             })
//         }
//         else{
//             localStorage.removeItem('token');
//             localStorage.removeItem('mobileModalPromo');
//             localStorage.setItem('LoginStatus', 'false');
//             navigate(path)
//             window.location.reload();
//         }
//
//     }
// }

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
console.log('RESPONSE', res)
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


// function requestlogin( url, user ) {
//     const requestOptions = {
//         method: 'POST',
//         headers: authHeader(),
//         body: JSON.stringify(user)
//     };
//     return fetch(`${apiUrl}${url}`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             if (user.token ) {
//                 localStorage.setItem('LoginStatus', "true");
//                 localStorage.setItem('token', JSON.stringify(user.token));
//             }
//             return user;
//         });
// }
//
// export const authActions = {
//     login,
//     logOut,
// };