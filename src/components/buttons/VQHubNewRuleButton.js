import React from 'react'

class VQHubNewRuleButton extends React.Component {
    buttonHandler = () => { alert("New Rule") }
    render() {
        return (
            <button onClick={this.buttonHandler}>New Rule</button>
        )
    }
}

export default VQHubNewRuleButton