import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SettingsRemote from '@material-ui/icons/SettingsRemote'
import { Card, CardContent, CardHeader } from '@material-ui/core'
import Battery20 from '@material-ui/icons/Battery20'

const styles = {
    card: {
        maxWidth: 380,
        width: 380
    },
    media: {
        height: 200,
    },
};


class VQHubSingleDeviceView extends React.Component {
    render() {
        const { classes } = this.props;
        const data = this.props
        return (
            <Card className={classes.card}>
                <CardHeader avatar={<SettingsRemote />} title={data.title} subheader={data.sub} />
                <CardContent>
                 <Battery20/>{data.id}
                </CardContent>
            </Card>
        )
    }
}

VQHubSingleDeviceView.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(VQHubSingleDeviceView)