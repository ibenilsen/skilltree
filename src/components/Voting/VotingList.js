import React, { Component } from 'react';
import VotingItem from './VotingItem';
class VotingList extends Component {
  render() {
    return (
      <div className="VotingList">
        <VotingItem />
        <VotingItem />
        <VotingItem />

      </div>
    )
  }
}

export default VotingList;
