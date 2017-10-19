import React, {Component } from 'react';
import build1 from '../images/builds/13.svg';
import build2 from '../images/builds/25.svg';
import build3 from '../images/builds/12.svg';
import './BuildMenu.css';
class BuildMenu extends Component {
  render() {
    return (
      <div className="BuildMenu">
        <div className="menu-label">Select A Build</div>
        <div className="content">
          <div className="BuildCard">
            <div className="card">
              <div className="card-content has-text-centered">
                <img src={build1} />
                <div className="menu-label">Romancer</div>

                <progress className="progress is-small is-success" value="60" max="100">60%</progress>
              </div>
            </div>

          </div>
          <div className="BuildCard ">
            <div className="card">
              <div className="card-content has-text-centered">
                <img src={build2} />
                <div className="menu-label">Instragram Guru</div>

                <progress className="progress is-small is-success" value="20" max="100">20%</progress>
              </div>
            </div>
          </div>
          <div className="BuildCard active">
            <div className="card">
              <div className="card-content has-text-centered">
                <img src={build3} />
                <div className="menu-label">Front End Wizard</div>

                <progress className="progress is-small is-success" value="90" max="100">90%</progress>
              </div>
            </div>
          </div>
          <a className="button">
            <span>New Build</span>
          </a>
        </div>

      </div>
    )
  }
}

export default BuildMenu
