import React from 'react'
import VQHubSingleDeviceRulesView from './VQHubSingleDeviceRulesView'
import VQHubAddRuleButton from './VQHubAddRuleButton'
import VQHubSingleRulesList from './VQHubSingleRulesList'
import VQHubViewRuleButton from './VQHubViewRuleButton'

export const HubSingleDeviceRulesView = (props) => (<VQHubSingleDeviceRulesView id={props.id} />)
export const HubAddRuleButton = (props) =>(<VQHubAddRuleButton id={props.id} />)
export const HubSingleRulesList = (props) =>(<VQHubSingleRulesList id={props.id}/>)
export const HubRuleViewButton = (props)=>(<VQHubViewRuleButton id={props.id} />)

export default ({
    HubSingleDeviceRulesView,
    HubAddRuleButton,
    HubSingleRulesList,
    HubRuleViewButton
})