import React from 'react'
import { Paper, Table, TableBody, TableRow, TableCell } from '@material-ui/core'
import VQTableHead from '../table/VQTableHead'
import axios from 'axios'
import queryString from 'query-string'
import VQHubViewTestResultButton from '../buttons/VQHubViewTestResultButton';


const styles = { tr: { height: '35px' }, table: { width: '100%' } }

class VQSingleHubTestTable extends React.Component {

    constructor(props) { super(props); this.state = { data: { result: [] } } }
    componentDidMount() { this.loadData() }

    loadData = () => {
        console.log(this.props.id)
        axios.get('/api/thing/test/find/all/' + this.props.id + '/1').then(res => { this.setState({ data: res.data }) })
    }


    render() {
        return (
            
                <Table style={styles.table}>
                    <VQTableHead head={[
                        'Tested on',
                        'Tested By',
                        'Comment',
                        'View'
                    ]} />
                    <TableBody>
                        {this.state.data.result.map((e, index) => (
                            <TableRow key={index} style={styles.tr}>
                                <TableCell>{e.testedDateTime}</TableCell>
                                <TableCell>{e.testedBy}</TableCell>
                                <TableCell>{e.comment}</TableCell>
                                <TableCell><VQHubViewTestResultButton id={e.id} vqSerial={e.vqSerial}/></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
           
        )
    }
}

export default VQSingleHubTestTable