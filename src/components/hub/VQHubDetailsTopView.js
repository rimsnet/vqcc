import React from 'react'
import { Paper, Grid } from '@material-ui/core';
import VQHubDetalsView from './VQHubDetailsTopView/VQHubDetailsView';
import axios from 'axios';
import VQHubStatusLayout from '../../Layout/hub/VQHubStatusLayout';
import VQHubQuickActions from './VQHubDetailsTopView/VQHubQuickActions';

class VQHubDetailsTopView extends React.Component {

    constructor(props) { super(props); this.state = { data: {} } }
    componentDidMount() { this.loadData(); console.log(this.state) }

    loadData = () => { }

    render() {
        return (
            <div style={{ backgroundColor: 'white' }}>
                <Grid container spacing={8}>
                    <Grid item> <VQHubStatusLayout data={this.state} /></Grid>
                    <Grid item md={6}> <VQHubDetalsView data={this.state} /></Grid>
                    {/*<Grid item md={4}> <VQHubQuickActions  data={this.state} id={this.props.id} /></Grid> */}
                </Grid>
            </div>
        )
    }
}

export default VQHubDetailsTopView