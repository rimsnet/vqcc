import React from 'react'
import { Card, CardHeader, CardContent } from '@material-ui/core'
import { History } from '@material-ui/icons'
import { DeviceEventsView } from './EventsComponents'

import './Events.css'

class VQHubSingleEventList extends React.Component {

    componentWillReceiveProps(prevProps) {
        console.log(prevProps)
    }

    componentDidMount(){
        console.log(this.props)
    }

    render() {
        return (
            <Card>
                <CardHeader title={<span className="title">Events history</span>} avatar={<History />} />
                <CardContent>
                    <DeviceEventsView id={this.props.id} server={this.props.server} serial={this.props.parent_serial} />
                </CardContent>
            </Card>
        )
    }
}

export default VQHubSingleEventList