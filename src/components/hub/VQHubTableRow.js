import React from 'react'
import { TableCell, TableRow } from '@material-ui/core'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import VQHubIdentifyButton from '../buttons/VQHubIdentifyButton'
import VQHubViewButton from '../buttons/VQHubViewButton';
import VQHubQCTestButton from '../buttons/VQHubQCTestButton';

const styles = theme => ({
    root: {},
    tableCell: { width: '80px' },
    img: { width: '85px' },
    tableRow: { height: '30px' }
})

class VQHubTableRow extends React.Component {
    render() {
        const { classes } = this.props
        const { data } = this.props
        return (
            <TableRow key={data.key} className={classes.tableRow}>
            <TableCell className={classes.tableCell}><img className={classes.img} src="data:image/png;base64,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" /></TableCell>
                <TableCell style={{ maxWidth: 25, minWidth: 25 }}>{data.vqSerial}</TableCell>
                <TableCell style={{ maxWidth: 25, minWidth: 25 }}>{data.status}</TableCell>
                <TableCell style={{ maxWidth: 25, minWidth: 25 }}>{data.factoryTestStatus}</TableCell>
                <TableCell style={{ maxWidth: 25, minWidth: 25 }}>{data.createdDateTime}</TableCell>
                <TableCell style={{ maxWidth: 25, minWidth: 25 }}>{data.updatedDateTime}</TableCell>
                <TableCell style={{ maxWidth: 25, minWidth: 25 }}>Dushan</TableCell>
                <TableCell style={{ maxWidth: 25, minWidth: 25 }}> <VQHubQCTestButton id={data.serial} /> </TableCell>
                <TableCell style={{ maxWidth: 25, minWidth: 25 }}><VQHubViewButton id={data.id} /></TableCell>
            </TableRow>
        )
    }
}

VQHubTableRow.protoType = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(VQHubTableRow)