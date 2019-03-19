import React from 'react'
import { Button } from '@material-ui/core'

class VQHubAddDevice extends React.Component {
    addDeviceHandler = () => { alert('Add Device - clicked') }
    render() {
        return (
            <Button
                color="primary"
                variant="contained"
                onClick={this.addDeviceHandler}>Add Device</Button>
        )
    }
}

export default VQHubAddDevice