import React from 'react'
import { Card, CardHeader, CardContent } from '@material-ui/core'
import LocationOn from '@material-ui/icons/LocationOn'
import { HubDeviceLocationView, HubAddLocationButton } from './LocationsComponent'

import './Locations.css'

class VQHubSingleLocationList extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader title={<span className="title">Location </span>} avatar={<LocationOn />} action={<HubAddLocationButton id={this.props.id} />} />
                <CardContent>
                    <HubDeviceLocationView id={this.props.id} {...this.props} />
                </CardContent>
            </Card>
        )
    }
}

export default VQHubSingleLocationList