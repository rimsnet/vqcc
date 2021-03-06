import React from 'react';
/* import { withStyles } from '@material-ui/core/styles'; */
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import Typography from '@material-ui/core/Typography';
import axios from 'axios'

import './QCPortal.css'


class VQHubViewTestResultButton extends React.Component {
    state = {
        open: false,
        results: {
            data: {
                result: {}
            }
        },
        buttonText: 'view'
    };

    handleClickOpen = () => {
        this.setState({ buttonText: 'Please wait' })
        axios.get('/api/thing/test/result/' + this.props.id).then(res => {
            this.setState({ results: res.data, open: true, buttonText: 'view' });
        })
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    buttonHandler = () => { alert(this.props.id) }

    render() {
        const data = this.state.results
        return (
            <div>
                <Button className="Button" onClick={this.handleClickOpen} color="primary" variant="contained">{this.state.buttonText}</Button>
                <div>
                    <Dialog
                        onClose={this.handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={this.state.open}>
                        <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                            Hub Test Result {this.props.vqSerial}
                        </DialogTitle>
                        <DialogContent>
                            <Typography gutterBottom>

                                <br />
                                <br />

                                testedDateTime : {data.data.testedDateTime}<br />
                                testedBy : {data.data.testedBy}<br />
                                comment : {data.data.comment}<br /><br />

                                {Object.keys(data.data.result).map((keyName, i) => (
                                    <span key={i}> {keyName} : {data.data.result[keyName]} <br /></span>
                                ))}

                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary" variant="contained" className="Button">Close</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        )
    }
}

export default VQHubViewTestResultButton