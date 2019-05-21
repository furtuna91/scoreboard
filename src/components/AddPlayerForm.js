import React, { Component } from 'react'

export default class AddPlayerForm extends Component {

    state = {
        value: ''
    };

    handleValueChange = (e) => {
        this.setState( { value: e.target.value } );
    }

    render() {
        
        return (
            <form>
                <input 
                    type="text"
                    value={this.state.value}
                    onChange={this.handleValueChange}
                    placeholder="Enter a player's name">
                </input>
                <input type="submit" value="Add Player"></input>
            </form>
        );
    }
}