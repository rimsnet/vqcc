import React from 'react'
import { Button } from '@material-ui/core'

class VQHubAddRule extends React.Component {
    addRuleHandler = () => { alert("Add Rule - Clicked") }
    render() {
        return (
            <Button
                color="primary"
                variant="contained"
                onClick={this.addRuleHandler}>Add Rule</Button>
        )
    }
}

export default VQHubAddRule