import React from 'react'
import VQSingleHubTestView from './VQSingleHubTestView'
import VQHubSingleQCPortalTestList from './VQHubSingleQCPortalTestList'

export const SingleHubTestView = (props) => (<VQSingleHubTestView id={props.id} serial={props.serial}/>)
export const HubSingleQCPortalTestList =(props) =>(<VQHubSingleQCPortalTestList id={props.id} serial={props.serial} /> )


export default ({
    SingleHubTestView,
    HubSingleQCPortalTestList
})