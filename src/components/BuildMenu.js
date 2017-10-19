import React, {Component } from 'react';
import { connect } from 'react-redux';
import BuildCard from './BuildCard';

import './BuildMenu.css';
class BuildMenu extends Component {
  renderBuilds() {
    return this.props.builds.map((build) => {
      return <BuildCard build={build} onSelect={this.props.onSelect} key={build.id}/>
    })
  }
  render() {
    return (
      <div className="BuildMenu">
        <div className="menu-label">Select A Build</div>
        <div className="content">
          {this.renderBuilds()}
          <a className="button">
            <span>New Build</span>
          </a>
        </div>

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
