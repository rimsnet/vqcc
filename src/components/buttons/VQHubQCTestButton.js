import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
import { Link } from 'react-router-dom'


class VQHubQCTestButton extends React.Component {
    state = {
        open: false,
        results: {
            result: {}
        },
        buttonText: 'Identify',
        btnStatus: true
    };

    handleClickOpen = () => { this.setState({ open: true }) };
    handleClose = () => { this.setState({ open: false }); };

    buttonHandler = (e) => (value) => {
        try { axios.post('/api/thing/test/' + this.props.id + '/' + e).then(res => { this.setState({ btnStatus: false }) }) } catch (error) { console.log(error) }
        this.setState({ btnStatus: false })
    }

    render() {
        const data = this.state.results
        return (
            <div>
                <button onClick={this.handleClickOpen}>{this.state.buttonText}</button>
                <div>
                    <Dialog
                        onClose={this.handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={this.state.open}>
                        <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                            Device Identify
                        </DialogTitle>
                        <DialogContent>
                            <Typography gutterBottom>
                                <button onClick={this.buttonHandler('LED_GREEN')}>Play Green</button>
                                <button onClick={this.buttonHandler('LED_RED')}>Play Red</button>
                                <button onClick={this.buttonHandler('LED_YELLOW')}>Play Yellow</button>
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary" variant="contained" >
                                Close
                            </Button>
                            <Button onClick={this.handleClose} color="primary" disabled={this.state.btnStatus} variant="contained">
                                <Link style={{ textDecoration: 'none', color: 'white' }} to={'/qc-portal/' + this.props.id}>Procced to Testing </Link>
                            </Button>

                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        )
    }
}

export default VQHubQCTestButton