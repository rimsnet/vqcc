import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Tabs, Tab, Paper } from '@material-ui/core'

import VQHomeHubsList from '../../components/home/VQHomeHubsList';

const styles = theme => ({
    root: { flexGrow: 1, width: '100%', backgroundColor: theme.palette.background.paper },
    paper: {  marginTop:'10px' }
})

const ConnectedTab = (props) => (
    <div>
        <span>CONNECTED (10)</span>
    </div>
)

const DisconnectedTab = (props) => (
    <div>
        <span>DISCONNECTED (2)</span>
    </div>
)

class HomeTabLayout extends React.Component {

    state = { value: 0 }
    handleChange = (event, value) => { this.setState({ value }) }

    render() {

        const { classes } = this.props
        const { value } = this.state

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label={<ConnectedTab />} />
                        <Tab label={<DisconnectedTab />} />
                    </Tabs>
                </AppBar>
                {value === 0 && <Paper className={classes.paper}><VQHomeHubsList nav={this.props} /></Paper>}
                {value === 1 && <div>Item 2</div>}
            </div>
        )
    }
}

HomeTabLayout.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(HomeTabLayout)