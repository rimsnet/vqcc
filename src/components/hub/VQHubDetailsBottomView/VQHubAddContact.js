import React from 'react'
import { Button } from '@material-ui/core'

class VQHubAddContact extends React.Component {
    addContactHandler = () => { alert('VQHub Add Contact - clicked') }
    render() {
        return (
            <Button
                onClick={this.addContactHandler}
                color="primary"
                variant="contained">Add Contact</Button>
        )
    }
}

export default VQHubAddContact