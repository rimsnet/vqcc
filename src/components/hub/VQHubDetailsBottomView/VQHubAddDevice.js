import React from 'react'
import { Button,FormControl,InputLabel,Input,MenuItem,Select, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@material-ui/core'

class VQHubAddDevice extends React.Component {
    state = { open: false, age:'' };
    handleClickOpen = () => { this.setState({ open: true }) }
    handleClose = () => { this.setState({ open: false }) }
    handleChange = name => event => { this.setState({ [name]: Number(event.target.value) }); };

    render() {
        const data = this.props
        return (
            <>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={this.handleClickOpen}>Add Device</Button>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title">

                    <DialogTitle id="form-dialog-title">Add Device - ID:{data.id}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send                  updates occasionally.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="deviceName"
                            label="Device Name"
                            type="text"
                            fullWidth />
                        <TextField
                            margin="dense"
                            id="deviceSerial"
                            label="Serial Number"
                            type="number"
                            fullWidth />
                        <FormControl style={{ width: '100%' }}>
                            <InputLabel htmlFor="age-simple" >Select Type</InputLabel>
                            <Select
                                variant="filled"
                                value={this.state.age}
                                onChange={this.handleChange('age')}
                                input={<Input id="age-simple" />}>
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value={10}>Sensor</MenuItem>
                                <MenuItem value={20}>Door</MenuItem>
                                <MenuItem value={30}>Delete</MenuItem>
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">Cancel</Button>
                        <Button onClick={this.handleClose} color="primary">Add Device</Button>
                    </DialogActions>
                </Dialog>
            </>

        )
    }
}

export default VQHubAddDevice