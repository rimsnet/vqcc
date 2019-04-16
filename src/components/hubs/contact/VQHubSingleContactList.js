import React from 'react'
import { Card, CardHeader, CardContent } from '@material-ui/core'
import { ContactPhone } from '@material-ui/icons'
import { DeviceContactView, AddContactButton } from './ContactComponents'

import './Contact.css'

class VQHubSingleContactList extends React.Component {

    render() {
        return (
            <Card>
                <CardHeader title={<span className="title">Contact list</span>} avatar={<ContactPhone />} action={<AddContactButton id={this.props.id} />} />
                <CardContent>
                    <DeviceContactView id={this.props.id} />
                </CardContent>
            </Card>
        )
    }
}

export default VQHubSingleContactList