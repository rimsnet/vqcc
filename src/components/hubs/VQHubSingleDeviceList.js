import React from 'react'
import { Card, CardContent, CardActions, Button, CardHeader, Grid } from '@material-ui/core';
import VQHubSingleDeviceView from './VQHubSingleDeviceView'

class VQHubSingleDeviceList extends React.Component{
    render(){
        return(
            <Grid container spacing={8} justify={'space-evenly'}>
                <Grid item={true} md={6}>
                    <VQHubSingleDeviceView id={this.props.id} title={"Multi-Sensor"} sub={'Living Room'} />
                </Grid>
                <Grid item={true} md={6}>
                    <VQHubSingleDeviceView id={this.props.id} title={"Tri-Sensor"} sub={'Living Room'} />
                </Grid>
                <Grid item={true} md={6}>
                    <VQHubSingleDeviceView id={this.props.id} title={"Door Sensor"} sub={'Hall'} />
                </Grid>
                <Grid item={true} md={6}>
                    <VQHubSingleDeviceView id={this.props.id} title={"Smart Plug"} sub={'Kitchen'} />
                </Grid>
                <Grid item={true} md={6}>
                    <VQHubSingleDeviceView id={this.props.id} title={"Smart Plug"} sub={'Kitchen'} />
                </Grid>
                <Grid item={true} md={6}>
                    <VQHubSingleDeviceView id={this.props.id} title={"Smart Plug"} sub={'Kitchen'} />
                </Grid>
            </Grid>
        )
    }
}

export default VQHubSingleDeviceList