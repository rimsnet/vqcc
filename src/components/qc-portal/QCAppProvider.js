import React from 'react'
import QCAppContext from '../../vqcontexts/QCAppContext'
import axios from 'axios'

class QCAppProvider extends React.Component {

    state = {
        /** Variable START */
        networkConnected: false,
        wifiDetected: false,
        zSticDetected: false,
        dongleDetected: false,
        IMEI: '',
        SIMID: '',
        powerSource: 0,
        ledTest: false,
        siren: false,
        speaker: false,
        networkRestbtn: false,
        firmwareRestbtn: false,
        powerSourceCheck: false,
        comment: '',
        /** Variable END */
        startTestBtn: true,

        /*Button START */
        mainTestButton: (id) => (event) => {
            this.setState({
                networkConnected: true,
                wifiDetected: true,
                zSticDetected: true,
                dongleDetected: true,
                IMEI: '56464566545646',
                SIMID: '54366546546',
                powerSource: 10,
                ledTest: true,
                startTestBtn: false
            })
            try {
                axios.post('/api/thing/test/' + id).then(res => { console.log(res) }).catch(err => { console.log(err) })
            } catch (error) {
                console.log(error)
            }
        },
        manualLedTestButtons: (id, eventType) => (event) => {
            switch (eventType) {
                case 'TEST': this.setState({ ledTest: false }); break;
                case 'PASS': this.setState({ ledTest: true }); break;
                case 'FAIL': this.setState({ ledTest: false }); break;
            }
        },
        manualSirenTestButtons: (id, eventType) => (event) => {
            switch (eventType) {
                case 'TEST': this.setState({ siren: false }); break;
                case 'PASS': this.setState({ siren: true }); break;
                case 'FAIL': this.setState({ siren: false }); break;
            }
        },
        manualSpeakerTestButtons: (id, eventType) => (event) => {
            switch (eventType) {
                case 'TEST': this.setState({ speaker: false }); break;
                case 'PASS': this.setState({ speaker: true }); break;
                case 'FAIL': this.setState({ speaker: false }); break;
            }
        },
        manualNetworkRestButton: (id) => (event) => {
            this.setState({ networkRestbtn: true })
        },
        manualFirmwareRestButton: (id) => (event) => {
            this.setState({ firmwareRestbtn: true })
        },
        manualPowerSourceButton: (id) => (event) => {
            this.setState({ powerSourceCheck: true })
        },
        /*Button END */

        commentType: (e) => {
            this.setState({ comment: e.target.value })
        }

    }


    render() {
        return (
            <QCAppContext.Provider value={this.state}>
                {this.props.children}
            </QCAppContext.Provider>
        )
    }
}

export default QCAppProvider