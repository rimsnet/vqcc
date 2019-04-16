import React from 'react'
/* import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles' */
import Button from '@material-ui/core/Button'

import './Home.css'

/* const styles = theme => ({
    viewButton: { padding: '0px 8px' },
}) */

class VQHubViewButton extends React.Component {

    handleClick = () => {
       this.props.options.push('/hub/' + this.props.id + '/' + this.props.serial)
    }


    render() {
        /* const { classes } = this.props */
        return (
            <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={this.handleClick}
                className="Button">View</Button>
        )
    }
}

/* VQHubViewButton.propType = {
    classes: PropTypes.object.isRequired
} */

export default /* withStyles(styles) */(VQHubViewButton)