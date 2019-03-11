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
                <TableCell>{data.vqSerial}</TableCell>
                <TableCell>{data.status}</TableCell>
                <TableCell>{data.factoryTestStatus}</TableCell>
                <TableCell>{data.createdDateTime}</TableCell>
                <TableCell>{data.updatedDateTime}</TableCell>
                <TableCell>Dushan</TableCell>
                <TableCell> <VQHubIdentifyButton id={data.serial} /> </TableCell>
                <TableCell><VQHubViewButton id={data.serial} /></TableCell>
            </TableRow>
        )
    }
}

export default VQHubTableRow