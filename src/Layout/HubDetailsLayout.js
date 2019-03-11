import React from 'react'
import VQHubDetailsTopView from '../components/hub/VQHubDetailsTopView';
import VQHubDetailsTabView from '../components/hub/VQHubDetailsTabView';
import { Grid } from '@material-ui/core';

const styles = { root: { flexGrow: 1 } }

class HubDetailsLayout extends React.Component {
    constructor(props){super(props)}
    render() {
        return (
            <div style={styles.root}>
                <Grid container spacing={8}>
                    <Grid item md={12}><VQHubDetailsTopView id={this.props.id} /></Grid>
                    <Grid item md={12}><VQHubDetailsTabView id={this.props.id} /></Grid>
                </Grid>
            </div>
        )
    }
}

export default HubDetailsLayout