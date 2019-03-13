import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import QCAppProvider from '../components/qc-portal/QCAppProvider'
import QCMainTestButton from '../components/qc-portal/QCMainTestButton'
import QCNetworkTestModule from '../components/qc-portal/QCNetworkTestModule';
import QCUSBTestModule from '../components/qc-portal/QCUSBTestModule';
import { Grid } from '@material-ui/core';
import QCManualTestModule from '../components/qc-portal/QCManualTestModule';
import QCMainStatusSaveButton from '../components/qc-portal/QCMainStatusSaveButton';

const styles = theme => ({
    root: { padding: '10px' }
});


class QCPortalLayout extends React.Component {
    render() {
        const id = this.props.id
        const { classes } = this.props
        return (
            <QCAppProvider>
                <div className={classes.root}>
                    <Grid container spacing={8}>
                        <Grid item md={4}>
                            <QCMainTestButton id={id} />
                            <QCNetworkTestModule id={id} />
                            <QCUSBTestModule id={id} />
                        </Grid>
                        <Grid item md={6}>
                            <QCManualTestModule id={id} />
                        </Grid>
                        <Grid item md={12}>
                            <QCMainStatusSaveButton id={id} />
                        </Grid>
                    </Grid>
                </div>
            </QCAppProvider>
        )
    }
}

QCPortalLayout.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(QCPortalLayout)