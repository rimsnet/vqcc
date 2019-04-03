import React from 'react'

export default class VQHubNewDeviceButton extends React.Component { buttonHandler = () => { alert('New Device') }; render() { return (<button onClick={this.buttonHandler}>New Device</button>) } }

