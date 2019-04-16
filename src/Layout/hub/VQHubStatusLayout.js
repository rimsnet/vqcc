import React from 'react'
import VQHubConnected from '../../components/hub/VQHubDetailsTopView/VQHubConnected'
import VQHubQualityCheck from '../../components/hub/VQHubDetailsTopView/VQHubQualityCheck'

class VQHubStatusLayout extends React.Component {
    render() {
        return (
            <div>
                <VQHubConnected />                
                <VQHubQualityCheck />
            </div>
        )
    }
}

export default VQHubStatusLayout