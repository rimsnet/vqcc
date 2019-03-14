import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SettingsRemote from '@material-ui/icons/SettingsRemote'
import { Card, CardContent, CardHeader } from '@material-ui/core'
import {Battery20,Vibration,Highlight,Person} from '@material-ui/icons'

const styles = {  
    media: {
       // height: 200,
    },
};


class VQHubSingleDeviceView extends React.Component {
    render() {
        const { classes } = this.props;
        const data = this.props
        return (
            <Card>
                <CardHeader avatar={<SettingsRemote />} title={data.title} subheader={data.sub} />
                <CardContent>
                 <Battery20/>{data.id} &nbsp;
                 <Vibration/> Vibration <br/>
                 <Highlight/> Luminance 
                 <Person/> Motion
                </CardContent>
            </Card>
        )
    }
}

VQHubSingleDeviceView.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(VQHubSingleDeviceView)