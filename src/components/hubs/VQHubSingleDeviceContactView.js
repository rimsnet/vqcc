import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { TableCell, TableBody, Table, TableHead, TableRow } from '@material-ui/core';

import '../../App.css'

const styles = theme => ({
    root: {},
    tableRow: { height: '30px' }
})

const tempData = [
    { id: 1, name: 'mohamed', relation: 'brother', contact: '0778966336' },
    { id: 2, name: 'insaf', relation: 'son', contact: '0778966335' },
    { id: 3, name: 'Kevin de kuzman', relation: 'friend', contact: '0778966337' },
    { id: 4, name: 'Shahma', relation: 'sister', contact: '0778966337' },
    { id: 5, name: 'Shahma', relation: 'sister', contact: '0778966337' },
    { id: 6, name: 'Shahma', relation: 'sister', contact: '0778966337' },
    { id: 7, name: 'mohamed', relation: 'brother', contact: '0778966336' },
    { id: 8, name: 'mohamed', relation: 'brother', contact: '0778966336' },
    { id: 9, name: 'mohamed', relation: 'brother', contact: '0778966336' },
    { id: 10, name: 'mohamed', relation: 'brother', contact: '0778966336' },
]

class VQHubSingleDeviceContactView extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <>
                <Table>
                    <TableHead>
                        <TableRow className="Table-row">
                            <TableCell>Name</TableCell>
                            <TableCell>Relation</TableCell>
                            <TableCell>Conatact Number</TableCell>
                            <TableCell className="Table-view">view</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tempData.map((e, i) => (
                            <TableRow key={i} className="Table-row">
                                <TableCell>{e.name}</TableCell>
                                <TableCell>{e.relation}</TableCell>
                                <TableCell>{e.contact}</TableCell>
                                <TableCell className="Table-view">view</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </>
        )
    }
}

VQHubSingleDeviceContactView.propType = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(VQHubSingleDeviceContactView)