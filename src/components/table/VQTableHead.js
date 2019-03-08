import React from 'react'
import { TableHead, TableRow, TableCell } from '@material-ui/core'

class VQTableHead extends React.Component {
    render() {
        return (
            <TableHead>
                <TableRow>
                    {this.props.head.map((e,index) => (<TableCell key={index}>{e}</TableCell>))}
                </TableRow>
            </TableHead>
        )
    }
}

export default VQTableHead