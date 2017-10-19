import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProgressItem.css';
import TaskList from './TaskList/TaskList';
import './BuildProgressCard.css';
import _ from 'lodash';

class BuildProgressCard extends Component {
  getCategories() {
    const tasks = this.props.build.tasks;
    let result = {}
    _.forEach(tasks, (task) => {
      _.forEach(task.tags, (tag) => {
        if(result[tag.name]) {
          result[tag.name]['total'] += tag.value
        } else {
          result[tag.name] = {total: tag.value, name: tag.name, completed: 0}
        }
        if(task.completed) {
          if(result[tag.name]) {
            result[tag.name]['completed'] += tag.value
          } else {
            result[tag.name] = {total: tag.value, name: tag.name, completed: tag.value}
          }
        }
      })
    })
    return Object.values(result);
  }
  renderProgressBars() {
    const result = this.getCategories();

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
    const {title, subtitle, image} = this.props.build;
    return (
      <div className="BuildProgressCard card">
        <div className="card-content meta is-flex">
          <div className="image"><img src={require(`../images/builds/${image}.svg`)} alt={title}/></div>
          <div className="titling">
            <h5 className="title is-5">{title}</h5>
            <h2 className="subtitle">{subtitle}</h2>
          </div>
        </div>
        <div className="card-content">
          <div className="columns">
            <div className="column is-8 center-box flex-column">
              <TaskList build={this.props.build} categories={this.getCategories()}/>
            </div>
            <div className="column">
              {this.renderProgressBars()}
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

export default connect(mapStateToProps)(BuildProgressCard);
