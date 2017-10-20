import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskList from './TaskList/TaskList';
import getCategories from '../utils/getCategories';
import './BuildSkillTree.css';


class BuildSkillTree extends Component {
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
    const {title, subtitle, image, tasks} = this.props.build;
    return (
      <div className="BuildSkillTree columns">
        <div className="column">
          <div className="card ">
            <div className="card-content meta is-flex">
              <div className="image"><img src={require(`../images/builds/${image}.svg`)} alt={title}/></div>
              <div className="titling">
                <h5 className="title is-5">{title}</h5>
                <h2 className="subtitle">{subtitle}</h2>
              </div>
            </div>
            <div className="card-content">
              <TaskList build={this.props.build} categories={getCategories(tasks)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {activeBuild: state.activeBuild}
}

export default connect(mapStateToProps)(BuildSkillTree);
