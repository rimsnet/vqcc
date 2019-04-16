import React from 'react'
import VQHubSingleLocationList from './VQHubSingleLocationList'
import VQHubAddLocationButton from './VQHubAddLocationButton'
import VQHubDeviceLocationView from './VQHubDeviceLocationView'

export const HubSingleLocationList = (props) =>(<VQHubSingleLocationList id={props.id} />)
export const HubAddLocationButton = (props) =>(<VQHubAddLocationButton id={props.id} />)
export const HubDeviceLocationView = (props) =>(<VQHubDeviceLocationView id={props.id} />)

export default({
    HubSingleLocationList,
    HubAddLocationButton,
    HubDeviceLocationView
})