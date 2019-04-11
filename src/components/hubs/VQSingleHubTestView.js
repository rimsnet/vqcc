import React from 'react'
import {  Table, TableBody, TableRow, TableCell, TableHead,Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import axios from 'axios'

import '../../App.css'

import VQHubViewTestResultButton from './VQHubViewTestResultButton';

const styles = theme => ({
    root: {},
    table: { width: '100%' },
    tableCell: { padding: '0px' },
    tableCellView: { width: '70px' },
    tableRow: { height: '30px', }
})

/* const tempData = [
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
        testedBy: 'Kevin De',
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

] */

class VQSingleHubTestView extends React.Component {

    constructor(props) { super(props); this.state = { data: [] } }
    componentDidMount() { this.loadData() }

    loadData = () => {
        axios.get('/api/thing/test/result/serial/' + this.props.serial + '/1').then(res => {             
            this.setState({ data: (res.data.data)?res.data.data:[] })         
        })
    }


    render() {
        const { classes } = this.props
        return (
            <>
                <Table className="Table">
                    <TableHead>
                        <TableRow className="Table-row">
                            <TableCell>Tested on</TableCell>
                            <TableCell>Tested By</TableCell>
                            <TableCell>Comment</TableCell>
                            <TableCell className="Table-view">View</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {//tempData.map((e, index) => (
                           this.state.data.map((e, index) => (
                                <TableRow key={index} className={classes.tableRow}>
                                    <TableCell className="Table-cell">{e.testedDateTime}</TableCell>
                                    <TableCell className="Table-cell">{e.testedBy}</TableCell>
                                    <TableCell className="Table-cell">{e.comment}</TableCell>
                                    <TableCell className="Table-view"><VQHubViewTestResultButton id={e.id} vqSerial={e.vqSerial} /></TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                <Button>Load More</Button>
            </>

        )
    }
}

VQSingleHubTestView.protoType = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(VQSingleHubTestView)