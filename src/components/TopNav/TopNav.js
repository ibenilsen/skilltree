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
  renderUser() {
    if(this.props.authenticated) {
      return (
        <div className={this.state.isHovered ? "navbar-item has-dropdown is-active" : "navbar-item has-dropdown"} onMouseEnter={this.handleHover.bind(this)} onMouseLeave={this.handleHover.bind(this)}>
          <a className="navbar-link">Ben Nilsen</a>
          <div className="navbar-dropdown is-right">
            <a className="navbar-item">Settings</a>
            <a className="navbar-item">Support</a>
            <a className="navbar-item">Invite Friends</a>
            <hr className="navbar-divider" />
            <a className="navbar-item" onClick={this.props.signOut}>Sign Out</a>
          </div>
        </div>
      )
    } else {
      return <div className="navbar-start"><Link to="/signin" className="navbar-item">Sign In</Link></div>
    }
  }
  render() {
    console.log(this);
    return (
      <div className="TopNav">
        <nav className="navbar is-link" role="navigation" aria-label="main navigation">
          <div className="navbar-menu width-constraint">
            <div className="navbar-start">
              <Link to={'/'} className="navbar-item logo">SkillTree</Link>
              <div id="navMenuColorprimary-example" className="navbar-menu">
                <div className="navbar-start">
                  <Link to={`/skills`} className="navbar-item">My Skills</Link>

                </div>
              </div>
            </div>
            <div className="navbar-end">
              {this.renderUser()}

            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default TopNav;
