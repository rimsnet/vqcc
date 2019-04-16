import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { DialogContent, Dialog, DialogActions, DialogTitle, Button } from '@material-ui/core';

const styles = theme => ({
    root: {},
})

class VQHubViewRule extends React.Component {

    state = { open: false }
    handleClickOpen = () => { this.setState({ open: true }) }
    handleClose = () => { this.setState({ open: false }) }

    render() {
        
        const { classes } = this.props
        const id = this.props.id

        return (
            <div>
                <button onClick={this.handleClickOpen}>view</button>
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

VQHubViewRule.protoType = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(VQHubViewRule)