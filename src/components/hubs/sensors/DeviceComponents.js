import React from 'react'

import VQHubDeviceDoorSensor from './VQHubDeviceDoorSensor'
import VQHubDeviceTriSensor from './VQHubDeviceTriSensor'
import VQHubDeviceRangeExtenderSensor from './VQHubDeviceRangeExtenderSensor'
import VQHubDeviceNanoSensor from './VQHubDeviceNanoSensor'
import VQHubSingleDeviceList from './VQHubSingleDeviceList'
import VQHubAddDeviceButton from './VQHubAddDeviceButton'

import './Sensors.css'

export const DeviceStatus = (props) => { switch (props.status) { case '1': return <span className="device-connected">online</span>; default: return <span className="device-disconnected">offline</span> } }
export const DeviceTitle = (props) => (<span className="device-title">{props.title}</span>)
export const DeviceDoorSensor = (props) => (<VQHubDeviceDoorSensor id={props.id} />)
export const DeviceTriSensor = (props) => (<VQHubDeviceTriSensor id={props.id} />)
export const DeviceRangeExtenderSensor = (props) => (<VQHubDeviceRangeExtenderSensor id={props.id} />)
export const DeviceNanoSensor = (props) => (<VQHubDeviceNanoSensor id={props.id} />)
export const HubSingleDeviceList = (props) =>(<VQHubSingleDeviceList id={props.id} />)
export const HubAddDeviceButton = (props) =>(<VQHubAddDeviceButton id={props.id} />)

export default ({
        DeviceStatus,
        DeviceTitle,
        DeviceDoorSensor,
        DeviceTriSensor,
        DeviceRangeExtenderSensor,
        DeviceNanoSensor,
        HubSingleDeviceList,
        HubAddDeviceButton
})
