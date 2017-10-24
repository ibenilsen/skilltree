import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectActiveBuild } from '../../../../actions/index';
import { bindActionCreators } from 'redux';

class BuildMenuItem extends Component {
  render() {
    const {title, progress, image, id} = this.props.build;
    const isActive = this.props.isActive;
    const onClick = event => {
      event.preventDefault();
      this.props.selectActiveBuild(this.props.build);
    };
    return (
      <li className={`BuildMenuItem  ${isActive ? 'active' : ''}`} onClick={onClick}>
            <img src={require(`../../../..//images/builds/${image}.svg`)} alt={title}/>
            <div className="titling is-flex is-align-center flex-column">
              {title}
              {/* <progress className="progress is-success" value={progress} max="100">{progress}%</progress> */}
            </div>
      </li>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectActiveBuild}, dispatch)
}
export default connect(null, mapDispatchToProps)(BuildMenuItem);
