import React from 'react'
import { withStyles, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import HomeTabLayout from './HomeTabLayout';
import VQHomeGraph from '../../components/home/VQHomeGraph';
import VQHomeNotifications from '../../components/home/VQHomeNotifications'

const styles = theme => ({
    root: { flexGrow: 1 },
    graphAndTabs: { color: 'black' }
})

class HomeLayout extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <>
                <Grid container className={classes.root}>
                    <Grid item xs={12}>
                        <Grid
                            container
                            spacing={16}
                            className={classes.demo}
                            alignItems='stretch'
                            justify='flex-start'
                            direction='row'>

                            <Grid key={1} item xs={9} className={classes.graphAndTabs}>
                                <VQHomeGraph  {...this.props.history} />
                                <HomeTabLayout {...this.props.history} />
                            </Grid>

                            <Grid key={2} item xs={3}><VQHomeNotifications {...this.props.history} /></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </>
        )
    }
}

HomeLayout.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HomeLayout)