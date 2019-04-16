import React from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@material-ui/core'
import './Contact.css'

class VQHubAddContactButton extends React.Component {
    state = { open: false };
    handleClickOpen = () => { this.setState({ open: true }) }
    handleClose = () => { this.setState({ open: false }) }

    render() {
        return (
            <>
                <Button
                    className="Button"
                    color="primary"
                    variant="contained"
                    onClick={this.handleClickOpen}>Add Contact</Button>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title">

                    <DialogTitle id="form-dialog-title">Add Contact</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send                  updates occasionally.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="deviceName"
                            label="Contact Name"
                            type="text"
                            fullWidth />

                    </DialogContent>
                    <DialogActions>
                        <Button className="Button" onClick={this.handleClose} color="primary">Cancel</Button>
                        <Button className="Button" onClick={this.handleClose} color="primary">Add Contact</Button>
                    </DialogActions>
                </Dialog>
            </>

        )
    }
}

export default VQHubAddContactButton