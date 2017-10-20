import React, { Component } from 'react';
import VotingList from '../Voting/VotingList';

class LeaderBoard extends Component {
  render() {
    return (
      <div className="LeaderBoard">
        <div className="card">
          <div className="card-content">
            <h1 className="title">Hall of Fame</h1>
            <VotingList />
          </div>
        </div>
      </div>
    )
  }
}
export default LeaderBoard;
