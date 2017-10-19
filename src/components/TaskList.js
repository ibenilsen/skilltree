import React, { Component } from 'react';
import TaskListItem from './TaskListItem';

class TaskList extends Component {
  render() {
    return (
      <div className="TaskList">
        <div class="tabs is-small">
          <ul>
            <li class="is-active"><a>All</a></li>
            <li><a>ReactJS</a></li>
            <li><a>Webpack</a></li>
            <li><a>SCSS</a></li>
            <li><a>Node</a></li>
            <li><a>MongoDB</a></li>
            <li><a>JavaScript</a></li>

          </ul>
        </div>
        <div className="menu">
          <TaskListItem taskText={'Read the JS Docs'}/>
          <TaskListItem taskText={'An SCSS Quickstart'} checked={true}/>
          <TaskListItem taskText={'JavaScript: The weird parts'}/>
          <TaskListItem taskText={'MongoDB for Beginners'}/>

        </div>
      </div>

    )
  }
}

export default TaskList;
