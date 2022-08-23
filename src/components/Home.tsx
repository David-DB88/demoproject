import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {dataRequest} from '../actions/dataActions'
import {RootState} from '../reducers/RootReducer'
import MUIDataTable from "mui-datatables";
import columns from './TableColumns'
import {MUIDataTableOptions} from "mui-datatables";
import FormDialog from './AddEditContacts/AddEditContact'
import {IContact} from './../actions/dataActionsTypes'

const Home = ()=>{
    const dispatch = useDispatch()
    let isAuth = useSelector((state: RootState ) =>state.auth.isAuthencated)
const [state, setState]= useState<IContact[]>()
    useEffect(()=>{
            dispatch(dataRequest())
    },[isAuth])

    let contacts = useSelector((state: RootState ) =>state.data.contacts)
    let cont = useSelector((state: RootState ) =>state)
useEffect(()=>{
    setState(contacts)
},[contacts])


    const options: MUIDataTableOptions = {
        filterType: 'checkbox',
        selectableRows: 'none',
        print: "false",
    };
    return (
        <>
                <MUIDataTable
                    title={<>
                        <h1>Contacts List</h1>
                        <FormDialog  editMode={false} />
                    </>}
                    data={state as []}
                    columns={columns}
                    options={options}
                />
        </>
    )
}
export default Home