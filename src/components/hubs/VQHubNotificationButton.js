import React from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@material-ui/core'
import NotificationsActive from '@material-ui/icons/NotificationsActive'



class VQHubNotificationButton extends React.Component {

    state = { open: false };
    handleClickOpen = () => { this.setState({ open: true }) }
    handleClose = () => { this.setState({ open: false }) }

    render() {

        var buttonAlert = ''
        switch (this.props.notification) {
            case 1: buttonAlert = <NotificationsActive onClick={this.handleClickOpen} style={{ color: 'red', cursor: 'pointer' }} />; break;
            default: buttonAlert = ''; break;
        }

        return (
            <>
                {buttonAlert}
                <Dialog
                    open={this.state.open}                   
                    aria-labelledby="form-dialog-title">

                    <DialogTitle id="form-dialog-title">Notification Status</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Alert Message HERE
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" variant="raised">Cancel</Button>
                        <Button onClick={this.handleClose} color="primary" variant="raised">Go to Hub</Button>
                    </DialogActions>
                </Dialog>
            </>

        )
    }
}

export default VQHubNotificationButton