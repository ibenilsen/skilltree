import React, { Component } from 'react';
import './App.css';
import TopNav from './components/navigation/TopNav';
class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <div className="Primary">
          <div className="width-constraint">
            {this.props.children}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
