
import './App.css';
import React, { Component } from 'react';
import NavBar from './visalgo/components/NavBar';
import SortingVizualizations from "./visalgo/components/SortingVisualization";

class App extends Component {
  constructor(props) {
    super(props);
    this.sortingVisualizations = React.createRef();
  }

  resetArray = () => {
    this.sortingVisualizations.current.resetArray();
  };

  mergeSort = () => {
    this.sortingVisualizations.current.mergeSort();
  };

  render(){

    return (
      <div className="">
      
        <NavBar resetArray={this.resetArray} mergeSort={this.mergeSort} />
        <SortingVizualizations ref={this.sortingVisualizations}/>
      </div>
    );
    }
  
}

export default App;
