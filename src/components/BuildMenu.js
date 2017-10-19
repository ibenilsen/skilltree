import React, {Component } from 'react';
import build1 from '../images/builds/13.svg';
import build2 from '../images/builds/25.svg';
import build3 from '../images/builds/12.svg';

class BuildMenu extends Component {
  render() {
    return (
      <div className="buildMenu">
        <div className="buildItem">
          <img src={build1} />
          <progress className="progress is-small is-success" value="60" max="100">60%</progress>
        </div>
        <div className="buildItem ">
          <img src={build2} />
          <progress className="progress is-small is-success" value="20" max="100">20%</progress>
        </div>
        <div className="buildItem active">
          <img src={build3} />
          <progress className="progress is-small is-success" value="90" max="100">90%</progress>
        </div>
        <a className="button">
          <span>New Build</span>
        </a>
      </div>
    )
  }
}

export default BuildMenu
