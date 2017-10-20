import React, {Component } from 'react';
import { connect } from 'react-redux';
import BuildMenuItem from './BuildMenuItem';

import './BuildMenu.css';
class BuildMenu extends Component {
  renderBuilds() {
    return this.props.builds.map((build) => {
      return <BuildMenuItem build={build} onSelect={this.props.onSelect} key={build.id}/>
    })
  }
  render() {
    return (
      <div className="BuildMenu">
        <aside className="menu">
          <p className="menu-label">Active Builds</p>
          <ul className="menu-list">
            {this.renderBuilds()}
          </ul>
        </aside>
        <ul className="menu-list">
          <li>
            <a className="button is-light">
              <span>New Build</span>
            </a>
          </li>
        </ul>

      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    builds: state.builds
  }
}
export default connect(mapStateToProps)(BuildMenu);
