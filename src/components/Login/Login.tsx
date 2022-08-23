import StyledLogin, {FormContainer, Logo, StyledForm} from "./Login.styled";
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button'
import {Idata, loginRequest} from "../../actions/authActions";
import {useDispatch} from "react-redux";
import React from "react";
 export interface FormValues {
    email: string;
    password: string;
};


const Login = () => {
    const dispatch = useDispatch()
    // let store = useSelector((store: RootState) => {
    //     return store;
    // });
    // const emailError = store?.errors?.errorMessage?.errorMessage?.email?.[0]
    // const passError = store?.errors?.errorMessage?.errorMessage?.password?.[0]
    // const errorMessage = store?.errors?.errorMessage?.errorMessage?.errorMessage
    //
        const validationSchema = yup.object({
        email: yup
            .string()
            .email("Not email!")
            .required("Email is required!"),
        password: yup
            .string()
            .required("Password is required!")
    });

    const initialValues: FormValues = { email: '', password: '' };

    const formik = useFormik({
        initialValues,
        validationSchema,

        onSubmit: (values: Idata ) => {
            dispatch(loginRequest(values))
            // dispatch(loginRequest(values))
        },
    });
    const { handleSubmit, handleChange, values } = formik;

    return (
        <StyledLogin>
            <FormContainer>
                    <StyledForm onSubmit={handleSubmit} >
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            value={values.email}
                            onChange={handleChange}
                            // error={touched.email && Boolean(formik.errors.email?formik.errors.email:emailError)}
                            // helperText={touched.email && formik.errors.email? formik.errors.email:emailError }
                        />
                        <TextField
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            // error={touched.password && Boolean(formik.errors.password? formik.errors.password: errorMessage?errorMessage:passError)}
                            // helperText={touched.password && formik.errors.password? formik.errors.password: errorMessage?errorMessage:passError}
                        />

                        <Button variant="contained" type="submit">Sign In</Button>
                  </StyledForm>
            </FormContainer>
        </StyledLogin>
    );
};

export default Login;
