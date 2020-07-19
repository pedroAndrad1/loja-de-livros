import React, { Children } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { Fade, Slide } from '@material-ui/core';

export default ( {open, handleClose, severity, children}) => (
    <Snackbar 
        open={open} 
        onClose= {handleClose} 
        autoHideDuration={2000} 
        TransitionComponent= {Slide}
        anchorOrigin= {
            {
            vertical: 'top', 
            horizontal: 'right'
            }
        }
        >
        <Alert variant="filled" severity= {severity}>
            {children}
        </Alert>
    </Snackbar>
)