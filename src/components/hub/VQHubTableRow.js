import React from 'react'
import { TableCell, TableRow } from '@material-ui/core'
import VQHubIdentifyButton from '../buttons/VQHubIdentifyButton'
import VQHubViewButton from '../buttons/VQHubViewButton';

const styles = { tr: { height: '35px' } }

class VQHubTableRow extends React.Component {
    render() {
        const { data } = this.props
        return (
            <TableRow key={data.key} style={styles.tr}>
                <TableCell>{data.id}</TableCell>
                <TableCell>{data.serialNumber}</TableCell>
                <TableCell>online</TableCell>
                <TableCell>Pass</TableCell>
                <TableCell>{data.created_on}</TableCell>
                <TableCell>{data.created_on}</TableCell>
                <TableCell>Dushan</TableCell>
                <TableCell><VQHubIdentifyButton id={data.id} /></TableCell>
                <TableCell><VQHubViewButton id={data.id} /></TableCell>
            </TableRow>
        )
    }
}

export default VQHubTableRow