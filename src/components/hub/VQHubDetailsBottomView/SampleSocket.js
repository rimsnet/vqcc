import React from 'react';


class SampleSocket extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: { }
        };
    }

    componentDidMount() {
        // this is an "echo" websocket service for testing pusposes
        this.connection = new WebSocket('wss://api.hitbtc.com/api/2/ws');
        // listen to onmessage event
        this.connection.onmessage = evt => {
            // add the new message to state
            this.setState({
                messages: JSON.parse(evt.data)
            })
        };

        // for testing: sending a message to the echo service every 2 seconds, 
        // the service sends it right back
        this.connection.onopen = evt => {
            //setInterval(_ => {
            this.connection.send(JSON.stringify({
                "method": "subscribeTicker",
                "params": {
                    "symbol": "ETHBTC"
                },
                "id": 123
            }))
            //}, 2000)
        }

    }


    render() {



        return (
            <div>
                Count: {(typeof this.state.messages.params === 'object') ?
                    <p>
                        ASK : {this.state.messages.params.ask} <br/>
                        BID : {this.state.messages.params.bid} <br/>
                        TIMESTAMP : {this.state.messages.params.timestamp} <br/>
                        VOLUMEQOTE : {this.state.messages.params.volumeQuote} <br/>
                        VOLUME : {this.state.messages.params.volume} <br/>
                    </p>

                    : ''}
            </div>
        );
    }
}

export default SampleSocket;