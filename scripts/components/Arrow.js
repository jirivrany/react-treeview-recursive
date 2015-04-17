import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <div
                className={this.props.arrowClassName}
                onClick={this.props.onClick}>
                ▾
            </div>
        );
    }
});