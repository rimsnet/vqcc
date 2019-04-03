import React from 'react'

export default class VQHubNewContactButton extends React.Component {buttonHandler = () => { alert('New Contact')}; render() {return (<button onClick={this.buttonHandler}>New Contact</button> ) }}

