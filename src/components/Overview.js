import React, {Component} from 'react';
import TaskList from './TaskList';
import BuildProgressCard from './BuildProgressCard';
import './Overview.css';
import BuildMenu from './BuildMenu';

class Overview extends Component {
  render() {

    return (
      <div className="Overview">
        <BuildMenu />
        <BuildProgressCard />

        <div className="card">
          <div className="card-content">
            <h5 className="menu-label">Quest Log</h5>
            <TaskList />
          </div>
        </div>
      </div>

    )
  }
}

export default Overview;
