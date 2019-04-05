import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { DialogContent, Dialog, DialogActions, DialogTitle, Button } from '@material-ui/core';

const styles = theme => ({
    root: {},
})

class VQHubViewRuleButton extends React.Component {

    state = { open: false }
    handleClickOpen = () => { this.setState({ open: true }) }
    handleClose = () => { this.setState({ open: false }) }

    render() {

        const { classes } = this.props
        const id = this.props.id

        return (
            <div>
                <Button onClick={this.handleClickOpen} style={{ padding: '0px 8px', fontSize: '11px' }} color="primary" variant="contained">view</Button>
                <Dialog aria-labelledby="vq-hub-view-rule" open={this.state.open}>
                    <DialogTitle id="vq-hub-view-rule">Rule {id}</DialogTitle>
                    <DialogContent>
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                        <div>
                            <button>Delete</button>
                            <button>Edit</button>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" autoFocus>Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

VQHubViewRuleButton.protoType = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(VQHubViewRuleButton)