import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TreeNode from './components/TreeNode';
import mockData from './mockData';
import './components/tree-view.css';

class App extends Component {
  render() {

    let tree1 = mockData.mock1.map(function(child) {
                        return <TreeNode key={child.id} data={child}/>;
                    }.bind(this));

    let tree2 = mockData.mock2.map(function(child) {
                        return <TreeNode key={child.id} data={child}/>;
                    }.bind(this));



    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Recursive TreeView demo</h1>
        </header>
        <div className='container'>
          <h2>Category tree </h2>
            <div className='tree-view'>
                {tree1}
            </div>
          <h2>Data tree</h2>  
             <div className='tree-view'>
                {tree2}
            </div>
          </div>  
          
      </div>
    );
  }
}

export default App;
