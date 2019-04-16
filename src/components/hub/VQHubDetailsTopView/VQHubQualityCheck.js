import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
    root: { padding: '10px', width: '180px', backgroundColor: 'green', color: 'white', lineHeight: '5px', marginTop: '10px' }
});

class VQHubQualityCheck extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <p>Quality Check :</p>
                <h3>QC-PASSED</h3>
                <p>23/12/2018 10:24AM</p>
                <p>M.Rimzan</p>
            </div>
        )
    }
}

VQHubQualityCheck.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(VQHubQualityCheck)