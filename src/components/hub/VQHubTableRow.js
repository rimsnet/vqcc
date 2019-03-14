import React from 'react'
import { TableCell, TableRow } from '@material-ui/core'
import VQHubIdentifyButton from '../buttons/VQHubIdentifyButton'
import VQHubViewButton from '../buttons/VQHubViewButton';
import VQHubQCTestButton from '../buttons/VQHubQCTestButton';

const styles = { tr: { height: '35px' } }

class VQHubTableRow extends React.Component {
    render() {
        const { data } = this.props
        return (
            <TableRow key={data.key} style={styles.tr}>
                <TableCell style={{ maxWidth: 25, minWidth: 25 }}>{data.vqSerial}</TableCell>
                <TableCell style={{ maxWidth: 25, minWidth: 25 }}>{data.status}</TableCell>
                <TableCell style={{ maxWidth: 25, minWidth: 25 }}>{data.factoryTestStatus}</TableCell>
                <TableCell style={{ maxWidth: 25, minWidth: 25 }}>{data.createdDateTime}</TableCell>
                <TableCell style={{ maxWidth: 25, minWidth: 25 }}>{data.updatedDateTime}</TableCell>
                <TableCell style={{ maxWidth: 25, minWidth: 25 }}>Dushan</TableCell>
                <TableCell style={{ maxWidth: 25, minWidth: 25 }}> <VQHubQCTestButton id={data.serial} /> </TableCell>
                <TableCell style={{ maxWidth: 25, minWidth: 25 }}><VQHubViewButton id={data.serial} /></TableCell>
            </TableRow>
        )
    }
}

export default VQHubTableRow