import React from 'react'
import QCAppContext from '../../vqcontexts/QCAppContext'

class QCMainTestButton extends React.Component {
    render() {
        const id = this.props.id
        return (
            <div className="green">
                <QCAppContext.Consumer>
                    {
                        (context) => (
                            <div>
                                <button onClick={context.mainTestButton(id)}>START TESTING</button>
                            </div>
                        )
                    }
                </QCAppContext.Consumer>
            </div>
        )
    }
}

export default QCMainTestButton