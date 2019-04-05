import React from 'react'
import HubLayout from '../layouts/HubLayout';

class HubRouter extends React.Component {
    render() {
        return (
            <HubLayout {...this.props} />
        )
    }
}

export default HubRouter