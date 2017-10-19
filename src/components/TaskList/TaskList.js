import React, { Component } from 'react';
import TaskListItem from './TaskListItem';

class TaskList extends Component {

  renderTasks() {
    let tasks = [
      {
        title: 'Read the JS Docs',
        subtitle: 'JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.',
        type: 'url',
        url: 'https://www.w3schools.com/js/',
        tags: [
          {name: 'JavaScript', value: '25'}
        ]
      },
      {
        title: 'SCSS Quickstart',
        subtitle: 'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
        type: 'url',
        url: 'http://sass-lang.com/guide',
        tags: [
          {name: 'SCSS', value: '25'}
        ]
      },
      {
        title: 'JavaScript: Understanding the Weird Parts',
        subtitle: 'An advanced JavaScript course for everyone! Scope, closures, prototypes, build your own framework, and more.',
        type: 'url',
        url: 'https://www.udemy.com/understand-javascript/',
        tags: [
          {name: 'JavaScript', value: '50'}
        ]
      },
      {
        title: 'The Complete Developers Guide to MongoDB',
        subtitle: 'Master MongoDB and Mongoose design with a test-driven approach',
        type: 'url',
        url: 'https://www.udemy.com/understand-javascript/',
        tags: [
          {name: 'JavaScript', value: '50'}
        ]
      }
    ]
    return tasks.map( (task) => {
      return <TaskListItem task={task} key={task.title}/>
    })
  }
  render() {

    return (
      <div className="TaskList">
        <div className="tabs is-small">
          <ul>
            <li className="is-active"><a>All</a></li>
            <li><a>ReactJS</a></li>
            <li><a>Webpack</a></li>
            <li><a>SCSS</a></li>
            <li><a>Node</a></li>
            <li><a>MongoDB</a></li>
            <li><a>JavaScript</a></li>

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
