import React, { Component } from 'react';
import Ionicon from 'react-ionicons'


class VotingItem extends Component {
  render() {
    return (
      <div className="VotingItem">
        <div className="columns is-flex is-align-center">
          <div className="votecontrol flex-column is-flex is-align-center is-2">
            <a className="button is-white"><Ionicon icon="ion-ios-arrow-up"  color="#C9C9C9"/></a>
            <span>100</span>
            <a className="button is-white"><Ionicon icon="ion-ios-arrow-down" color="#C9C9C9"/></a>
          </div>
          <div className="column">
              <h4 className="title is-5">Title</h4>
              <h2 className="subtitle is-6">Subtitle</h2>

          </div>

        </div>
      </div>
    )
  }
}

export default VotingItem;
