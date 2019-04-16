import React from 'react'
import QCAppContext from '../../vqcontexts/QCAppContext'

class QCManualTestModule extends React.Component {
    render() {
        return (
            <div>
                <h2>USB</h2>
                <QCAppContext.Consumer>
                    {
                        (context) => (
                            <div>
                                <p>
                                    <b>LED   : </b>
                                    <button onClick={context.manualLedTestButtons(this.props.id, 'TEST')}>TEST</button>
                                    <button onClick={context.manualLedTestButtons(this.props.id, 'PASS')}>PASS</button>
                                    <button onClick={context.manualLedTestButtons(this.props.id, 'FAIL')}>FAIL</button>
                                    {JSON.stringify(context.ledTest)}
                                </p>
                                <p>
                                    <b>Siren   : </b>
                                    <button onClick={context.manualSirenTestButtons(this.props.id, 'TEST')}>TEST</button>
                                    <button onClick={context.manualSirenTestButtons(this.props.id, 'PASS')}>PASS</button>
                                    <button onClick={context.manualSirenTestButtons(this.props.id, 'FAIL')}>FAIL</button>
                                    {JSON.stringify(context.siren)}
                                </p>
                                <p>
                                    <b>Speaker   : </b>
                                    <button onClick={context.manualSpeakerTestButtons(this.props.id, 'TEST')}>TEST</button>
                                    <button onClick={context.manualSpeakerTestButtons(this.props.id, 'PASS')}>PASS</button>
                                    <button onClick={context.manualSpeakerTestButtons(this.props.id, 'FAIL')}>FAIL</button>
                                    {JSON.stringify(context.speaker)}
                                </p>
                                <p>
                                    <b>Network Rest Button (top) : </b>
                                    <button onClick={context.manualNetworkRestButton(this.props.id)}>Test</button>
                                    {JSON.stringify(context.networkRestbtn)}
                                </p>
                                <p>
                                    <b>Firmware Reset Button (bottom right) : </b>
                                    <button onClick={context.manualFirmwareRestButton(this.props.id)}>Test</button>
                                    {JSON.stringify(context.firmwareRestbtn)}
                                </p>
                                <p>
                                    <b> Power source  : </b>
                                    <button onClick={context.manualPowerSourceButton(this.props.id)}>Test</button>
                                    {JSON.stringify(context.powerSourceCheck)}
                                </p>
                                <p>
                                    <b>Test Comment : </b>
                                    <input onChange={context.commentType} name="comment" />
                                    {JSON.stringify(context.comment)}
                                </p>
                            </div>
                        )
                    }
                </QCAppContext.Consumer>
            </div>
        )
    }
}

export default QCManualTestModule