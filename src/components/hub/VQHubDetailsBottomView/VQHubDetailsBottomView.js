import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { History, ContactPhone, WifiTethering } from '@material-ui/icons'
import { Paper, Grid, Card, CardContent, CardHeader, CardActions, Button, Collapse } from '@material-ui/core'

import VQSingleHubTestTable from '../../table/VQSingleHubTestTable'
import VQHubDeviceLayout from '../../../Layout/hub/VQHubDeviceLayout'
import VQHubSingleDeviceEventsView from './VQHubSingleDeviceEventsView'
import VQHubAddDevice from '../VQHubDetailsBottomView/VQHubAddDevice'
import VQHubAddContact from '../VQHubDetailsBottomView/VQHubAddContact'
import VQHubAddRule from '../VQHubDetailsBottomView/VQHubAddRule'
import VQHubAddLocation from '../VQHubDetailsBottomView/VQHubAddLocation'
import SampleSocket from '../VQHubDetailsBottomView/SampleSocket'
import VQHubDeviceLocationView from '../VQHubDetailsBottomView/VQHubDeviceLocationView'
import VQHubSingleDeviceRulesView from '../VQHubDetailsBottomView/VQHubSingleDeviceRulesView'
import VQHubSingleDeviceContactView from '../VQHubDetailsBottomView/VQHubSingleDeviceContactView'

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 0 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};


const styles = theme => ({
    root: { flexGrow: 1, backgroundColor: theme.palette.background.paper, },
    searchBar: { position: 'relative', zIndex: '99999', float: 'right', top: '-37px', paddingRight: '10px' },
    textField: { marginLeft: theme.spacing.unit, marginRight: theme.spacing.unit, width: 200, top: '-20px' },
    title: { fontSize: '1.4rem' },

});



class VQHubDetailsBottomView extends React.Component {
    constructor(props) { super(props); this.state = { value: 0, expanded: false } }
    handleChange = (event, value) => { this.setState({ value }); }

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        const parent_id = this.props.id;

        return (

            <Grid container spacing={16}>
                <Grid item md={12}>
                    <SampleSocket />
                </Grid>
                <Grid item md={6}>
                    <Card>
                        <CardHeader
                            title={<span className={classes.title}>Devices</span>}
                            avatar={<WifiTethering />}
                            action={<div><VQHubAddDevice id={parent_id} /> <VQHubAddLocation id={parent_id} /></div>} />
                        <CardContent>
                            <VQHubDeviceLayout id={parent_id} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <Card>
                        <CardHeader title={<span className={classes.title}>Location history</span>} avatar={<History />} />
                        <CardContent>
                            <VQHubDeviceLocationView id={this.props.id} {...this.props} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <Card>
                        <CardHeader title={<span className={classes.title}>Test history</span>} avatar={<History />} />
                        <CardContent>
                            <VQSingleHubTestTable id={this.props.id} />
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
                        <CardHeader title="Rules" action={<VQHubAddRule id={this.props.id} />} />
                        <CardContent>
                            <VQHubSingleDeviceRulesView id={this.props.id} />                
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <Card>
                        <CardHeader title={<span className={classes.title}>Contact list</span>} avatar={<ContactPhone />} action={<VQHubAddContact id={this.props.id} />} />
                        <CardContent>
                            <VQHubSingleDeviceContactView id={this.props.id} />
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>

        )
    }
}

VQHubDetailsBottomView.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(VQHubDetailsBottomView)