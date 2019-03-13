import React from 'react'
import QCAppContext from '../../vqcontexts/QCAppContext'

class QCUSBTestModule extends React.Component {
    render() {
        return (
            <div>
                <h2>USB</h2>
                <QCAppContext.Consumer>
                    {
                        (context) => (
                            <div>
                                <p><b>Z-Stick Detected?   : </b> {JSON.stringify(context.zSticDetected)}</p>
                                <p><b>4G Dongle Detected?    :</b> {JSON.stringify(context.dongleDetected)}</p>
                                <p><b>IMEI :   </b> {JSON.stringify(context.IMEI)}</p>
                                <p><b>SIM ID :   </b> {JSON.stringify(context.SIMID)}</p>
                                <p><b>Power source : </b> {JSON.stringify(context.powerSource)}</p>                                
                            </div>
                        )
                    }
                </QCAppContext.Consumer>
            </div>
        )
    }
}

export default QCUSBTestModule