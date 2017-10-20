import React, { Component } from 'react';
import TopNav from './navigation/TopNav';
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
