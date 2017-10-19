import React, { Component } from 'react';
import { Polar } from 'react-chartjs-2';
import './ProgressItem.css';
class BuildProgressCard extends Component {
  render() {
    const data = {
      labels: ["ReactJS", "Webpack", "SCSS", "Node", "JavaScript", "MongoDB"],
      datasets: [{
        label: 'Weekly XP',
        data: [80, 30, 45, 60, 25, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    };
    const options = {
      responsive: true,
      scales: {
        xAxes: [{
          gridLines: {
            display:false
          }
        }],
        yAxes: [{
          gridLines: {
            display:false
          }
        }]
      }
    }
    return (
      <div className="BuildProgressCard card">
        <div className="card-content">
          <h5 className="title is-5">Full stack wizard</h5>
          <h2 class="subtitle">Master the arts of front end and back end. Become a valuable asset in the valley of silicon.</h2>
          <div className="columns">
            <div className="column">
              <div className="ProgressItem">
                <p className="menu-label">ReactJS</p>
                <span className="nextLevel">6</span>
                <progress class="progress is-primary" value="80" max="100">30%</progress>
              </div>
              <div className="ProgressItem">
                <p className="menu-label">Webpack</p>
                <span className="nextLevel">4</span>
                <progress class="progress is-link" value="30" max="100">30%</progress>
              </div>

              <div className="ProgressItem">
                <p className="menu-label">SCSS</p>
                <span className="nextLevel">3</span>
                <progress class="progress is-info" value="45" max="100">45%</progress>
              </div>

              <div className="ProgressItem">
                <p className="menu-label">Node</p>
                <span className="nextLevel">4</span>
                <progress class="progress is-link" value="60" max="100">60%</progress>
              </div>

              <div className="ProgressItem">
                <p className="menu-label">MongoDB</p>
                <span className="nextLevel">6</span>
                <progress class="progress is-primary" value="25" max="100">75%</progress>
              </div>

              <div className="ProgressItem">
                <p className="menu-label">JavaScript</p>
                <span className="nextLevel">7</span>
                <progress class="progress is-danger" value="40" max="100">90%</progress>
              </div>

            </div>
            <div className="column is-3 center-box flex-column">
                <h1 className="title is-1">6x</h1>
                <h4 className="subtitle menu-label">Daily Progress Streak</h4>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BuildProgressCard;
