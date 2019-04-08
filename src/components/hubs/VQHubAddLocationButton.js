import React from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@material-ui/core'
import '../../App.css'

export default class VQHubAddLocationButton extends React.Component {
    state = { open: false };
    handleClickOpen = () => { this.setState({ open: true }) }
    handleClose = () => { this.setState({ open: false }) }

    render() {
        const data = this.props
        return (
            <>
                <Button                    
                    color="primary"
                    variant="contained"
                    className="Button"
                    onClick={this.handleClickOpen}>Add Location</Button>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title">

                    <DialogTitle id="form-dialog-title">Add Location - ID:{data.id}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send                  updates occasionally.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="deviceName"
                            label="Location Name"
                            type="text"
                            fullWidth />
                     
                    </DialogContent>
                    <DialogActions>
                        <Button className="Button" onClick={this.handleClose} color="primary">Cancel</Button>
                        <Button className="Button" onClick={this.handleClose} color="primary">Add Location</Button>
                    </DialogActions>
                </Dialog>
            </>

        )
    }
}
