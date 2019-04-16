import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
    root: { padding: '10px', display: 'flex' },
    deviceIcon: { color: 'white', width: '120px', height: '100%' },
    deviceIconImage: { width: '120px', marginTop:'60px' },
    deviceDetails: {  },
    deviceList: { }
});

class VQHubDetalsView extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.deviceIcon}><img className={classes.deviceIconImage} src="http://content.us.dlink.com/wp-content/uploads/2014/03/DUB-1340-C1_side-left.png" /></div>
                <div className={classes.deviceDetails}>
                    <p><b>Hub Name :</b> Lorem Ipsum123</p>
                    <p><b>Serial Number :</b> 12345678922</p>
                    <p><b>Created On :</b> 24/03/2018 12:00AM</p>
                    <p><b>Created :</b> Admin</p>
                    <p><b>Last Updated:</b> 25/03/2018 11:00AM</p>
                </div>
                <div className={classes.deviceList}></div>
            </div>
        )
    }
}

VQHubDetalsView.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(VQHubDetalsView)