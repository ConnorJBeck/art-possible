import React, { Component } from 'react';
class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        {
            if (this.state.isToggleOn) {
                if (this.props['function'] === "reload") {
                    location.reload();
                }
               if (this.props['function'] === "preference")
                    console.log("preference");

            }
        }
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.props['text']}
            </button>
        );
    }
}

export default Button;