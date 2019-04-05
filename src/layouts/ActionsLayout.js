import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import VQActionHubsCard from '../components/cards/VQActionHubsCard';
import { Paper } from '@material-ui/core';

const styles = theme => ({
    root: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionCard: {
        margin: '10px'
    },
    commantText: {
        marginTop: theme.spacing.unit * 10,
        textAlign:'center'
    }
})

class ActionsLayout extends React.Component {

    render() {
        const { classes } = this.props
         return (
            <div className={classes.root}>
                <h2 className={classes.commantText}>Vesta Dashboard</h2>
                <Paper className={classes.paper} elevation={0}>
                    <VQActionHubsCard
                        image="https://previews.123rf.com/images/amin268/amin2681706/amin268170601102/81040012-router-flat-icon-internet-and-wireless-wifi-vector-graphics-a-colorful-solid-pattern-on-a-white-back.jpg"
                        name="Hubs : 1156"
                        location="/hubs"
                        description="Manage All Hubs"
                        actions={this.props.history}
                    />

                    <VQActionHubsCard
                        image="https://www.st.com/content/dam/stm32-gui/ST2211_call_center_purple.png"
                        name="Users"
                        location="/user-access"
                        description="Manage IVR Users"
                        actions={this.props.history}
                    />
                    <VQActionHubsCard
                        image="https://cdn3.vectorstock.com/i/1000x1000/65/12/dollar-money-simple-graphic-vector-18676512.jpg"
                        name="Billing"
                        location="/users"
                        description="Billing"
                        actions={this.props.history}
                    />
                </Paper>               
            </div>
        )
    }
}

ActionsLayout.protoType = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ActionsLayout);