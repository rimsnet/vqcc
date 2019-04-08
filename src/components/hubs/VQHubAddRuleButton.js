import React from 'react'
import PropTypes from 'prop-types';
import { Input, Button, FormControl, Select, InputLabel, MenuItem, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import '../../App.css'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
    root:{}
})

class VQHubAddRuleButton extends React.Component {
    state = { open: false, age: '' };
    handleClickOpen = () => { this.setState({ open: true }) }
    handleClose = () => { this.setState({ open: false }) }
    handleChange = name => event => { this.setState({ [name]: Number(event.target.value) }); };

    render() {
        const classes = this.props
        const data = this.props
        return (
            <>
                <Button
                    color="primary"
                    variant="contained"
                    className="Button"
                    onClick={this.handleClickOpen}>Add Rule</Button>

                <Dialog
                    className={classes.root}
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title">

                    <DialogTitle id="form-dialog-title">Add Rule - ID:{data.id}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send                  updates occasionally.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="deviceName"
                            label="Select Rule"
                            type="text"
                            fullWidth />

                        <FormControl style={{ width: '100%' }}>
                            <InputLabel htmlFor="age-simple" >Select Rule</InputLabel>
                            <Select
                                variant="filled"
                                value={this.state.age}
                                onChange={this.handleChange('age')}
                                input={<Input id="age-simple" />}>
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value={10}>Create</MenuItem>
                                <MenuItem value={20}>Update</MenuItem>
                                <MenuItem value={30}>Delete</MenuItem>
                            </Select>
                        </FormControl>

                    </DialogContent>
                    <DialogActions>
                        <Button className="Button" onClick={this.handleClose} color="primary">Cancel</Button>
                        <Button className="Button" onClick={this.handleClose} color="primary">Add Rule</Button>
                    </DialogActions>
                </Dialog>
            </>

        )
    }
}

VQHubAddRuleButton.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(VQHubAddRuleButton) 