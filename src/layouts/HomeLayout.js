import React from 'react'
import DefaultLayout from './DefaultLayout';

class HomeLayout extends React.Component {
    render() {

        const options = {
            navigaton: this.props.history,
            menus: [{ to: '/', name: 'Hubs' },
            { to: '/actions', name: 'Back' }]
        }

        return (
            <DefaultLayout options={options}>Data</DefaultLayout>
        )
    }
}

export default HomeLayout