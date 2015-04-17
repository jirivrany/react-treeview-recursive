import React from 'react';
import Arrow from '../components/Arrow';



let TreeNode = React.createClass({

    getInitialState: function() {
        return {collapsed: false};
    },

    onClick: function () {
        
      this.setState({
            collapsed: !this.state.collapsed
        });

    },

    render: function () {
        
        let subtree = null;
        if (this.props.data.children) {
          subtree = this.props.data.children.map(function(child) {
                        return <TreeNode key={child.id} data={child}/>;
                    }.bind(this));
        }

        var arrowClassName = 'tree-node-arrow';
        var containerClassName = 'tree-node-children';
        if (this.state.collapsed) {
            arrowClassName += ' tree-node-arrow-collapsed';
            containerClassName += ' tree-node-children-collapsed';
        }
        
        if (subtree) {
          return (
            <div className="tree-node">
                <Arrow arrowClassName={arrowClassName} onClick={this.onClick} />
                <a data-id={this.props.data.id}>
                    {this.props.data.name}
                </a>
                <div className={containerClassName}>
                    {subtree}
                </div>
            </div>
          );
        }
        else {
          return (
            <div className="tree-node-leaf">
                <a data-id={this.props.data.id}>
                    {this.props.data.name}
                </a>
            </div>
        );
        }

        
    }
});

export default TreeNode;