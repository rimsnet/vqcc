import React from 'react'
import SettingsRemote from '@material-ui/icons/SettingsRemote'
import { Card, CardContent, CardHeader, ListItem, ListItemText } from '@material-ui/core'
/* import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types' */

import Battery20Icon from '@material-ui/icons/Battery20';
import Vibration from '@material-ui/icons/Vibration';
import { DeviceStatus, DeviceTitle } from './DeviceComponents'

/* const styles = theme =>({}) */

class VQHubDeviceNanoSensor extends React.Component {

    render() {
        /* const { classes } = this.props;
         const data = this.props */
        return (
            <Card raised={true}>
                <CardHeader className="card-header" avatar={<SettingsRemote />} title={<DeviceTitle title="Nano Mode" />} subheader={<DeviceStatus status={1} />} />
                <CardContent className="card-content">

                    <div className="device">
                        <ListItem>
                            <Battery20Icon />
                            <ListItemText primary="Battery" secondary='10%' />
                        </ListItem>

                        <ListItem>
                            <Vibration />
                            <ListItemText primary="Value" secondary='' />
                        </ListItem>
                    </div>


                </CardContent>
            </Card>
        )
    }
}

/* VQHubDeviceNanoSensor.propTypes = {
    classes: PropTypes.object.isRequired,
} */

export default /* withStyles(styles) */ (VQHubDeviceNanoSensor)