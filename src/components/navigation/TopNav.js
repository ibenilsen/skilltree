import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TopNav extends Component {
  render() {
    return (
      <div className="topNav">
        <nav className="navbar is-link" role="navigation" aria-label="main navigation">
          <div className="navbar-menu width-constraint">
            <div className="navbar-start"><div className="navbar-item logo">SkillTree</div></div>
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
                <Link to={`/`} className="navbar-item">Dashboard</Link>
                <Link to={`/builds`} className="navbar-item">Explore Builds</Link>
                <Link to={`/hall`} className="navbar-item">Hall of Fame</Link>
                <Link to={`/tournaments`} className="navbar-item">Tournaments</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default TopNav;
