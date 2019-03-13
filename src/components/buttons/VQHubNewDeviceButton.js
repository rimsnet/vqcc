import React from 'react'

class VQHubNewDeviceButton extends React.Component {
    buttonHandler = () => { alert('New Device') }
    render() {
        return (
            <button onClick={this.buttonHandler}>New Device</button>
        )
    }
}

export default VQHubNewDeviceButton