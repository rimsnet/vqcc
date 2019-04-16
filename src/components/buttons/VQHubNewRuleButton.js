import React from 'react'

export default class VQHubNewRuleButton extends React.Component { buttonHandler = () => { alert("New Rule") }; render() { return (<button onClick={this.buttonHandler}>New Rule</button>) } }

