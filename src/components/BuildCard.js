import React, { Component } from 'react';

class BuildCard extends Component {
  render() {
    return (
      <div className="BuildCard">
        <div className="card">
          <div className="card-content has-text-centered">
            <img src={build1} />
            <div className="menu-label">{this.props.name}</div>

            <progress className="progress is-small is-success" value="60" max="100">60%</progress>
          </div>
        </div>

      </div>
    )
  }
}
