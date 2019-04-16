import React from 'react'
import { Card, CardHeader, CardContent } from '@material-ui/core'
import { HubSingleDeviceRulesView,HubAddRuleButton } from './RulesComponents'

import './Rules.css'

class VQHubSingleQCPortalTestList extends React.Component {

    render() {
        return (
            <Card>
                <CardHeader title="Rules" action={<HubAddRuleButton id={this.props.id} />} />
                <CardContent>
                    <HubSingleDeviceRulesView id={this.props.id} />
                </CardContent>
            </Card>
        )
    }
}

export default VQHubSingleQCPortalTestList