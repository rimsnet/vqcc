import React from 'react'
import SettingsRemote from '@material-ui/icons/SettingsRemote'
import { Card, CardContent, CardHeader, ListItem, ListItemText } from '@material-ui/core'
/* import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types' */

import Battery20Icon from '@material-ui/icons/Battery20';
import Vibration from '@material-ui/icons/Vibration';



import '../Hub.css'

/* const styles = theme =>({}) */

class VQHubDeviceDoorSensor extends React.Component {

    render() {
        /* const { classes } = this.props;
        const data = this.props */
        return (
            <Card raised={true}>
                <CardHeader className="Card-header" avatar={<SettingsRemote />} title="Door" subheader="opened" />
                <CardContent className="Card-content">

                    <div className="Device">
                        <ListItem>
                            <Battery20Icon />
                            <ListItemText primary="Battery" secondary='10%' />
                        </ListItem>

                        <ListItem>
                            <Vibration />
                            <ListItemText primary="Door" secondary='Detected' />
                        </ListItem>
                    </div>

                  
                </CardContent>
            </Card>
        )
    }
}

/* VQHubDeviceDoorSensor.propTypes = {
    classes: PropTypes.object.isRequired,
} */

export default /* withStyles(styles) */ (VQHubDeviceDoorSensor)