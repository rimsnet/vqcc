import React from 'react'
import { TableHead, TableRow, Table, TableCell, TableBody, Dialog, DialogTitle, DialogActions, DialogContent, Button } from '@material-ui/core';
import '../../App.css'

const tempData = [
    {
        id: 1,
        name: 'Lorem ipsum',
        numOfDevices: 1
    }
]

const LocationDialog = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => { setOpen(true); }
    const handleClose = () => { setOpen(false); }

    return (
        <>
            <button onClick={handleClickOpen} className="Button">view</button>
            <Dialog
                fullWidth={true}
                maxWidth='lg'
                aria-labelledby="customized-dialog-title"
                open={open}>
                <DialogTitle id="customized-dialog-title">{props.label}</DialogTitle>
                <DialogContent>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Lable</TableCell>
                                <TableCell>Value</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key={1}>
                                <TableCell>label</TableCell>
                                <TableCell>{props.label}</TableCell>
                            </TableRow>
                            <TableRow key={2}>
                                <TableCell>link</TableCell>
                                <TableCell>{props.link}</TableCell>
                            </TableRow>
                            <TableRow key={3}>
                                <TableCell>name</TableCell>
                                <TableCell>{props.name}</TableCell>
                            </TableRow>
                            <TableRow key={4}>
                                <TableCell>numOfDevices</TableCell>
                                <TableCell>{props.numOfDevices}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <br />
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Model</TableCell>
                                <TableCell>Label</TableCell>
                                <TableCell>thingTypeUID</TableCell>
                                <TableCell>thingUID</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {props.devices.map((e, i) => (
                                <TableRow key={i}>
                                    <TableCell>{e.modelId}</TableCell>
                                    <TableCell>{e.label}</TableCell>
                                    <TableCell>{e.thingTypeUID}</TableCell>
                                    <TableCell>{e.thingUID}</TableCell>
                                    <TableCell><LocationDialogDeviceItem key={i} {...e} /></TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" className="Button"> Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}


const LocationDialogDeviceItem = (props) => {

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => { setOpen(true); }
    const handleClose = () => { setOpen(false); }

    return (
        <>
            <button onClick={handleClickOpen} className="Button">view items</button>
            <Dialog aria-labelledby="customized-dialog-title" open={open} fullWidth={true} maxWidth='lg'>
                <DialogTitle id="customized-dialog-title">Items</DialogTitle>
                <DialogContent>

                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>icon</TableCell>
                                <TableCell>state</TableCell>
                                <TableCell>label</TableCell>
                                <TableCell>name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.items.map((e, i) => (
                                <TableRow key={i}>
                                    <TableCell>{e.icon}</TableCell>
                                    <TableCell>{e.state}</TableCell>
                                    <TableCell>{e.label}</TableCell>
                                    <TableCell>{e.name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </DialogContent>

                <DialogActions><Button onClick={handleClose} color="primary" className="Button">Close</Button></DialogActions>
            </Dialog>
        </>
    )
}

class VQHubDeviceLocationView extends React.Component {

    constructor(props) {
        super(props); this.state = { locations: [], loading: true }
    }

    componentWillReceiveProps(previousProps) {
        const locations = previousProps.server.data.data.locations;
        this.setState({
            locations: (locations) ? locations : [],
            loading: false
        })
    }

    render() {

        const display = (
            <Table padding="dense">
                <TableHead>
                    <TableRow>
                        <TableCell>label</TableCell>
                        <TableCell>numOfDevices</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(this.state.locations.length != 0) ? this.state.locations.map((e, i) => (
                        <TableRow key={i}>
                            <TableCell>{e.label}</TableCell>
                            <TableCell>{e.numOfDevices}</TableCell>
                            <TableCell><LocationDialog key={i} {...e} /></TableCell>
                        </TableRow>
                    )) :
                        <TableRow key={0}>
                            <TableCell colSpan={3} align="center">0 Records</TableCell>
                        </TableRow>
                    }
                </TableBody>
            </Table>
        )

        return (
            <>
                {(!this.state.loading) ? display : 'Loading'}
            </>
        )
    }
}

export default VQHubDeviceLocationView