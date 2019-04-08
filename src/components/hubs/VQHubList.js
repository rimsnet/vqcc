import React from 'react'
import { Paper, Table, TableBody, TableHead, TableRow, TableCell, Button } from '@material-ui/core'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import NotificationsActive from '@material-ui/icons/NotificationsActive'
import VQHubIdentifyButton from './VQHubIdentifyButton'
import VQHubViewButton from './VQHubViewButton'
import VQHubNotificationButton from './VQHubNotificationButton'

import axios from 'axios';
import '../../App.css'


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

    constructor() { super(); this.state = { data: [], start: 1, total: 0, disable: false } }

    componentDidMount() {
        this.loadData();
    }

    loadData = (start = 1) => {
        axios.get('/api/thing/hub/all/' + start).then(res => {
            this.setState({ data: res.data.data, total: res.data.meta.numOfPages })
        })
    }

    loadMore = () => {
        if (this.state.start != this.state.total) {
            var count = this.state.start + 1
            axios.get('/api/thing/hub/all/' + count).then(res => { 
                this.setState({ data: this.state.data.concat(res.data.data), start: count });
                if(this.state.start == this.state.total){this.setState({ disable: true })}
            });
        }
    }

    render() {
        const { classes } = this.props
        return (
            <Paper className={classes.paper} square={true}>
                <Table padding='none' className="Table">
                    <TableHead>
                        <TableRow className="Table-row">
                            <TableCell className="Table-num">No</TableCell>
                            <TableCell>Serial Number</TableCell>
                            <TableCell>Hub status</TableCell>
                            <TableCell>Test status</TableCell>
                            <TableCell>Create date</TableCell>
                            <TableCell>Last tested date</TableCell>
                            <TableCell>Last tested by</TableCell>
                            <TableCell align='center'>Alert</TableCell>
                            <TableCell align='center' className={classes.viewCell}>Identify</TableCell>
                            <TableCell align='center' className="Table-view">View</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.data.map((e, index) => (
                            <TableRow key={index} className="Table-row">
                                <TableCell className={classes.numberCell}>{index + 1}</TableCell>
                                <TableCell>{e.vqSerial}</TableCell>
                                <TableCell>{e.status}</TableCell>
                                <TableCell>{e.factoryTestStatus}</TableCell>
                                <TableCell>{e.createdDateTime}</TableCell>
                                <TableCell>{e.updatedDateTime}</TableCell>
                                <TableCell>Rimzan</TableCell>
                                <TableCell align='center' className={classes.viewButton}><VQHubNotificationButton notification={e.status} /></TableCell>
                                <TableCell align='center'><VQHubIdentifyButton id={e.serial} options={this.props.options} /></TableCell>
                                <TableCell align='center'><VQHubViewButton id={e.id} serial={e.serial} options={this.props.options} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <Button fullWidth onClick={this.loadMore} disabled={this.state.disable}>Load more</Button>

            </Paper>
        )
    }
}

VQHubList.protoType = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(VQHubList)