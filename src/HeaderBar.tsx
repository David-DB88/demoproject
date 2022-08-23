import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useDispatch} from "react-redux";
import {logOutRequest} from './actions/authActions'


const  HeaderAppBar: React.FC =() =>{
    const dispatch = useDispatch()

    const handleClick = ()=>{
        dispatch(logOutRequest())
    }
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        <Button
                            color="inherit" 
                            variant="contained"
                            onClick={handleClick}
                            >
                            <span style={{color:'black'}}>Log Out</span>
                        </Button>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export  default HeaderAppBar
