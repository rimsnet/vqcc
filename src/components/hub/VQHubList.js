import React from 'react'
import { Paper, Table, TableBody, TablePagination } from '@material-ui/core'
import VQHubTableRow from './VQHubTableRow'
import VQTableHead from '../table/VQTableHead'
import axios from 'axios';

const table = { width: '100%' }

class VQHubList extends React.Component {

    constructor() { super(); this.state = { data: { result: [] } } }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        axios.get('/api/thing/find/all/1').then(res => { this.setState({ data: res.data }) })
    }

    render() {
        return (
            <Paper style={{ position: 'relative' }} square={true}>
                <Table style={table} >
                    <VQTableHead head={[
                        'Serial Number',
                        'Hub status',
                        'Test status',
                        'Create date',
                        'Last tested date',
                        'Last tested by',
                        'Identify',
                        'View'
                    ]} />
                    <TableBody>
                        {this.state.data.result.map((e, index) => (<VQHubTableRow key={index} data={e} />))}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default VQHubList