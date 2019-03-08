import React from 'react'
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, TablePagination, TableFooter } from '@material-ui/core'
import VQHubTableRow from './VQHubTableRow'
import VQTableHead from '../table/VQTableHead'

const table = { width: '100%' }
const URL = 'https://demo.vqbn.com/rnd/qc-portal-api/index.php/api/API_v2/connected_devices'

class VQHubList extends React.Component {

    constructor() { super(); this.state = { rows: [], totalCount: 0 } }
    componentDidMount() { this.loadData() }

    loadData = () => {
        fetch(URL)
            .then(response => response.json())
            .then(data => this.setState({ rows: data.items, totalCount: data.totalCount, loading: false, }))
            .catch(() => this.setState({ loading: false }));
    }

    paginationHandler = (e) => {
        console.log(e)
    }

    render() {
        return (
            <Paper style={{ position: 'relative' }}>
                <Table>
                    <VQTableHead head={[
                        'NO',
                        'Serial Number',
                        'Hub status',
                        'Test status',
                        'Test status',
                        'Create date',
                        'Last tested date',
                        'Last tested by',
                        'Identify', 'View'
                    ]} />
                    <TableBody>
                        {this.state.rows.map((e, index) => (
                            <VQHubTableRow key={index} data={e} />
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    nextIconButtonProps={{ 'aria-label': 'Next Page' }}
                    component="div"
                    count={16}
                    rowsPerPage={10}
                    page={1}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    onChangePage={this.paginationHandler}
                />
            </Paper>
        )
    }
}

export default VQHubList