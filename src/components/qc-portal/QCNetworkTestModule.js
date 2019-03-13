import React from 'react'
import QCAppContext from '../../vqcontexts/QCAppContext'

class QCNetworkTestModule extends React.Component {
    render() {
        return (
            <div>
                <h2>Network</h2>
                <QCAppContext.Consumer>
                    {
                        (context) => (
                            <div>
                                <p><b>LAN Connection Detected : </b> {JSON.stringify(context.networkConnected)}</p>
                                <p><b>WiFi Detected?   :</b> {JSON.stringify(context.wifiDetected)}</p>
                            </div>
                        )
                    }
                </QCAppContext.Consumer>
            </div>
        )
    }
}

export default QCNetworkTestModule