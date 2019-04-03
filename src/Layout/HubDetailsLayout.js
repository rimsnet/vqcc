import React from 'react'
import VQHubDetailsTopView from '../components/hub/VQHubDetailsTopView';
import VQHubDetailsBottomView from '../components/hub/VQHubDetailsBottomView/VQHubDetailsBottomView';
import { Grid } from '@material-ui/core';
import axios from 'axios'

const styles = { root: { flexGrow: 1 } }

class HubDetailsLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            locations: [],
            security: {}
        }
    }

    componentDidMount() {
        axios.get('/api/frontend/dashboard/' + this.props.id).then(res => {
            this.setState({
                events: (res.data.events)?res.data.events:[],
                locations: (res.data.locations)?res.data.locations:[],
                security: res.data.security,
                data: res.data
            })
        }).catch((err)=>{
            this.setState({
                events: [],
                locations: [],
                security: [],
                data: {}
            })
        })
    }
    render() {
        return (
            <div style={styles.root}>
                <Grid container spacing={8}>
                    <Grid item md={12}><VQHubDetailsTopView id={this.props.id} server={this.state} /></Grid>
                    <Grid item md={12}><VQHubDetailsBottomView id={this.props.id} server={this.state} /></Grid>
                </Grid>
            </div>
        )
    }
}

export default HubDetailsLayout