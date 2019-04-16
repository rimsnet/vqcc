import React from 'react'
import { TableHead, TableRow, TableCell } from '@material-ui/core'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    root: {},
    tableRow: { height: '30px' }
})

class VQTableHead extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <TableHead>
                <TableRow className={classes.tableRow}>
                    {this.props.head.map((e, index) => (<TableCell key={index}>{e}</TableCell>))}
                </TableRow>
            </TableHead>
        )
    }
}

export default withStyles(styles)(VQTableHead)

