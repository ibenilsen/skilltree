import React, {Component} from 'react';
import { connect } from 'react-redux';

import BuildProgressCard from '../BuildProgressCard';
import './Overview.css';
import BuildMenu from '../BuildMenu';

class Overview extends Component {
  renderProgressCard() {
    if(this.props.activeBuild) {
      return <BuildProgressCard build={this.props.activeBuild}/>
    }
  }
  render() {
    const onSelect = event => {
      event.preventDefault();
    };
    return (
      <div className="Overview">
        <BuildMenu onSelect={onSelect}/>
        {this.renderProgressCard()}
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {activeBuild: state.activeBuild}
}

export default connect(mapStateToProps)(Overview);
