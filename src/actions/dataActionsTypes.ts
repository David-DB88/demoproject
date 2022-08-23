export const DATA_REQUEST = "DATA_REQUEST"
export const DATA_SUCCESS = "DATA_SUCCESS"
export const DATA_FAIL = "DATA_FAIL"
export const CREATE_REQUEST = "CREATE_REQUEST"
export const CREATE_SUCCESS = "CREATE_SUCCESS"
export const EDIT_REQUEST = "EDIT_REQUEST"
export const EDIT_SUCCESS = "EDIT_SUCCESS"
export const DELETE_SUCCESS = "DELETE_SUCCESS"




export  type IContact ={
        id: number,
        contact: IContactItem

}

export interface dataRequest{
    type: typeof DATA_REQUEST
}
export interface dataSuccess{
    type: typeof DATA_SUCCESS
    payload: IContact[]
}
export interface dataFail{
    type: typeof DATA_FAIL
}



export type dataDispatchTypes = dataRequest  | dataSuccess | dataFail

//Types for a creat contact
export interface IContactItem {
    name: string;
    email: string;
    phone: string;
}

export interface createSuccess{
    type: typeof CREATE_SUCCESS
    payload: IContact[]
}
 export type createDispatchType =  createSuccess 

//Types for edit
export interface IEditContactItem {
    id?: number;
    name: string;
    email: string;
    phone: string;
}

export interface editSuccess{
    type: typeof EDIT_SUCCESS
    payload: IContact
}

export type editDispatchType =  editSuccess
//Types for delete
export interface deleteSuccess{
    type: typeof DELETE_SUCCESS
    payload: number
}

export type deleteDispatchType =  deleteSuccess 

