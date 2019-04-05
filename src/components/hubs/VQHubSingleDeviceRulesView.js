import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Table, TableCell, TableRow, TableHead, TableBody } from '@material-ui/core'
import VQHubViewRuleButton from './VQHubViewRuleButton'

const styles = theme => ({
    root: {},
    tableCell: { padding: '0px' },
    tableRow: { height: '30px' }
})

const tempData = [
    { id: 1, rule: 'Ipsum', type: 'Lorem Ipsum' },
    { id: 2, rule: 'Ipsum', type: 'Lorem Ipsum' },
    { id: 3, rule: 'Ipsum', type: 'Lorem Ipsum' },
    { id: 4, rule: 'Ipsum', type: 'Lorem Ipsum' },
    { id: 5, rule: 'Ipsum', type: 'Lorem Ipsum' },
    { id: 6, rule: 'Ipsum', type: 'Lorem Ipsum' },
    { id: 7, rule: 'Ipsum', type: 'Lorem Ipsum' },
    { id: 8, rule: 'Ipsum', type: 'Lorem Ipsum' },
    { id: 9, rule: 'Ipsum', type: 'Lorem Ipsum' },
    { id: 10, rule: 'Ipsum', type: 'Lorem Ipsum' }
]

class VQHubSingleDeviceRulesView extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <>
                <Table>
                    <TableHead>
                        <TableRow className={classes.tableRow}>
                            <TableCell>Rule</TableCell>
                            <TableCell>Types</TableCell>
                            <TableCell style={{ width: '80px' }}>view</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tempData.map((e, i) => (
                            <TableRow key={i} className={classes.tableRow}>
                                <TableCell className={classes.tableCell}>{e.rule}</TableCell>
                                <TableCell className={classes.tableCell}>{e.type}</TableCell>
                                <TableCell className={classes.tableCell}><VQHubViewRuleButton id={e.id} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </>
        )
    }
}

VQHubSingleDeviceRulesView.protoType = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(VQHubSingleDeviceRulesView)