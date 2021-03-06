import React from 'react'
import SettingsRemote from '@material-ui/icons/SettingsRemote'
import { Card, CardContent, CardHeader, ListItem, ListItemText } from '@material-ui/core'
/* import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types' */

import Battery20Icon from '@material-ui/icons/Battery20';
import Vibration from '@material-ui/icons/Vibration';
import SlowMotionVideo from '@material-ui/icons/SlowMotionVideo'
import ViewWeek from '@material-ui/icons/ViewWeek'
import './Sensors.css'

/* const styles = theme =>({}) */

import { DeviceStatus, DeviceTitle } from './DeviceComponents'

class VQHubDeviceTriSensor extends React.Component {

    render() {
        /* const { classes } = this.props; 
        const data = this.props */
        return (
            <Card raised={true}>
                <CardHeader className="card-header " avatar={<SettingsRemote />} title={<DeviceTitle title="Tri Sensor" />} subheader={<DeviceStatus status="1" />} />
                <CardContent className="card-content">
                    <div className="device">
                        <ListItem>
                            <Battery20Icon />
                            <ListItemText primary="Battery" secondary='10%' />
                        </ListItem>
                        <ListItem>
                            <Vibration />
                            <ListItemText primary="Motion" secondary='Detected' />
                        </ListItem>
                    </div>

                    <div className="device">
                        <ListItem>
                            <SlowMotionVideo />
                            <ListItemText primary="Temperature" secondary='10' />
                        </ListItem>
                        <ListItem>
                            <ViewWeek />
                            <ListItemText primary="Luminance" secondary='400' />
                        </ListItem>
                    </div>
                </CardContent>
            </Card>
        )
    }
}

/* VQHubDeviceTriSensor.propTypes = {
    classes: PropTypes.object.isRequired,
} */

export default /* withStyles(styles) */(VQHubDeviceTriSensor)