import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import VQHubList from '../hubs/VQHubList'

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

const ConnectedTab = (props) => {
    return (
        <div>
            <span>ALL (10)</span>
        </div>
    )
}

const DisconnectedTab = (props) => {
    return (
        <div>
            <span>CONNECTED (10)</span>
        </div>
    )
}

const DisabledTab = (props) => {
    return (
        <div>
            <span>DISCONNECTED (12)</span>
        </div>
    )
}


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
    },
    viewButton: { padding: '0px 8px' },
});

class VQHubListingTab extends React.Component {

    state = {
        value: 0,
        search: ''
    };

    handleChange = (event, value) => { this.setState({ value }); };

    searchHandler = (e) => {
        this.setState({ search: e.target.value })
    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs value={value} onChange={this.handleChange} >
                        <Tab label={<ConnectedTab />} />
                        <Tab label={<DisconnectedTab />} />
                        <Tab label={<DisabledTab />} />
                    </Tabs>
                </AppBar>
                <div className={classes.searchBar}>
                    <TextField
                        className={classes.textField}
                        defaultValue=""
                        placeholder="Search"
                        margin="normal"
                        name="search"
                        onChange={this.searchHandler}
                    />
                    <Button className={classes.viewButton} color="primary" variant="contained">Search</Button>
                </div>
                {value === 0 && <TabContainer><VQHubList options={this.props.options}/></TabContainer>}
                {value === 1 && <TabContainer>Table has to be updated</TabContainer>}
                {value === 2 && <TabContainer>Table has to be updated</TabContainer>}

            </div>
        );
    }
}

VQHubListingTab.propTypes = {
    classes: PropTypes.object.isRequired,
}


export default withStyles(styles)(VQHubListingTab)