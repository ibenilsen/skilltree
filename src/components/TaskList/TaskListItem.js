import React, { Component } from 'react';
import './TaskListItem.css';
import { Link } from 'react-router-dom';
import Ionicon from 'react-ionicons'

class TaskListItem extends Component {
  renderTags() {
    return this.props.task.tags.map((tag) => {
      return (
        <div className="control" key={tag.name}>
          {/* <span className="tag is-rounded is-small">{tag.name}</span> */}

          {/* <div className="tags has-addons">
            <span className="tag is-rounded">{tag.name}</span>
            <span className="tag  is-rounded">+{tag.value}</span>
          </div> */}
        </div>
      )
    })
  }
  render() {
    const {title, subtitle, url, completed, score} = this.props.task;
    return (
      <div className="TaskListItem ">
        <div className="columns">
          <div className="votecontrol flex-column is-flex is-align-center is-2">
            <a className="button is-white"><Ionicon icon="ion-ios-arrow-up"  color="#C9C9C9"/></a>
            <span>{score}</span>
            <a className="button is-white"><Ionicon icon="ion-ios-arrow-down" color="#C9C9C9"/></a>
          </div>
          <div className="column is-justify-center is-flex flex-column">
            <Link to={url} target="_blank">
              <h5 className="title is-6 line-clamp line-clamp-1">{title}</h5>
              <h6 className="subtitle is-6 line-clamp line-clamp-2">{subtitle}</h6>
            </Link>
            <div className="field is-grouped is-grouped-multiline">
              {this.renderTags()}
            </div>
          </div>
          <div className="column is-1 center-box">
            <div className={`check ${completed ? 'checked' : '' }`}>
              <svg  preserveAspectRatio="xMidYMid" width="61" height="52" viewBox="0 0 61 52" className="check-icon">
                <path d="M56.560,-0.010 C37.498,10.892 26.831,26.198 20.617,33.101 C20.617,33.101 5.398,23.373 5.398,23.373 C5.398,23.373 0.010,29.051 0.010,29.051 C0.010,29.051 24.973,51.981 24.973,51.981 C29.501,41.166 42.502,21.583 60.003,6.565 C60.003,6.565 56.560,-0.010 56.560,-0.010 Z" id="path-1" className="cls-2" fillRule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default TaskListItem;
