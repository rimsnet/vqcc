import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
    list: { padding: '5px' },
    unOrder: { padding: '0px', listStyleType: 'none' },
    listDiv: { border: '1px solid #3f51b5', padding: '5px', display: 'grid', cursor: 'pointer' },
    mainDiv: { overflow: 'auto', height: '715px' }
})

class VQHomeNotifications extends React.Component {

    handleChange = (value) => (event) => { this.props.push('/hub/' + value) }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.mainDiv}>
                <ul className={classes.unOrder}>
                    {[
                        '209c4bbfcfabbdf4c36503278ad155ad',
                        '209c4bbfcfabbdf4c36503278ad155ad',
                        '209c4bbfcfabbdf4c36503278ad155ad',
                        '209c4bbfcfabbdf4c36503278ad155ad',
                        '209c4bbfcfabbdf4c36503278ad155ad',
                        '209c4bbfcfabbdf4c36503278ad155ad',
                        '209c4bbfcfabbdf4c36503278ad155ad',
                        '209c4bbfcfabbdf4c36503278ad155ad',
                        '209c4bbfcfabbdf4c36503278ad155ad',
                        '209c4bbfcfabbdf4c36503278ad155ad',
                        '209c4bbfcfabbdf4c36503278ad155ad',
                        '209c4bbfcfabbdf4c36503278ad155ad',
                        '209c4bbfcfabbdf4c36503278ad155ad',
                        '209c4bbfcfabbdf4c36503278ad155ad',
                        '209c4bbfcfabbdf4c36503278ad155ad',
                        '209c4bbfcfabbdf4c36503278ad155ad',
                        '209c4bbfcfabbdf4c36503278ad155ad',
                        '209c4bbfcfabbdf4c36503278ad155ad',
                        '209c4bbfcfabbdf4c36503278ad155ad'
                    ].map((e, i) => (
                        <li className={classes.list} key={i}>
                            <div className={classes.listDiv} onClick={this.handleChange(e)}>
                                <span>Disabled | SVHSZW070056B1</span>
                                <span>2018-09-22 | Alert : 4</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

VQHomeNotifications.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(VQHomeNotifications)