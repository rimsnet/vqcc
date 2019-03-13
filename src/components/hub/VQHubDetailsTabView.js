import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import VQSingleHubTestTable from '../table/VQSingleHubTestTable';
import { Paper, Grid, Card, CardContent, CardHeader } from '@material-ui/core'
import VQHubDeviceLayout from '../../Layout/hub/VQHubDeviceLayout'
import {History, ContactPhone, WifiTethering } from '@material-ui/icons'

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 0 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    searchBar: {
        position: 'relative',
        zIndex: '99999',
        float: 'right',
        top: '-37px',
        paddingRight: '10px'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
        top: '-20px'
    }
});



class VQHubDetailsTabView extends React.Component {
    constructor(props) { super(props); this.state = { value: 0 } }
    handleChange = (event, value) => { this.setState({ value }); }

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        /*return (
            <Paper>

                <AppBar position="static" color="default">
                    <Tabs value={value} onChange={this.handleChange} >
                        <Tab label="Test history" />
                        <Tab label="Events history" />
                        <Tab label="Rules" />
                        <Tab label="Contact list" />
                        <Tab label="Devices" />
                    </Tabs>
                </AppBar>

                {value === 0 && <TabContainer><VQSingleHubTestTable id={this.props.id} /></TabContainer>}
                {value === 1 && <TabContainer><VQSingleHubTestTable id={this.props.id} /></TabContainer>}
                {value === 2 && <TabContainer>C</TabContainer>}
                {value === 3 && <TabContainer>D</TabContainer>}
                {value === 4 && <TabContainer>E</TabContainer>} 

            </Paper>
        ) */

        return (

            <Grid container spacing={16}>
                <Grid item md={6}>
                    <Card>
                        <CardHeader title="Devices" avatar={<WifiTethering/>}/>
                        <CardContent>
                            <VQHubDeviceLayout id={this.props.id}/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <Card>
                        <CardHeader title="Test history"  avatar={<History/>}/>
                        <CardContent>
                            <VQSingleHubTestTable id={this.props.id} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <Card>
                        <CardHeader title="Events history"  avatar={<History/>}/>
                        <CardContent>
                            <VQSingleHubTestTable id={this.props.id} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <Card>
                        <CardHeader title="Rules" />
                        <CardContent>
                            <VQSingleHubTestTable id={this.props.id} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <Card>
                        <CardHeader title="Contact list"  avatar={<ContactPhone/>}/>
                        <CardContent>
                            <VQSingleHubTestTable id={this.props.id} />
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>

        )
    }
}

VQHubDetailsTabView.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(VQHubDetailsTabView)