import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import { Link } from 'react-router-dom'

class VQDefaultMenu extends React.Component {
    render() {
        const data = this.props.optionsData
        return (
            <List>
                {data.menus.map((e,i) => (
                    <ListItem key={i}>
                        <ListItemIcon><DashboardIcon /></ListItemIcon><Link to={e.to} style={{textDecoration:'none'}}><ListItemText primary={e.name} /></Link>
                    </ListItem>
                ))}

            </List>
        )
    }
}

export default VQDefaultMenu