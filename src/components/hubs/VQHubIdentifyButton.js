import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
//import IconButton from '@material-ui/core/IconButton';
//import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
//import axios from 'axios'
import { Link } from 'react-router-dom'

const styles = theme => ({
    viewButton: { padding: '0px 8px' },
    redButton: { padding: '0px 8px',marginRight:'10px' },
    greenButton: { padding: '0px 8px',marginRight:'10px' },
    yellowButton: { padding: '0px 8px',marginRight:'10px' }
})

class VQHubIdentifyButton extends React.Component {

    state = {
        open: false,
        buttonText: 'Identify',
        btnStatus: true
    };

    handleClickOpen = () => { this.setState({ open: true }) };
    handleClose = () => { this.setState({ open: false }); };
    buttonHandler = (e) => (v) => { this.setState({ btnStatus: false})}

    render() {
        const { classes } = this.props
        return (<>
            <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={this.handleClickOpen}
                className={classes.viewButton}>Identify</Button>
            <Dialog
                onClose={this.handleClose}
                aria-labelledby="customized-dialog-title"
                open={this.state.open}>
                <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                    Device Identify
                        </DialogTitle>
                <DialogContent>
                    <Typography gutterBottom>
                        <Button className={classes.greenButton} onClick={this.buttonHandler('LED_GREEN')}  color="primary" variant="contained" >Play Green</Button>
                        <Button className={classes.redButton} onClick={this.buttonHandler('LED_RED')}  color="primary" variant="contained" >Play Red</Button>
                        <Button className={classes.yellowButton} onClick={this.buttonHandler('LED_YELLOW')}  color="primary" variant="contained" >Play Yellow</Button>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button className={classes.viewButton} onClick={this.handleClose} color="primary" variant="contained" >Close</Button>
                    <Button className={classes.viewButton} onClick={this.handleClose} color="primary" disabled={this.state.btnStatus} variant="contained">
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={'/qc-portal/' + this.props.id}>Procced to Testing </Link>
                    </Button>

                </DialogActions>
            </Dialog>

        </>
        )
    }
}

VQHubIdentifyButton.propType = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(VQHubIdentifyButton)