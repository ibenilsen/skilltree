import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectActiveBuild } from '../actions/index';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';

class BuildCard extends Component {
  renderProgress() {
    if(this.props.build.comingsoon) {
      return <h5 className="subtitle is-5">Coming Soon</h5>
    } else {
      const progress = this.props.build.progress;
      return <progress className="progress is-small is-success" value={progress} max="100">{progress}%</progress>
    }
  }
  render() {
    const {title, progress, image, id, comingsoon} = this.props.build;
    const history = this.props.history;
    const onClick = event => {
      if(!comingsoon) {
        this.props.selectActiveBuild(this.props.build);
      } else {
        event.preventDefault()

      }
    };
    let isActiveBuild = false;

    if(this.props.activeBuild && this.props.activeBuild.id) {
      isActiveBuild = id === this.props.activeBuild.id;
    }
    return (
      <Link to="/skills" className={`BuildCard ${isActiveBuild ? 'active' : ''}`} onClick={onClick}>
        <div className="card">
          <div className="card-content has-text-centered">
            <img src={require(`../images/builds/${image}.svg`)} alt={title}/>
            <div className="menu-label line-clamp line-clamp-2 is-justify-center">{title}</div>
            {this.renderProgress()}
          </div>
        </div>
      </Link>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeBuild: state.activeBuild
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectActiveBuild}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BuildCard);
