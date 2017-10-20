import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './TopNav.css';
class TopNav extends Component {
  constructor(props){
    super(props);
    this.state = { isHovered: false };
  }
  handleHover(){
    this.setState({
      isHovered: !this.state.isHovered
    });
  }
  render() {
    return (
      <div className="TopNav">
        <nav className="navbar is-link" role="navigation" aria-label="main navigation">
          <div className="navbar-menu width-constraint">
            <div className="navbar-start">
              <div className="navbar-item logo">SkillTree</div>
              <div id="navMenuColorprimary-example" className="navbar-menu">
                <div className="navbar-start">
                  <Link to={`/`} className="navbar-item">Dashboard</Link>
                  <Link to={`/hall`} className="navbar-item">Hall of Fame</Link>
                  <Link to={`/tournaments`} className="navbar-item">Tournaments</Link>
                </div>
              </div>
            </div>
            <div className="navbar-end">
              <div className={this.state.isHovered ? "navbar-item has-dropdown is-active" : "navbar-item has-dropdown"} onMouseEnter={this.handleHover.bind(this)} onMouseLeave={this.handleHover.bind(this)}>
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
      </div>
    )
  }
}

export default TopNav;
