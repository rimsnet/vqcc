import React from 'react'
import VQHubListingTab from '../components/tabs/VQHubListingTab'
import DefaultLayout from './DefaultLayout'

class HubsLayout extends React.Component {
    render() {

        const options = {
            navigaton: this.props.history,
            menus: [
                { to: '/hubs', name: 'Hubs List' },
                { to: '/actions', name: 'Back' }
            ]
        }

        return (
            <DefaultLayout options={options} dashboard="Manage Hubs"><VQHubListingTab options={this.props.history} /></DefaultLayout>
        )
    }
}

export default HubsLayout