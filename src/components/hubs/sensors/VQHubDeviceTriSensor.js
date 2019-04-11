import React from 'react'
import SettingsRemote from '@material-ui/icons/SettingsRemote'
import { Card, CardContent, CardHeader, ListItem, ListItemText } from '@material-ui/core'
/* import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types' */

import Battery20Icon from '@material-ui/icons/Battery20';
import Vibration from '@material-ui/icons/Vibration';
import SlowMotionVideo from '@material-ui/icons/SlowMotionVideo'
import ViewWeek from '@material-ui/icons/ViewWeek'


import '../Hub.css'

/* const styles = theme =>({}) */

class VQHubDeviceTriSensor extends React.Component {

    render() {
        /* const { classes } = this.props; 
        const data = this.props */
        return (
            <Card raised={true}>
                <CardHeader className="Card-header" avatar={<SettingsRemote />} title="Tri Sensor" subheader="connected" />
                <CardContent className="Card-content">

                    <div className="Device">
                        <ListItem>
                            <Battery20Icon />
                            <ListItemText primary="Battery" secondary='10%' />
                        </ListItem>
                        <ListItem>
                            <Vibration />
                            <ListItemText primary="Motion" secondary='Detected' />
                        </ListItem>
                    </div>

                    <div className="Device">
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