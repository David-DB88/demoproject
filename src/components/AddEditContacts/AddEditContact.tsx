import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormValues from './FormValues';

export default function FormDialog({editMode, currentItem}: any) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="success" size='small' onClick={handleClickOpen}>
                {!editMode? 'ADD NEW CONTACT' : 'EDIT CONTACT'}
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{!editMode? 'Add New Contact' : 'Edit Contact'}</DialogTitle>
                <DialogContent>
                    <hr/>
                    <FormValues editMode={editMode} currentItem={currentItem} handleClose={handleClose}/>
                </DialogContent>
            </Dialog>
        </div>
    );
}
