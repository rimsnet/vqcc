import React from 'react'
import VQHubSingleDeviceEventsView from './VQHubSingleDeviceEventsView'
import VQHubSingleEventList from './VQHubSingleEventList'

export const DeviceEventsView = (props) =>(
    <VQHubSingleDeviceEventsView id={props.id} />
)

export const HubSingleEventList = (props) =>(
    <VQHubSingleEventList id={props.id} server={props.server} serial={props.serial}/>
)


export default({
    DeviceEventsView,
    HubSingleEventList,
})