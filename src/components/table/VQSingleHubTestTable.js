import React from 'react'
import { Paper, Table, TableBody, TableRow, TableCell, TableHead } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import axios from 'axios'

import VQTableHead from '../table/VQTableHead'
import VQHubViewTestResultButton from '../buttons/VQHubViewTestResultButton';

const styles = theme => ({
    root: {},
    table: { width: '100%' },
    tableCell: {},
    tableCellView: { width: '80px' },
    tableRow: { height: '30px' }
})

const tempData = [
    {
        id: 1,
        testedDateTime: '12-10-2018 10:15:30 AM',
        testedBy: 'Rimzan',
        comment: 'All Modules have been updated',
        vqSerial: '54545464885'
    },
    {
        id: 2,
        testedDateTime: '11-10-2018 11:45:10 PM',
        testedBy: 'Insaf',
        comment: 'LED is not working',
        vqSerial: '54545464886'
    },
    {
        id: 3,
        testedDateTime: '13-09-2018 12:42:10 AM',
        testedBy: 'Rimzan',
        comment: 'LED & Siren are not working',
        vqSerial: '54545464887'
    },
    {
        id: 4,
        testedDateTime: '10-10-2018 10:14:30 AM',
        testedBy: 'Rimzan',
        comment: 'Power button damaged',
        vqSerial: '54545464888'
    },
    {
        id: 5,
        testedDateTime: '13-10-2018 02:19:55 AM',
        testedBy: 'Insaf',
        comment: 'Test success',
        vqSerial: '54545464889'
    },
    {
        id: 6,
        testedDateTime: '14-10-2018 10:25:14 PM',
        testedBy: 'Rimzan',
        comment: 'Test totally failed',
        vqSerial: '54545464890'
    },
    {
        id: 7,
        testedDateTime: '15-10-2018 11:10:22 AM',
        testedBy: 'Semira',
        comment: 'test success',
        vqSerial: '54545464891'
    },
    {
        id: 8,
        testedDateTime: '15-10-2018 11:10:22 AM',
        testedBy: 'Kevin De Kuzman',
        comment: 'test success',
        vqSerial: '54545464892'
    },
    {
        id: 9,
        testedDateTime: '15-11-2018 11:10:22 AM',
        testedBy: 'Rimzan',
        comment: 'test success',
        vqSerial: '54545464893'
    },
    {
        id: 10,
        testedDateTime: '16-11-2018 11:10:22 AM',
        testedBy: 'Rimzan',
        comment: 'test success',
        vqSerial: '54545464894'
    }

]

class VQSingleHubTestTable extends React.Component {

    constructor(props) { super(props); this.state = { data: { data: [] } } }
    componentDidMount() { this.loadData() }

    loadData = () => {
        console.log(this.props.id)
        //axios.get('/api/thing/test/find/all/' + this.props.id + '/1').then(res => { this.setState({ data: res.data }) })
    }


    render() {
        const { classes } = this.props
        return (
            <>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow className={classes.tableRow}>
                            <TableCell>Tested on</TableCell>
                            <TableCell>Tested By</TableCell>
                            <TableCell>Comment</TableCell>
                            <TableCell>View</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tempData.map((e, index) => (
                            <TableRow key={index} className={classes.tableRow}>
                                <TableCell style={{ maxWidth: 50 }}> {e.testedDateTime}</TableCell>
                                <TableCell style={{ maxWidth: 50 }}>{e.testedBy}</TableCell>
                                <TableCell style={{ maxWidth: 50 }}>{e.comment}</TableCell>
                                <TableCell className={classes.tableCellView}><VQHubViewTestResultButton id={e.id} vqSerial={e.vqSerial} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </>

        )
    }
}

VQSingleHubTestTable.protoType = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(VQSingleHubTestTable)