import React, { Component } from 'react';
import TaskListItem from './TaskListItem';
import _ from 'lodash';
class TaskList extends Component {
  constructor() {
    super();
    this.state = {activeFilter: ''};
  }
  onTabChange(activeFilter) {
    this.setState({activeFilter});
  }
  renderTabs() {
    return this.props.categories.map((item) => {
      const isActive = item.name === this.state.activeFilter;
      return <li className={isActive ? 'is-active' : ''} key={item.name} onClick={(event) => this.onTabChange(item.name)}><a>{item.name}</a></li>
    })
  }
  renderTasks() {
    let tasks = this.props.build.tasks;
    const activeFilter = this.state.activeFilter;
    if(tasks) {
      if(activeFilter) {
        tasks = _.filter(tasks, function(o) {
          let found = false;
          if(o && o.tags) {
            _.forEach(o.tags, function(tag) {
              if(tag.name === activeFilter) {
                found = true;
              }
            })
          }
          return found;
        });
      }

      return tasks.map( (task) => {
        return <TaskListItem task={task} key={task.url}/>
      })
    }
  }
  render() {
    const filterActive = this.state.activeFilter !== '';
    return (
      <div className="TaskList">
        <div className="tabs is-small is-marginless">
          <ul>
            <li className={this.state.activeFilter ? '' : 'is-active'} onClick={(event) => this.onTabChange('')}><a>All</a></li>
            {this.renderTabs()}
          </ul>
        </div>
        <div className="menu">
          {this.renderTasks()}
        </div>
      </div>

    )
  }
}

export default TaskList;
