import React from 'react'
import { Paper, Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import NotificationsActive from '@material-ui/icons/NotificationsActive'
import VQHubIdentifyButton from './VQHubIdentifyButton'
import VQHubViewButton from './VQHubViewButton'
import VQHubNotificationButton from './VQHubNotificationButton'
//import axios from 'axios';
//import { connect } from 'react-redux'

//import VQHubTableRow from './VQHubTableRow'
//import VQTableHead from '../table/VQTableHead'
//import { lists } from '../../actions/HUB'

const styles = theme => ({
    root: {},
    table: { width: '100%' },
    tableRow: { height: '30px' },
    paper: { position: 'relative' },
    tableCell: { width: '80px' },
    numberCell: { padding: '5px' },
    viewCell: { width: '80px' }
})

const tempData = [
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454654,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555',
        noti: 1
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454655,
        status: 'connected',
        factoryTestStatus: 'fail',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555',
        noti: 0
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454656,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555',
        noti: 1
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454656,
        status: 'disconnected',
        factoryTestStatus: 'fail',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555',
        noti: 0
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454657,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555',
        noti: 1
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454657,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555',
        noti: 1
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454658,
        status: 'disconnected',
        factoryTestStatus: 'fail',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555',
        noti: 1
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454659,
        status: 'disconnected',
        factoryTestStatus: 'fail',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555',
        noti: 1
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454660,
        status: 'disconnected',
        factoryTestStatus: 'fail',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555',
        noti: 1
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454661,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555',
        noti: 0
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454662,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555',
        noti: 0
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454663,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555',
        noti: 0
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454664,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555',
        noti: 0
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454665,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555',
        noti: 0
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454666,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555',
        noti: 0
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454666,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555',
        noti: 0
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454666,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555',
        noti: 0
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454666,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555',
        noti: 1
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454666,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555',
        noti: 1
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454666,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555',
        noti: 0
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454666,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555',
        noti: 1
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454666,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555', noti: 0
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454666,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555', noti: 1
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454666,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555', noti: 1
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454666,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555', noti: 0
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454666,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555', noti: 0
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454666,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555', noti: 1
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454666,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555', noti: 0
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454666,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555', noti: 1
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454666,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555', noti: 0
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454666,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555', noti: 0
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454666,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555', noti: 0
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454666,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555', noti: 0
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454666,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555', noti: 0
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454666,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555', noti: 0
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454666,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555', noti: 0
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454666,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555', noti: 0
    },
    {
        id: '209c4bbfcfabbdf4c36503278ad155ad',
        vqSerial: 54156454666,
        status: 'connected',
        factoryTestStatus: 'success',
        createdDateTime: '12-10-2018 12:10:10 AM',
        updatedDateTime: '13-10-2018 10:14:05 PM',
        serial: 'AB5464464545555', noti: 0
    }

]


class VQHubList extends React.Component {

    constructor() { super(); this.state = { data: { data: [] } } }

    componentDidMount() {
        //this.props.lists().then((res) => { this.setState({ data: res.list }); console.log(res) });
    }

    render() {
        const { classes } = this.props
        return (
            <Paper className={classes.paper} square={true}>
                <Table padding='none' className={classes.table}>
                    <TableHead>
                        <TableRow className={classes.tableRow}>
                            <TableCell className={classes.numberCell}>No</TableCell>
                            <TableCell>Serial Number</TableCell>
                            <TableCell>Hub status</TableCell>
                            <TableCell>Test status</TableCell>
                            <TableCell>Create date</TableCell>
                            <TableCell>Last tested date</TableCell>
                            <TableCell>Last tested by</TableCell>
                            <TableCell align='center'>Alert</TableCell>
                            <TableCell align='center' className={classes.viewCell}>Identify</TableCell>
                            <TableCell align='center' className={classes.viewCell}>View</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tempData.map((e, index) => (
                            <TableRow key={index} className={classes.tableRow}>
                                <TableCell className={classes.numberCell}>{index + 1}</TableCell>
                                <TableCell>{e.vqSerial}</TableCell>
                                <TableCell>{e.status}</TableCell>
                                <TableCell>{e.factoryTestStatus}</TableCell>
                                <TableCell>{e.createdDateTime}</TableCell>
                                <TableCell>{e.updatedDateTime}</TableCell>
                                <TableCell>Rimzan</TableCell>
                                <TableCell align='center' className={classes.viewButton}><VQHubNotificationButton notification={e.noti} /></TableCell>
                                <TableCell align='center'><VQHubIdentifyButton id={e.id} options={this.props.options} /></TableCell>
                                <TableCell align='center'><VQHubViewButton id={e.id} options={this.props.options} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

VQHubList.protoType = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(VQHubList)