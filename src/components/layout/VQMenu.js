import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import { Link } from 'react-router-dom'

class VQMenu extends React.Component {
    render() {
        return (
            <List>
                <ListItem>
                    <ListItemIcon><DashboardIcon /></ListItemIcon><Link to={"/"}><ListItemText primary="Hubs" /></Link>
                </ListItem>
            </List>
        )
    }
}

export default VQMenu