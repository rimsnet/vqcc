import React from 'react'
import MainLayout from '../../Layout/MainLayout'
import HubDetailsLayout from '../../Layout/HubDetailsLayout'
import history from '../../history'

class Hub extends React.Component {
    render() {
        const url_id = (history.location !== undefined) ? history.location.pathname.split('/')[2] : undefined
        return (
            <MainLayout dashboard={"Hub"}>
                <HubDetailsLayout id={url_id} />
            </MainLayout>
        )
    }
}

export default Hub