import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
    root: { padding: '10px', width: '180px', backgroundColor: 'green', color: 'white', lineHeight: '5px' }
});

class VQHubConnected extends React.Component {

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <p>Status :</p>
                <h3>CONNECTED</h3>      
                <p>4 Devices Connected</p>
                <p>3 Users</p>
            </div>
        )
    }
}

VQHubConnected.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(VQHubConnected)