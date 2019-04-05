import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SettingsRemote from '@material-ui/icons/SettingsRemote'
import { Card, CardContent, CardHeader } from '@material-ui/core'

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
                    Power : 10% <br />
                    Vibration : Detected <br />
                    Luminance : 400<br />
                    Motion : No<br />

                </CardContent>
            </Card>
        )
    }
}

VQHubSingleDeviceView.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(VQHubSingleDeviceView)