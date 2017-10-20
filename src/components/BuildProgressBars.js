import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProgressItem.css';
import getCategories from '../utils/getCategories';
// import './BuildProgressBars.css';


class BuildProgressBars extends Component {
  renderProgressBars() {
    const tasks = this.props.build.tasks;
    const result = getCategories(tasks);
    return result.map((item) => {
      let levelLength = item.total / 5;
      let currLevel = Math.floor(item.completed / levelLength);
      // let percentage = ((item.completed - (levelLength * (currLevel)) ) / levelLength) * 100;
      const colors = ['','is-info', 'is-link', 'is-primary', 'is-success'];
      const percentage = (item.completed / item.total) * 100;
      return (
        <div className="ProgressItem" key={item.name}>
          <p className="menu-label">{item.name}</p>
          <span className="nextLevel">{currLevel}</span>
          <progress className={`progress ${colors[currLevel - 1]}`} value={percentage} max="100">{percentage}%</progress>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="BuildProgressBars">
        {this.renderProgressBars()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {activeBuild: state.activeBuild}
}

export default connect(mapStateToProps)(BuildProgressBars);
