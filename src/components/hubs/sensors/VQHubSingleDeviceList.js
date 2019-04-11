import React from 'react'

import VQHubDeviceDoorSensor from './VQHubDeviceDoorSensor'
import VQHubDeviceTriSensor from './VQHubDeviceTriSensor'
import VQHubDeviceRangeExtenderSensor from './VQHubDeviceRangeExtenderSensor'
import VQHubDeviceNanoSensor from './VQHubDeviceNanoSensor'

import './Sensors.css'

class VQHubSingleDeviceList extends React.Component {
    render() {
        return (
            <div className="masonry">
                <div className="item" >
                    <VQHubDeviceTriSensor />
                </div>
                <div className="item" >
                    <VQHubDeviceDoorSensor />
                </div>
                <div className="item" >
                    <VQHubDeviceRangeExtenderSensor />
                </div>
                <div className="item" >
                    <VQHubDeviceNanoSensor />
                </div>                
            </div>
        )
    }
}

export default VQHubSingleDeviceList