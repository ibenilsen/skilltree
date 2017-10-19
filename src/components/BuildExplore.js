import React, { Component } from 'react';
import BuildMenu from './BuildMenu';

class BuildExplore extends Component {
  render() {
    return (
      <div className="BuildExplore">
        <div className="card">
          <div className="card-content">
            <h5 className="menu-label">Build Explore</h5>
            <BuildMenu />
          </div>
        </div>
      </div>

    )
  }
}

export default BuildExplore;
