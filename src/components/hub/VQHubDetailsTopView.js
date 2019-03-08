import React from 'react'
import { Paper, Grid } from '@material-ui/core';
import VQHubDetalsView from './VQHubDetailsView';

const URL = 'https://demo.vqbn.com/rnd/qc-portal-api/index.php/api/API_v2/hub'

class VQHubDetailsTopView extends React.Component {
    constructor() { super(); this.state = { data: {} } }
    componentDidMount() { this.loadData(); console.log(this.state) }

    loadData = () => {
        fetch(URL + '?id=' + this.props.id)
            .then(response => response.json())
            .then(data => this.setState({ data: data, loading: false, }))
            .catch(() => this.setState({ loading: false }));
    }

    render() {
        return (
            <Paper>
                <Grid container spacing={8}>
                    <Grid item md={4}> <VQHubDetalsView data={this.state} /></Grid>

                </Grid>
            </Paper>
        )
    }
}

export default VQHubDetailsTopView