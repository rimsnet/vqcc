import React from 'react'
import { Table, DialogActions, Button, TableHead, TableCell, TableBody, TableRow, Dialog, DialogTitle, DialogContent } from '@material-ui/core';
/* import { Home, BatteryAlert, Security } from '@material-ui/icons/' 
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles' */
import axios from 'axios'

import './Events.css'


/* const EventIcon = (props) => {
    switch (props.itemName) {
        case 'zware_device_zware_server_node35_battery_level': return <BatteryAlert />
        case 'arm_security_system': return <Security />
        case 'zware_device_zware_server_node35_alarm_entry': return <Home />
        default: return ''
    }
} */

const EventDialogBox = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => { setOpen(true); }
    const handleClose = () => { setOpen(false); }

    return (
        <>
            <Button color="primary" variant="contained" onClick={handleClickOpen} className="Button"> view</Button>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description">
                <DialogTitle id="alert-dialog-slide-title">{props.label}</DialogTitle>
                <DialogContent>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Data</TableCell>
                                <TableCell>Value</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key={1}>
                                <TableCell>id</TableCell>
                                <TableCell>{props.id}</TableCell>
                            </TableRow>
                            <TableRow key={2}>
                                <TableCell>dateTime</TableCell>
                                <TableCell>{props.dateTime}</TableCell>
                            </TableRow>
                            <TableRow key={3}>
                                <TableCell>fromStatus</TableCell>
                                <TableCell>{props.fromStatus}</TableCell>
                            </TableRow>
                            <TableRow key={4}>
                                <TableCell>itemName</TableCell>
                                <TableCell>{props.itemName}</TableCell>
                            </TableRow>
                            <TableRow key={5}>
                                <TableCell>label</TableCell>
                                <TableCell>{props.label}</TableCell>
                            </TableRow>
                            <TableRow key={6}>
                                <TableCell>location</TableCell>
                                <TableCell>{props.location}</TableCell>
                            </TableRow>
                            <TableRow key={7}>
                                <TableCell>serial</TableCell>
                                <TableCell>{props.serial}</TableCell>
                            </TableRow>
                            <TableRow key={8}>
                                <TableCell>toStatus</TableCell>
                                <TableCell>{props.toStatus}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary"> Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}


/* const styles = theme => ({
    root: {},
    table: { width: '100%' },
    tableRow: { height: '40px' },
}) */


const tempEvent = [
    {
        id:'5454',
        label:'test',
        toStatus:'test',
        dateTime:'01-05-2019'
    },
    {
        id:'5454',
        label:'test',
        toStatus:'test',
        dateTime:'01-05-2019'
    },
    {
        id:'5454',
        label:'test',
        toStatus:'test',
        dateTime:'01-05-2019'
    },
    {
        id:'5454',
        label:'test',
        toStatus:'test',
        dateTime:'01-05-2019'
    },
    {
        id:'5454',
        label:'test',
        toStatus:'test',
        dateTime:'01-05-2019'
    },
    {
        id:'5454',
        label:'test',
        toStatus:'test',
        dateTime:'01-05-2019'
    },
    {
        id:'5454',
        label:'test',
        toStatus:'test',
        dateTime:'01-05-2019'
    },
    {
        id:'5454',
        label:'test',
        toStatus:'test',
        dateTime:'01-05-2019'
    },
    {
        id:'5454',
        label:'test',
        toStatus:'test',
        dateTime:'01-05-2019'
    },

]


class VQHubSingleDeviceEventsView extends React.Component {

    state = { events: [] }

    componentDidMount() {
        axios.get('/api/thing/event/' + this.props.serial).then(e => {
            //const events = e.data.data
            const events = tempEvent;
            this.setState({ events: (events) ? events : [] })
        })
    }

    componentWillReceiveProps(previousProps) {
        const events = previousProps.server.data.data.events
        this.setState({ events: (events) ? events : [] })
    }

    render() {
        /* const { classes } = this.props */
        const events = this.state.events;
        return (
            <>
                <Table className="Table">
                    <TableHead>
                        <TableRow className="Table-row">
                            <TableCell>Event</TableCell>
                            <TableCell>toStatus</TableCell>
                            <TableCell>dateTime</TableCell>
                            <TableCell className="Table-view">View</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(events.length !== 0) ? events.slice(0, 9).map((e, i) => (
                            <TableRow key={i} className="Table-row">
                                {/*<TableCell><EventIcon itemName={e.itemName} /></TableCell>*/}
                                <TableCell>{e.label}</TableCell>
                                <TableCell>{e.toStatus}</TableCell>
                                <TableCell>{e.dateTime}</TableCell>
                                <TableCell className="Table-view"><EventDialogBox key={i} {...e} /></TableCell>
                            </TableRow>
                        )) :
                            <TableRow key={0}>
                                <TableCell colSpan={4}>0 Records</TableCell>
                            </TableRow>
                        }
                    </TableBody>
                </Table>
            </>
        )
    }
}

/* VQHubSingleDeviceEventsView.protoType = {
    classes: PropTypes.object.isRequired
} */

export default /* withStyles(styles) */ (VQHubSingleDeviceEventsView)