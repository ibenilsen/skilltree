import React, { Component } from 'react';
import { Polar } from 'react-chartjs-2';
import './ProgressItem.css';
import TaskList from './TaskList/TaskList';
import build3 from '../images/builds/12.svg';
import './BuildProgressCard.css';
class BuildProgressCard extends Component {
  render() {
    return (
      <div className="BuildProgressCard card">
        <div className="card-content meta is-flex">
          <div className="image"><img src={build3} /></div>
          <div className="titling">
            <h5 className="title is-5">Front End Wizard</h5>
            <h2 className="subtitle">Master the arts of front end. Become a valuable asset in the valley of silicon.</h2>
          </div>
        </div>
        <div className="card-content">



          <div className="columns">
            <div className="column is-8 center-box flex-column">
              {/* <h1 className="title is-1">6x</h1>
              <h4 className="subtitle menu-label">Daily Progress Streak</h4> */}
              <TaskList />
            </div>
            <div className="column">

              <div className="ProgressItem">
                <p className="menu-label">ReactJS</p>
                <span className="nextLevel">6</span>
                <progress className="progress is-primary" value="80" max="100">30%</progress>
              </div>
              <div className="ProgressItem">
                <p className="menu-label">Webpack</p>
                <span className="nextLevel">4</span>
                <progress className="progress is-link" value="30" max="100">30%</progress>
              </div>

              <div className="ProgressItem">
                <p className="menu-label">SCSS</p>
                <span className="nextLevel">3</span>
                <progress className="progress is-info" value="45" max="100">45%</progress>
              </div>

              <div className="ProgressItem">
                <p className="menu-label">Node</p>
                <span className="nextLevel">4</span>
                <progress className="progress is-link" value="60" max="100">60%</progress>
              </div>

              <div className="ProgressItem">
                <p className="menu-label">MongoDB</p>
                <span className="nextLevel">6</span>
                <progress className="progress is-primary" value="25" max="100">75%</progress>
              </div>

              <div className="ProgressItem">
                <p className="menu-label">JavaScript</p>
                <span className="nextLevel">7</span>
                <progress className="progress is-danger" value="40" max="100">90%</progress>
              </div>

            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default BuildProgressCard;
