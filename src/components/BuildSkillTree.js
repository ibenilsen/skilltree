import React, { Component } from 'react';
import TaskList from './TaskList/TaskList';
import getCategories from '../utils/getCategories';
import './BuildSkillTree.css';


class BuildSkillTree extends Component {
  render() {
    console.log(this);
    const {title, subtitle, image, tasks} = this.props.build;
    return (
      <div className="BuildSkillTree ">
        <div className="card ">
          <div className="card-content meta is-flex is-align-center">
            <div className="image"><img src={require(`../images/builds/${image}.svg`)} alt={title}/></div>
            <div className="titling">
              <h5 className="title is-5">{title}</h5>
              <h2 className="subtitle">{subtitle}</h2>

            </div>
          </div>
        </div>

        <div className="card ">
          <div className="tabs is-toggle is-fullwidth is-marginless">
            <ul>
              <li className="is-active"><a>Novice</a></li>
              <li><a>Intermediate</a></li>
              <li><a>Expert</a></li>
              <li><a>Guru</a></li>
              <li><a>Master</a></li>
            </ul>
          </div>
          <div className="card-content">
            <TaskList build={this.props.build} categories={getCategories(tasks)}/>
            <div className="button is-light is-fullwidth">Load More...</div>
          </div>
        </div>
      </div>
    )
  }
}
export default BuildSkillTree;
