import React, { Component } from 'react'

export default class Stopwatch extends Component {

    state = {
        isRuning: false,
        elapsedTime: 0,
        previousTime: 0
    };

    componentDidMount() {
        this.intervalId = setInterval( () => this.tick(), 100);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    tick = () => {
        if (this.state.isRuning) {
            const now = Date.now();
            this.setState( prevState => ({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
            }));
        }
    }

    handeStopwatch = () => {
        this.setState( prevState => ({
            isRuning: !prevState.isRuning
        }));
        if (!this.setState.isRuning) {
            this.setState( { previousTime: Date.now() } );
        }
    }

    handleReset = () => {
        this.setState({ elapsedTime: 0 });
    }

    render() {
        const seconds = Math.floor(this.state.elapsedTime / 1000);

        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">
                    { seconds }
                </span>
                <button onClick={ this.handeStopwatch }>
                    { this.state.isRuning ? 'Stop' : 'Start' }
                </button> 
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}