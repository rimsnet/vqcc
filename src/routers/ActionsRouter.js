import React from 'react'
import ActionsLayout from '../layouts/ActionsLayout'

class ActionsRouter extends React.Component {
    render() {
        return (
            <>
                <ActionsLayout {...this.props} />
            </>
        )
    }
}

export default ActionsRouter