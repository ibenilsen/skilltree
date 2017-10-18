import React, {Component} from 'react';
import TaskList from './TaskList';
import BuildProgressCard from './BuildProgressCard';
import './Overview.css';
import build1 from '../images/builds/13.svg';
import build2 from '../images/builds/25.svg';
import build3 from '../images/builds/12.svg';

class Overview extends Component {
  render() {

    return (
      <div className="Overview">
        <div className="buildMenu">
          <div className="buildItem">
            <img src={build1} />
            <progress class="progress is-small is-success" value="60" max="100">60%</progress>

          </div>
          <div className="buildItem ">
            <img src={build2} />
            <progress class="progress is-small is-success" value="20" max="100">20%</progress>

          </div>
          <div className="buildItem active">
            <img src={build3} />
            <progress class="progress is-small is-success" value="90" max="100">90%</progress>

          </div>
          <a class="button">
            <span>New Build</span>
          </a>


        </div>
        <BuildProgressCard />

        <div className="card">
          <div className="card-content">
            <h5 className="title is-5">Quest Log</h5>
            <TaskList />
          </div>
        </div>
      </div>

    )
  }
}

export default Overview;
