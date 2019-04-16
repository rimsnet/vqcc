import React from 'react'
import VQHubIdentifyButton from './VQHubIdentifyButton'
import VQHubNotificationButton from './VQHubNotificationButton'
import VQHubViewButton from './VQHubViewButton'
import VQHubSingleDeviceView from './VQHubSingleDeviceView'
import VQHubList from './VQHubList'

export const HubIdentifyButton = (props) => (<VQHubIdentifyButton id={props.serial} options={props.options} options={props.options} />)
export const HubNotificationButton = (props) => (<VQHubNotificationButton notification={props.notification} options={props.options}/>)
export const HubViewButton = (props) => (<VQHubViewButton id={props.id} serial={props.serial} options={props.options} />)
export const HubSingleDeviceView = (props) => (<VQHubSingleDeviceView />)
export const HubList = (props) => (<VQHubList options={props.options} search={props.search} type={props.type} />)

export default ({
    HubIdentifyButton,
    HubNotificationButton,
    HubViewButton,
    HubSingleDeviceView,
    HubList
})