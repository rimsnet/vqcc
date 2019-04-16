import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import VQHubNewRuleButton from '../../buttons/VQHubNewRuleButton';
import VQHubNewContactButton from '../../buttons/VQHubNewContactButton';
import VQHubNewDeviceButton from '../../buttons/VQHubNewDeviceButton';
import VQHubQCTestButton from '../../buttons/VQHubQCTestButton';

const styles = theme => ({
    root: { padding: '10px' }
});

class VQHubQuickActions extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <VQHubNewRuleButton />
                <VQHubNewContactButton />
                <VQHubNewDeviceButton />
                <VQHubQCTestButton id={this.props.id} />
            </div>
        )
    }
}

VQHubQuickActions.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(VQHubQuickActions)