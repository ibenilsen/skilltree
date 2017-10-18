import React, { Component } from 'react';
import './TaskListItem.css';

class TaskListItem extends Component {
  render() {
    return (
      <div className="TaskListItem ">
        <div className="columns">

          <div className="column">
            <h5 className="title is-5">{this.props.taskText}</h5>
            <h6 className="subtitle is-6">This is an example description of the task you need to complete</h6>

            <div class="field is-grouped is-grouped-multiline">
              <div class="control">
                <div class="tags has-addons">
                  <span class="tag is-rounded">ReactJS</span>
                  <span class="tag is-primary is-rounded">+20</span>
                </div>
              </div>

              <div class="control">
                <div class="tags has-addons">
                  <span class="tag is-rounded">Node</span>
                  <span class="tag is-link is-rounded">+35</span>
                </div>
              </div>

              <div class="control">
                <div class="tags has-addons">
                  <span class="tag is-rounded">JS</span>
                  <span class="tag is-danger is-rounded">+20</span>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-1 center-box">
            <div class="check">
              <svg  preserveAspectRatio="xMidYMid" width="61" height="52" viewBox="0 0 61 52" class="check-icon">
              <path d="M56.560,-0.010 C37.498,10.892 26.831,26.198 20.617,33.101 C20.617,33.101 5.398,23.373 5.398,23.373 C5.398,23.373 0.010,29.051 0.010,29.051 C0.010,29.051 24.973,51.981 24.973,51.981 C29.501,41.166 42.502,21.583 60.003,6.565 C60.003,6.565 56.560,-0.010 56.560,-0.010 Z" id="path-1" class="cls-2" fill-rule="evenodd"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

  )
}
}

export default TaskListItem;
