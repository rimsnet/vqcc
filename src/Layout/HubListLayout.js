import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'

import VQHubList from '../components/hub/VQHubList'

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
    }
});

class HubListLayout extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs value={value} onChange={this.handleChange} >
                        <Tab label="ALL (16)" />
                        <Tab label="CONNECTED (10)" />
                        <Tab label="DISCONNECTED (12)" />
                    </Tabs>

                </AppBar>
                <div className={classes.searchBar}>
                    <TextField
                        className={classes.textField}
                        defaultValue=""
                        margin="normal"
                    />
                    <button>Search</button>
                </div>
                {value === 0 && <TabContainer><VQHubList /></TabContainer>}
                {value === 1 && <TabContainer>Contants have to be updated</TabContainer>}
                {value === 2 && <TabContainer>Contants have to be updated</TabContainer>}

            </div>
        );
    }
}

HubListLayout.propTypes = {
    classes: PropTypes.object.isRequired,
}


export default withStyles(styles)(HubListLayout)