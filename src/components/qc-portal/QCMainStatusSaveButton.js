import React from 'react'
import QCAppContext from '../../vqcontexts/QCAppContext'
import { Button, Dialog, DialogTitle, DialogActions, DialogContent } from '@material-ui/core';

class QCMainStatusSaveButton extends React.Component {

    state = { btnDisabled: true, dialogPopUp: false, saveButton: true }

    conditionTest = (value) => {
        if (value.ledTest && value.siren) { this.setState({ dialogPopUp: true }) } else { alert('save') }
    }

    serialNumberHandler = (e) => {
        const txt = e.target.value;
        (txt.length === 8) ? this.setState({ saveButton: false }) : this.setState({ saveButton: true })
    }

    saveSerialNumber = () => {
        alert('Successfully Saved!');
        this.setState({ dialogPopUp: false })
    }

    render() {
        const id = this.props.id
        const data = this.state
        return (
            <div className="green">
                <QCAppContext.Consumer>
                    {
                        (context) => (
                            <div>
                                <Button variant="contained" color="primary" disabled={context.startTestBtn} onClick={(event) => { context.mainTestButton(id); this.conditionTest(context) }} >SAVE STATUS</Button>
                                <Dialog open={(context.siren && context.ledTest && context.speaker && context.networkRestbtn && context.firmwareRestbtn && context.powerSourceCheck) && this.state.dialogPopUp}>
                                    <DialogTitle>QC-Portal Serial Number</DialogTitle>
                                    <DialogContent>
                                        <input onChange={this.serialNumberHandler} type="text" />
                                    </DialogContent>
                                    <DialogActions>
                                        <button onClick={() => { this.setState({ dialogPopUp: false }) }}>CLOSE</button>
                                        <button disabled={data.saveButton} onClick={this.saveSerialNumber}>SAVE</button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                        )
                    }
                </QCAppContext.Consumer>
            </div>
        )
    }
}

export default QCMainStatusSaveButton