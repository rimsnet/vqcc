import React from 'react'
/* import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles' */
import { Grid } from '@material-ui/core'

import { HubSingleDetailsList } from '../details/DetailsComponents'
import { HubSingleQCPortalTestList } from '../qcportal/QCPortalComponents'
import { HubSingleLocationList } from '../locations/LocationsComponent'
import { HubSingleRulesList } from '../rules/RulesComponents'
import { HubSingleDeviceList } from '../sensors/DeviceComponents'
import { HubSingleContactList } from '../contact/ContactComponents'
import { HubSingleEventList } from '../events/EventsComponents'


/*const styles = theme => ({
    root: { flexGrow: 1, backgroundColor: theme.palette.background.paper, },
    searchBar: { position: 'relative', zIndex: '99999', float: 'right', top: '-37px', paddingRight: '10px' },
    textField: { marginLeft: theme.spacing.unit, marginRight: theme.spacing.unit, width: 200, top: '-20px' },
    title: { fontSize: '1.4rem' },
}) */

class VQSingleHubDetails extends React.Component {

    constructor(props) { super(props); this.state = { value: 0, expanded: false } }

    render() {
        /* const { classes } = this.props;
         const { value } = this.state; */
        const parent_id = this.props.id;
        const parent_serial = this.props.serial;

        return (
            <Grid container spacing={16}>
                <Grid item md={12}>
                    <HubSingleDetailsList id={parent_id} />
                </Grid>
                <Grid item md={6}>
                    <HubSingleDeviceList id={parent_id} />
                </Grid>
                <Grid item md={6}>
                    <HubSingleLocationList id={parent_id} />
                </Grid>
                <Grid item md={6}>
                    <HubSingleQCPortalTestList id={parent_id} serial={parent_serial} />
                </Grid>
                <Grid item md={6}>
                    <HubSingleEventList id={parent_id} server={this.props.server} serial={parent_serial} />
                </Grid>
                <Grid item md={6}>
                    <HubSingleRulesList id={parent_id} />
                </Grid>
                <Grid item md={6}>
                    <HubSingleContactList id={parent_id} />
                </Grid>

            </Grid>
        )
    }
}

/* VQSingleHubDetails.propTypes = {
    classes: PropTypes.object.isRequired,
} */

export default /* withStyles(styles)*/(VQSingleHubDetails)