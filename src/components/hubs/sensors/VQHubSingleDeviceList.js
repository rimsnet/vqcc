import React from 'react'
import {Card, CardHeader, CardContent} from '@material-ui/core'
import {WifiTethering} from '@material-ui/icons'
import './Sensors.css'

import { DeviceDoorSensor, DeviceTriSensor, DeviceRangeExtenderSensor, DeviceNanoSensor,HubAddDeviceButton } from './DeviceComponents'

class VQHubSingleDeviceList extends React.Component {
    render() {
        return (

            <Card style={{ boxShadow: 'none' }}>
                <CardHeader
                    title={<span className="title">Devices</span>}
                    avatar={<WifiTethering />}
                    action={<HubAddDeviceButton id={this.props.parent_id} />} />
                <CardContent>
                    <div className="masonry">
                        <div className="item" >
                            <DeviceTriSensor id={this.props.parent_id} />
                        </div>
                        <div className="item" >
                            <DeviceDoorSensor id={this.props.parent_id} />
                        </div>
                        <div className="item" >
                            <DeviceRangeExtenderSensor id={this.props.parent_id} />
                        </div>
                        <div className="item" >
                            <DeviceNanoSensor id={this.props.parent_id} />
                        </div>
                    </div>
                </CardContent>
            </Card>


        )
    }
}

export default VQHubSingleDeviceList