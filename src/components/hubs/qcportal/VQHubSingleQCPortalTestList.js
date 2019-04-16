import React from 'react'
import { Card, CardHeader, CardContent } from '@material-ui/core'
import { History } from '@material-ui/icons'
import { SingleHubTestView } from './QCPortalComponents'

import './QCPortal.css'

class VQHubSingleQCPortalTestList extends React.Component {

    render() {
        return (
            <Card>
                <CardHeader title={<span className="title">Test history</span>} avatar={<History />} />
                <CardContent>
                    <SingleHubTestView id={this.props.id} serial={this.props.serial} />
                </CardContent>
            </Card>
        )
    }
}

export default VQHubSingleQCPortalTestList