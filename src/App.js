import React, { Component} from 'react';
import './App.css';
import {Search} from './../src/components/search/search.component';

class App extends Component {
    
    render(){
    return (
      <div className="App">
          <p>Random contact card</p>
          <Search />
    </div>
    );
    }
  }


  export default App;
