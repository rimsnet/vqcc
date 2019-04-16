import React from 'react'
import DeveloperBoard from '@material-ui/icons/DeveloperBoard'
import { Card, CardHeader, CardContent } from '@material-ui/core'

class VQHubSingleDetailsList extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader title={<span className="title">Details of Single Hub</span>} avatar={<DeveloperBoard />} />
                <CardContent>Single Hub Sumerize Details</CardContent>
            </Card>
        )
    }
}

export default VQHubSingleDetailsList

