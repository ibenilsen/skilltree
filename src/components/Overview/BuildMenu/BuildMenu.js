import React, {Component } from 'react';
import { connect } from 'react-redux';
import BuildMenuItem from './BuildMenuItem/BuildMenuItem';

import './BuildMenu.css';
class BuildMenu extends Component {
  renderBuilds() {
    const activeId = this.props.activeBuild.id;
    return this.props.builds.slice(0,3).map((build) => {
      let isActive = build.id === activeId;
      return <BuildMenuItem build={build} isActive={isActive} onSelect={this.props.onSelect} key={build.id}/>
    })
  }
  render() {
    return (
      <div className="BuildMenu">
        <aside className="menu">
          <p className="menu-label">Skills</p>
          <ul className="menu-list">
            {this.renderBuilds()}
          </ul>
        </aside>
        <ul className="menu-list">
          <li>
            <a className="button is-light"><span>New Skill</span></a>
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
