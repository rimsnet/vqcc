import React from 'react'
import { Link } from 'react-router-dom'

export default class VQHubIdentifyButton extends React.Component { render() { return <button><Link to={'/hub/' + this.props.id}>Identify</Link></button> } }

