import React from 'react'
import { TableHead, TableRow, Table, TableCell, TableBody } from '@material-ui/core';
class VQHubDeviceLocationView extends React.Component {
    render() {
        return (
            <>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Location</TableCell>
                            <TableCell>Address</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={1}>
                            <TableCell>Lorem ipsum </TableCell>
                            <TableCell>Lorem ipsum dolor sit amet, te mea quot erat consulatu.</TableCell>
                        </TableRow>
                        <TableRow key={2}>
                            <TableCell>Lorem ipsum </TableCell>
                            <TableCell>Lorem ipsum dolor sit amet, te mea quot erat consulatu.</TableCell>
                        </TableRow>
                        <TableRow key={3}>
                            <TableCell>Lorem ipsum </TableCell>
                            <TableCell>Lorem ipsum dolor sit amet, te mea quot erat consulatu.</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </>
        )
    }
}

export default VQHubDeviceLocationView