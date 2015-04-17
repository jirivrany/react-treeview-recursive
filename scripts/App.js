'use strict';

import React from 'react';
import TreeNode from './components/TreeNode';

import mockData from './mockData';

require('!style!css!./components/tree-view.css');


export default React.createClass({
   
    render: function() {

    
        let tree1 = mockData.mock1.map(function(child) {
                        return <TreeNode key={child.id} data={child}/>;
                    }.bind(this));

        let tree2 = mockData.mock2.map(function(child) {
                        return <TreeNode key={child.id} data={child}/>;
                    }.bind(this));



        return (
          <div className='container'>
          <h2>Category tree</h2>
            <div className='tree-view'>
                {tree1}
            </div>
          <h2>Data tree</h2>  
             <div className='tree-view'>
                {tree2}
            </div>
          </div>  
        );
    }
});