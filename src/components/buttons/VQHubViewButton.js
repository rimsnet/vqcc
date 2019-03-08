import React from 'react'
import { Link } from 'react-router-dom'

class VQHubViewButton extends React.Component {
    render() { return <button><Link to={'/hub/' + this.props.id}>View</Link></button> }
}

export default VQHubViewButton
