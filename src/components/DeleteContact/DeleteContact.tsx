import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useDispatch} from "react-redux";
import { deleteContactRequest} from "../../actions/dataActions";



export default function AlertDialog({currentItem}: any) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const deleteContact=()=>{
        dispatch(deleteContactRequest(currentItem?.[0]))
        // const   supplierId = supplierInformation.id
        // supplierInformation && dispatch({type: DELETE_SUPPLIER_SAGA, supplierId})
        handleClose()
    }
    return (
        <div>
            <Button style={{marginLeft: 10}}  variant="contained" onClick={handleClickOpen} color='error' size= "small"  >
                <span className="button-text">Delete</span>
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {`Would you like to delete ${currentItem?.[1]}  contact?`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button className='buttons' variant="contained" color="success" onClick={deleteContact}>Yes</Button>
                    <Button className='buttons' variant="contained" color="error"   onClick={handleClose}>No</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
