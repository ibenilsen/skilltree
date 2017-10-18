import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="topNav">

          <nav className="navbar is-link" role="navigation" aria-label="main navigation">

            <div className="navbar-menu width-constraint">
              <div className="navbar-start">
                <div className="navbar-item logo">SkillTree</div>
              </div>

              <div className="navbar-end">
                <div className="navbar-item has-dropdown ">
                  <a className="navbar-link">Ben Nilsen</a>

                  <div className="navbar-dropdown is-right">
                    <a className="navbar-item">Settings</a>
                    <a className="navbar-item">Support</a>
                    <a className="navbar-item">Invite Friends</a>
                    <hr className="navbar-divider" />
                    <div className="navbar-item">Sign Out</div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <nav className="navbar">
            <div className="width-constraint content">

              <div id="navMenuColorprimary-example" className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item" href="#">Dashboard</a>
                  <a className="navbar-item" href="#">Explore Builds</a>
                  <a className="navbar-item" href="#">Hall of Fame</a>
                  <a className="navbar-item" href="#">Tournaments</a>

                </div>
              </div>
            </div>

          </nav>
        </div>
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
