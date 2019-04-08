import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SettingsRemote from '@material-ui/icons/SettingsRemote'
import { Card, CardContent, CardHeader, Chip, Avatar, List, ListItem, ListItemText, ListItemAvatar, ListItemSecondaryAction, IconButton } from '@material-ui/core'

import Battery20 from '@material-ui/icons/Battery20';
import Vibration from '@material-ui/icons/Vibration';
import SlowMotionVideo from '@material-ui/icons/SlowMotionVideo'
import ViewWeek from '@material-ui/icons/ViewWeek'

const styles = theme => ({
    CardContent: {
        paddingTop: 1
    },
    CardHeader: {
        paddingBottom: 10
    }
});


class VQHubSingleDeviceView extends React.Component {
    render() {
        const { classes } = this.props;
        const data = this.props
        return (
            <Card raised={true}>
                <CardHeader className={classes.CardHeader} avatar={<SettingsRemote />} title={data.title} subheader={data.sub} />
                <CardContent className={classes.CardContent}>

                    <div style={{ display: 'flex' }}>
                        <ListItem>
                            <ListItemAvatar>
                                <Battery20 />
                            </ListItemAvatar>
                            <ListItemText primary="Power" secondary='10%' />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Vibration />
                            </ListItemAvatar>
                            <ListItemText primary="Vibration" secondary='Detected' />
                        </ListItem>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <ListItem>
                            <ListItemAvatar>
                                <SlowMotionVideo />
                            </ListItemAvatar>
                            <ListItemText primary="Motion" secondary='No' />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <ViewWeek />
                            </ListItemAvatar>
                            <ListItemText primary="Luminance" secondary='400' />
                        </ListItem>
                    </div>
                </CardContent>
            </Card>
        )
    }
}

VQHubSingleDeviceView.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(VQHubSingleDeviceView)