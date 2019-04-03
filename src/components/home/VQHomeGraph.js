import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const styles = theme => ({
    root: {}
})

const options = {
    chart: {
        type: 'spline',
        height: '250',
    },
    title: {
        text: 'My chart'
    },
    series: [
        {
            data: [1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6]
        }
    ]
}

class VQHomeGraph extends React.Component {



    render() {
        const { classes } = this.props
        return (
            <Paper className={classes.root}>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </Paper>
        )
    }
}

VQHomeGraph.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(VQHomeGraph)