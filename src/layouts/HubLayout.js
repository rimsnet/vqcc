import React from 'react'
import DefaultLayout from './DefaultLayout'
import VQSingleHubDetails from '../components/hubs/VQSingleHubDetails'


class HubLayout extends React.Component {
    render() {
        const options = {
            navigaton: this.props.history,
            menus: [
                { to: '/hubs', name: 'Hubs List' },
                { to: '/actions', name: 'Home' }
            ]
        }

        return (
            <DefaultLayout options={options} dashboard={"Manage Single Hub : " + this.props.match.params.id}> <VQSingleHubDetails options={this.props.history} id={this.props.match.params.id}/></DefaultLayout>
        )
    }
}

export default HubLayout