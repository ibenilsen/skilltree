import React, {Component} from 'react';
import BuildProgressCard from './BuildProgressCard';
import './Overview.css';
import BuildMenu from './BuildMenu';

class Overview extends Component {
  render() {

    return (
      <div className="Overview">
        <BuildMenu />
        <BuildProgressCard />
      </div>

    )
  }
}

export default Overview;
