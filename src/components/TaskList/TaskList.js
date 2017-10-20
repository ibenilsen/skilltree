import React, { Component } from 'react';
import TaskListItem from './TaskListItem';

class TaskList extends Component {
  renderTabs() {
    return this.props.categories.map((item) => {
      return <li key={item.name}><a>{item.name}</a></li>
    })
  }
  renderTasks() {
    const tasks = this.props.build.tasks;
    if(tasks) {
      return tasks.map( (task) => {
        return <TaskListItem task={task} key={task.url}/>
      })
    }

  }
  render() {

    return (
      <div className="TaskList">
        <div className="tabs is-small is-marginless">
          <ul>
            <li className="is-active"><a>All</a></li>
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
