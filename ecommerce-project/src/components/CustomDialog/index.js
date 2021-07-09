import React from 'react'
import {Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,Grid} from "@material-ui/core"
import {useStyles} from "./styles"
// import PropTypes from 'prop-types'
export const CustomDialog= ({isOpen,handleClose,title,subtitle,children}) =>{
    const {btn,dialogTitle} = useStyles();
    return(
        <>
        <Dialog fullWidth maxWidth='xs' open={isOpen} onClose={handleClose}  >
             <Grid container justify="space-between" alignItems="center">
                 <Grid item >
             <DialogTitle variant="h6" className={dialogTitle} >
                 {title}
             </DialogTitle>
             </Grid>
             <Grid item >
             <Button className={btn} onClick={handleClose} >
                     x
                 </Button>
                 </Grid>
                 </Grid>
             <DialogContent>
                 {/* <DialogContentText>{subtitle}</DialogContentText> */}
             {children}
             </DialogContent>
             <DialogActions>
                
             </DialogActions>

        </Dialog>
        </>

    )
}

// CustomDialog.propTypes={
//     isOpen:propTypes.bool.isRequired,
//     handleClose:propTypes.func.isRequired,
//     title:propTypes.string.isRequired,
//     subtitle:propTypes.string,
//     children:propTypes.element.isRequired
// }