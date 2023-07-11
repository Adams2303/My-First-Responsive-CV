import React, { Component } from 'react';

class Timer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            watchTime: 0,
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState(prevState => ({
                watchTime: prevState.watchTime + 1,
            }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div style={{ background: 'black', width: '100px', height: '100px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p style={{ color: 'white' }}>{this.state.watchTime}</p>
            </div>
        );
    }
}

export default Timer;