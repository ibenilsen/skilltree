import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectActiveBuild } from '../actions/index';
import { bindActionCreators } from 'redux';

class BuildMenuItem extends Component {
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
      <li className={`BuildMenuItem ${isActiveBuild ? 'active' : ''}`} onClick={onClick}>
            <img src={require(`../images/builds/${image}.svg`)} alt={title}/>
            {title}
            {/* <progress className="progress is-small is-success" value={progress} max="100">{progress}%</progress> */}

      </li>
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
export default connect(mapStateToProps, mapDispatchToProps)(BuildMenuItem);
