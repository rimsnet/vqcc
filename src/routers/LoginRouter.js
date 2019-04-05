import React from 'react'
import VQLoginFrom from '../components/forms/VQLoginForm'

class LoginRouter extends React.Component {

    componentDidMount(){
        const credentialStorage = localStorage.getItem('credential')
        if (credentialStorage != null) { this.props.history.push('/actions') }
    }

    render() {
        return (
            <VQLoginFrom {...this.props} />
        )
    }
}

export default LoginRouter