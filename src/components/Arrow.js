import React, { Component } from 'react';

export default class Arrow extends Component {
    
    render() {
        return (
            <div
                className={this.props.arrowClassName}
                onClick={this.props.onClick}>
                ▾
            </div>
        );
    }
};