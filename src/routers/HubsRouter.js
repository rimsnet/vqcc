import React from 'react'
import HubsLayout from '../layouts/HubsLayout';

class HubsRouter extends React.Component {
    render() {
        return (
            <HubsLayout {...this.props} />
        )
    }
}

export default HubsRouter