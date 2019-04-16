import React from 'react'
import SettingsRemote from '@material-ui/icons/SettingsRemote'
import { Card, CardContent, CardHeader, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core'

import Battery20Icon from '@material-ui/icons/Battery20';
import Vibration from '@material-ui/icons/Vibration';
import SlowMotionVideo from '@material-ui/icons/SlowMotionVideo'
import ViewWeek from '@material-ui/icons/ViewWeek'

import './Home.css'


class VQHubSingleDeviceView extends React.Component {
    render() {
        //const { classes } = this.props;
        const data = this.props
        return (
            <Card raised={true}>
                <CardHeader className="Card-header" avatar={<SettingsRemote />} title={data.title} subheader={data.sub} />
                <CardContent className="Card-content">

                    <div className="Device">
                        <ListItem>
                            <Battery20Icon />
                            <ListItemText primary="Power" secondary='10%' />
                        </ListItem>

                        <ListItem>
                            <Vibration />
                            <ListItemText primary="Vibration" secondary='Detected' />
                        </ListItem>
                    </div>

                    <div className="Device">
                        <ListItem>
                            <SlowMotionVideo />
                            <ListItemText primary="Motion" secondary='No' />
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

/* VQHubSingleDeviceView.propTypes = {
    classes: PropTypes.object.isRequired,
} */

export default VQHubSingleDeviceView