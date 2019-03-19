import React from 'react'
import { Route } from 'react-router-dom'

const Button = (props) => (
    <Route render={({ history }) => (
        <button onClick={() => { history.push('/hub/' + props.id) }}> View </button>
    )} />
)

class VQHubViewButton extends React.Component {
    render() { return <Button id={this.props.id} /> }
}

export default VQHubViewButton
