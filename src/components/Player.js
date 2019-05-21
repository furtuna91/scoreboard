import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Counter from './Counter';

export default class Player extends PureComponent {
    render() {
        console.log(this.props.name + ' rendered');
        
        return (
            <div className="player">
                <span className="player-name">
                    <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>✖</button>
                    { this.props.name }
                </span>
    
                <Counter 
                    score={this.props.score}
                    changeScore={this.props.changeScore} 
                    index={this.props.index}
                />
            </div>
        );
    }
}