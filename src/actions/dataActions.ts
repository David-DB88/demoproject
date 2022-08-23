import {Dispatch} from "redux";
import {DATA_REQUEST,
    DATA_SUCCESS,
    dataDispatchTypes,
    IContactItem,
    CREATE_SUCCESS,
    createDispatchType,
    IEditContactItem,
    editDispatchType,
    EDIT_SUCCESS,
    deleteDispatchType,
    DELETE_SUCCESS} from "./dataActionsTypes";




 export const dataRequest =()=> async (dispatch: Dispatch<dataDispatchTypes>)=> {
     const token = JSON.parse(localStorage.getItem("authToken") as string)
     try {
         dispatch({
             type: DATA_REQUEST
         })
         const res = await fetch('http://localhost:8000/contacts', {
             method: 'GET',
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': 'Bearer ' + token,
             },
         }).then((data) => {
             return data.json()
         })
         dispatch({
             type: DATA_SUCCESS,
             payload: res
         })

     } catch (e) {

     }
 }


 export const addContactRequest =(contact: IContactItem)=> async (dispatch: Dispatch<createDispatchType>)=> {
     const token = JSON.parse(localStorage.getItem("authToken") as string)
     try {

         const res = await fetch('http://localhost:8000/contacts', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': 'Bearer ' + token,
             },
             body: JSON.stringify(contact)
         }).then((data) => {
             return data.json()
         })
         dispatch({
             type: CREATE_SUCCESS,
             payload: res
         })

     } catch (e) {

     }
 }

export const editContactRequest =(contact: IEditContactItem)=> async (dispatch: Dispatch<editDispatchType>)=> {
    const token = JSON.parse(localStorage.getItem("authToken") as string)
    try {
        const res = await fetch(`http://localhost:8000/contacts/${contact.id }`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify(contact)
        }).then((data) => {
            return data.json()
        })
        dispatch({
            type: EDIT_SUCCESS,
            payload: res
        })

    } catch (e) {

    }
}


export const deleteContactRequest =(contactID: number)=> async (dispatch: Dispatch<deleteDispatchType>)=> {
    const token = JSON.parse(localStorage.getItem("authToken") as string)
    try {
        const res = await fetch(`http://localhost:8000/contacts/${contactID }`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        }).then(() => {
            dispatch({
                type: DELETE_SUCCESS,
                payload: contactID
            })

        })


    } catch (e) {

    }
}


