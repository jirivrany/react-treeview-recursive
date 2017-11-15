import React, { Component } from 'react';
import Arrow from '../components/Arrow';



export default class TreeNode extends Component {

    constructor(props) {
        super(props);
        this.state = {collapsed: false};
    }


    onClick() {
        
      this.setState({
            collapsed: !this.state.collapsed
        });

    }

    render() {
        
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
                <Arrow arrowClassName={arrowClassName} onClick={this.onClick.bind(this)} />
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
};
