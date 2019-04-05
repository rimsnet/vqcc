import React from 'react'
import HomeLayout from '../layouts/HomeLayout'

class HomeRouter extends React.Component {

    componentDidMount() {
        const credentialStorage = localStorage.getItem('credential')
        if (credentialStorage ==null) { this.props.history.push('/login') }
    }

    render() {
        return (
           <HomeLayout {...this.props} />
        )
    }
}

export default HomeRouter