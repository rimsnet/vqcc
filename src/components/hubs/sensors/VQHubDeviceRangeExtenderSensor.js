import React from 'react'
import SettingsRemote from '@material-ui/icons/SettingsRemote'
import { Card, CardContent, CardHeader, ListItem, ListItemText } from '@material-ui/core'
/* import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types' */

import Battery20Icon from '@material-ui/icons/Battery20';
import { DeviceStatus, DeviceTitle } from './DeviceComponents'

/* const styles = theme =>({}) */

class VQHubDeviceRangeExtenderSensor extends React.Component {

    render() {
        /* const { classes } = this.props;
        const data = this.props */
        return (
            <Card raised={true}>
                <CardHeader className="card-header" avatar={<SettingsRemote />} title={<DeviceTitle title="Range Extender"/>} subheader={<DeviceStatus status={1} />} />
                <CardContent className="card-content">
                    <div className="device">
                        <ListItem>
                            <Battery20Icon />
                            <ListItemText primary="Power Level" secondary='10%' />
                        </ListItem>
                    </div>
                </CardContent>
            </Card>
        )
    }
}

/* VQHubDeviceRangeExtenderSensor.propTypes = {
    classes: PropTypes.object.isRequired,
} */

export default /* withStyles(styles) */(VQHubDeviceRangeExtenderSensor)