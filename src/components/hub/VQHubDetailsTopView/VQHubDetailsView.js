import React from 'react'

const styles = {
    hub_details: { padding: '10px' }
}

class VQHubDetalsView extends React.Component {
    render() {
        const data = this.props.data.data;
        return (
            <div style={styles.hub_details}>
                <h3>Hub details</h3>
                <table>
                    <tbody>
                    <tr><td>Serial Number</td><td>{data.serial}</td></tr>
                    <tr><td>Created on</td><td>{data.created_on}</td></tr>
                    <tr><td>Updated on</td><td>{data.update_on}</td></tr>
                    <tr><td>Creaded by</td><td>{data.create_by}</td></tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default VQHubDetalsView