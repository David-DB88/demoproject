import StyledComponent from "./addEditContact.styled";
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button'
import { addContactRequest} from "../../actions/dataActions";
import { editContactRequest} from "../../actions/dataActions";
import {useDispatch} from "react-redux";
import React from "react";
export interface FormValues {
    name: string;
    email: string;
    phone: string;
};


const FormValues = ({handleClose, currentItem, editMode}: any) => {
    const dispatch = useDispatch()
    const validationSchema = yup.object({
        email: yup
            .string()
            .email("Not email!")
            .required("Email is required!"),
        phone: yup
            .string()
            .required("Password is required!")
    });

    const initialValues: FormValues  = {
        name: currentItem?.[1],
        email: currentItem?.[2],
        phone: currentItem?.[3]
    }

    const formik = useFormik({
        initialValues,
        validationSchema,

        onSubmit: (values:  FormValues   ) => {
            if (!editMode){
                dispatch(addContactRequest(values))
                handleClose()
            }else {
                dispatch(editContactRequest({
                    id: currentItem?.[0],
                    name: values.name,
                    email: values.email,
                    phone: values.phone
                }))
                handleClose()
            }


        },
    });
    const { handleSubmit, handleChange, values } = formik;
    return (
        <StyledComponent>
                <form style={{padding: 30}} onSubmit={handleSubmit} >
                    <TextField
                        id="name"
                        name="name"
                        label="Name"
                        fullWidth
                        value={values.name}
                        onChange={handleChange}
                    />
                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        type="email"
                        fullWidth
                        value={values.email}
                        onChange={handleChange}
                    />
                    <TextField
                        id="phone"
                        name="phone"
                        label="Phone"
                        fullWidth
                        value={values.phone}
                        onChange={handleChange}
                    />
                        <div style={{display: 'flex', paddingTop: 20}}>
                            <Button color='inherit' variant="contained" type="submit">Submit</Button>
                            <Button onClick={handleClose} style={{marginLeft: 10}} variant="contained" >Cancel</Button>
                        </div>
                </form>
        </StyledComponent>

    );
};

export default FormValues;