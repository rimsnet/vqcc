import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, Button, CardHeader, Grid } from '@material-ui/core';
import VQHubSingleDeviceView from '../../components/hub/VQHubDetailsBottomView/VQHubSingleDeviceView'
const styles = {

};


class VQHubDeviceLayout extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Grid container spacing={8} justify={'space-evenly'}>
                <Grid item={true}  md={6}>
                    <VQHubSingleDeviceView id={this.props.id} title={"Multi-Sensor"} sub={'Living Room'} />
                </Grid>
                <Grid item={true}  md={6}>
                    <VQHubSingleDeviceView id={this.props.id} title={"Tri-Sensor"} sub={'Living Room'} />
                </Grid>
                <Grid item={true}  md={6}>
                    <VQHubSingleDeviceView id={this.props.id} title={"Door Sensor"} sub={'Hall'} />
                </Grid>
                <Grid item={true}  md={6}>
                    <VQHubSingleDeviceView id={this.props.id} title={"Smart Plug"} sub={'Kitchen'} />
                </Grid>
                <Grid item={true}  md={6}>
                    <VQHubSingleDeviceView id={this.props.id} title={"Smart Plug"} sub={'Kitchen'} />
                </Grid>
                <Grid item={true}  md={6}>
                    <VQHubSingleDeviceView id={this.props.id} title={"Smart Plug"} sub={'Kitchen'} />
                </Grid>
               
            </Grid>
        )
    }
}

VQHubDeviceLayout.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(VQHubDeviceLayout)