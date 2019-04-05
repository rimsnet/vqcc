import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { History, ContactPhone, WifiTethering, DeveloperBoard, LocationOn } from '@material-ui/icons'
import { Paper, Grid, Card, CardContent, CardHeader, CardActions, Button, Collapse } from '@material-ui/core'

import VQHubAddDeviceButton from '../hubs/VQHubAddDeviceButton'
import VQHubAddContactButton from '../hubs/VQHubAddContactButton'
import VQHubAddRuleButton from '../hubs/VQHubAddRuleButton'
import VQHubAddLocationButton from '../hubs/VQHubAddLocationButton'

import VQHubSingleDeviceContactView from '../hubs/VQHubSingleDeviceContactView'
import VQHubSingleDeviceRulesView from '../hubs/VQHubSingleDeviceRulesView'
import VQSingleHubTestView from './VQSingleHubTestView'
import VQHubDeviceLocationView from './VQHubDeviceLocationView'
import VQHubSingleDeviceList from './VQHubSingleDeviceList'
import VQHubSingleDeviceEventsView from './VQHubSingleDeviceEventsView'


const styles = theme => ({
    root: { flexGrow: 1, backgroundColor: theme.palette.background.paper, },
    searchBar: { position: 'relative', zIndex: '99999', float: 'right', top: '-37px', paddingRight: '10px' },
    textField: { marginLeft: theme.spacing.unit, marginRight: theme.spacing.unit, width: 200, top: '-20px' },
    title: { fontSize: '1.4rem' },
})

class VQSingleHubDetails extends React.Component {

    constructor(props) { super(props); this.state = { value: 0, expanded: false } }

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        const parent_id = this.props.id;

        return (
            <Grid container spacing={16}>
                <Grid item md={12}>
                    <Card>
                        <CardHeader title={<span className={classes.title}>Details of Single Hub</span>} avatar={<DeveloperBoard />} />
                        <CardContent>
                            Single Hub Sumerize Details
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <Card style={{boxShadow:'none'}}>
                        <CardHeader
                            title={<span className={classes.title}>Devices</span>}
                            avatar={<WifiTethering />}
                            action={<div><VQHubAddDeviceButton id={parent_id} /> <VQHubAddLocationButton id={parent_id} /></div>} />
                        <CardContent>
                            <VQHubSingleDeviceList id={parent_id} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <Card>
                        <CardHeader title={<span className={classes.title}>Location history</span>} avatar={<LocationOn />} />
                        <CardContent>
                            <VQHubDeviceLocationView id={this.props.id} {...this.props} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <Card>
                        <CardHeader title={<span className={classes.title}>Test history</span>} avatar={<History />} />
                        <CardContent>
                            <VQSingleHubTestView id={this.props.id} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <Card>
                        <CardHeader title={<span className={classes.title}>Events history</span>} avatar={<History />} />
                        <CardContent>
                            <VQHubSingleDeviceEventsView id={this.props.id} server={this.props.server} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <Card>
                        <CardHeader title="Rules" action={<VQHubAddRuleButton id={this.props.id} />} />
                        <CardContent>
                            <VQHubSingleDeviceRulesView id={this.props.id} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <Card>
                        <CardHeader title={<span className={classes.title}>Contact list</span>} avatar={<ContactPhone />} action={<VQHubAddContactButton id={this.props.id} />} />
                        <CardContent>
                            <VQHubSingleDeviceContactView id={this.props.id} />
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        )
    }
}

VQSingleHubDetails.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(VQSingleHubDetails)