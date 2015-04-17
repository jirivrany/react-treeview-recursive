'use strict';

import React from 'react';
import TreeNode from './components/TreeNode';
import Debug from 'debug';

import mockData from './mockData';

require('!style!css!./components/tree-view.css');

var debug = Debug('myApp');


export default React.createClass({


   
    render: function() {

        let subtree = mockData.map(function(child) {
                        return <TreeNode key={child.id} data={child}/>;
                    }.bind(this));


        return (
            <div className='tree-view'>
                {subtree}
            </div>
        );
    }
});