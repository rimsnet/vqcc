import React from 'react'
import SettingsRemote from '@material-ui/icons/SettingsRemote'
import { Card, CardContent, CardHeader, ListItem, ListItemText } from '@material-ui/core'
/* import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types' */

import Battery20Icon from '@material-ui/icons/Battery20';


import '../Hub.css'

/* const styles = theme =>({}) */

class VQHubDeviceRangeExtenderSensor extends React.Component {

    render() {
        /* const { classes } = this.props;
        const data = this.props */
        return (
            <Card raised={true}>
                <CardHeader className="Card-header" avatar={<SettingsRemote />} title="Range Extender" subheader="connected" />
                <CardContent className="Card-content">
                    <div className="Device">
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