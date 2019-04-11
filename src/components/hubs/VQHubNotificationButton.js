import React from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import NotificationsActive from '@material-ui/icons/NotificationsActive'
import '../../App.css'


class VQHubNotificationButton extends React.Component {

    state = { open: false };
    handleClickOpen = () => { this.setState({ open: true }) }
    handleClose = () => { this.setState({ open: false }) }

    render() {

        var buttonAlert = ''
        switch (this.props.notification) {
            case 'ONLINE': buttonAlert = <NotificationsActive onClick={this.handleClickOpen} style={{ color: 'red', cursor: 'pointer' }} />; break;
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
                        <Button onClick={this.handleClose} color="primary" variant="raised" className="Button">Cancel</Button>
                        <Button onClick={this.handleClose} color="primary" variant="raised" className="Button">Go to Hub</Button>
                    </DialogActions>
                </Dialog>
            </>

        )
    }
}

export default VQHubNotificationButton