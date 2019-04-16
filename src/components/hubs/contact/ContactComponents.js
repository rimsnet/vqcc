import React from 'react'

import VQHubSingleDeviceContactView from './VQHubSingleDeviceContactView'
import VQHubAddContactButton from './VQHubAddContactButton'
import VQHubSingleContactList from './VQHubSingleContactList'

export const DeviceContactView = (props) => (<VQHubSingleDeviceContactView id={props.id} />)
export const AddContactButton = (props) => (<VQHubAddContactButton id={props.id} />)
export const HubSingleContactList = (props) =>(<VQHubSingleContactList id={props.id} />)

export default (
    {
        DeviceContactView,
        AddContactButton,
        HubSingleContactList
    }
)