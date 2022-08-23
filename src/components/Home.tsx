import React, {useEffect, useState} from "react";
import { createBrowserHistory } from 'history';
import {useDispatch, useSelector} from "react-redux";
import {dataRequest} from '../actions/dataActions'
import {RootState} from '../reducers/RootReducer'
import {DataReducer} from '../reducers/data.reducer'
import MUIDataTable from "mui-datatables";
import columns from './TableColumns'
import {MUIDataTableOptions} from "mui-datatables";
import {Button} from '@mui/material';
import FormDialog from './AddEditContacts/AddEditContact'
import {IContact} from './../actions/dataActionsTypes'

const Home = ()=>{
    const history = createBrowserHistory()
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


console.log('CONT', state)
    // const columns = ["Name", "Company", "City", "State"];

    const data = [
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
    ];
    console.log('CONTACTS', contacts)

    const options: MUIDataTableOptions = {
        filterType: 'checkbox',
        selectableRows: 'none',
    };
    return (
        <>
            <MUIDataTable
                title={<>
                    <h1>Contacts List</h1>
                    <FormDialog  editMode={false} />
                    {/*<Button */}
                    {/*        variant="contained"*/}
                    {/*        color="success"*/}
                    {/*        onClick={()=>handleClickOpen}*/}
                    {/*>*/}
                    {/*    Add New Driver*/}
                    {/*</Button>*/}
                </>}
                data={state as []}
                columns={columns}
                options={options}
            />
        </>
    )
}
export default Home