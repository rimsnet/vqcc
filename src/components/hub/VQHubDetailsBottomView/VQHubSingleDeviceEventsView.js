import React from 'react'
import { Table, TableHead, TableCell, TableBody, TableRow } from '@material-ui/core';
import { Wallpaper, BatteryAlert } from '@material-ui/icons/'

class VQHubSingleDeviceEventsView extends React.Component {
    render() {
        return (
            <Table padding='none'>
                <TableHead>
                    <TableCell>&nbsp;</TableCell>
                    <TableCell>Event</TableCell>
                    <TableCell>View</TableCell>
                </TableHead>
                <TableBody>
                    <TableRow key={1}>
                        <TableCell><Wallpaper /></TableCell>
                        <TableCell>Front door | 2019-01-02T09:04:49.434Z</TableCell>
                        <TableCell><button>view</button></TableCell>
                    </TableRow>
                    <TableRow  key={2}>
                        <TableCell><BatteryAlert /></TableCell>
                        <TableCell>Front door | 2019-01-02T09:04:49.434Z</TableCell>
                        <TableCell><button>view</button></TableCell>
                    </TableRow>
                    <TableRow  key={3}>
                        <TableCell><BatteryAlert /></TableCell>
                        <TableCell>Front door | 2019-01-02T09:04:49.434Z</TableCell>
                        <TableCell><button>view</button></TableCell>
                    </TableRow>
                    <TableRow  key={4}>
                        <TableCell><Wallpaper /></TableCell>
                        <TableCell>Front door | 2019-01-02T09:04:49.434Z</TableCell>
                        <TableCell><button>view</button></TableCell>
                    </TableRow>
                    <TableRow  key={5}>
                        <TableCell><BatteryAlert /></TableCell>
                        <TableCell>Front door | 2019-01-02T09:04:49.434Z</TableCell>
                        <TableCell><button>view</button></TableCell>
                    </TableRow>
                    <TableRow  key={6}>
                        <TableCell><Wallpaper /></TableCell>
                        <TableCell>Front door | 2019-01-02T09:04:49.434Z</TableCell>
                        <TableCell><button>view</button></TableCell>
                    </TableRow>
                    <TableRow  key={7}>
                        <TableCell><BatteryAlert /></TableCell>
                        <TableCell>Front door | 2019-01-02T09:04:49.434Z</TableCell>
                        <TableCell><button>view</button></TableCell>
                    </TableRow>
                    <TableRow  key={8}>
                        <TableCell><BatteryAlert /></TableCell>
                        <TableCell>Front door | 2019-01-02T09:04:49.434Z</TableCell>
                        <TableCell><button>view</button></TableCell>
                    </TableRow>
                    <TableRow  key={9}>
                        <TableCell><BatteryAlert /></TableCell>
                        <TableCell>Front door | 2019-01-02T09:04:49.434Z</TableCell>
                        <TableCell><button>view</button></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        )
    }
}

export default VQHubSingleDeviceEventsView