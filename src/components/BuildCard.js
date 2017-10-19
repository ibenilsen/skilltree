import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectActiveBuild } from '../actions/index';
import { bindActionCreators } from 'redux';

class BuildCard extends Component {
  render() {
    const {title, progress, image, id} = this.props.build;
    const onClick = event => {
      event.preventDefault();
      this.props.selectActiveBuild(this.props.build);
    };
    let isActiveBuild = false;

    if(this.props.activeBuild && this.props.activeBuild.id) {
      isActiveBuild = id === this.props.activeBuild.id;
    }
    return (
      <div className={`BuildCard ${isActiveBuild ? 'active' : ''}`} onClick={onClick}>
        <div className="card">
          <div className="card-content has-text-centered">
            <img src={require(`../images/builds/${image}.svg`)} />
            <div className="menu-label">{title}</div>

            <progress className="progress is-small is-success" value={progress} max="100">{progress}%</progress>
          </div>
        </div>

      </div>
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
