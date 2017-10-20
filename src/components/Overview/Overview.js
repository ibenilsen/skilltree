import React, {Component} from 'react';
import { connect } from 'react-redux';

import BuildSkillTree from 'BuildSkillTree';
import BuildProgressBars from 'BuildProgressBars';

import './Overview.css';
import BuildMenu from 'BuildMenu';

class Overview extends Component {
  renderSkillTree() {
    if(this.props.activeBuild) {
      return <BuildSkillTree build={this.props.activeBuild}/>
    }
  }
  renderProgressBars() {
    if(this.props.activeBuild) {
      return <BuildProgressBars build={this.props.activeBuild}/>
    }
  }
  render() {
    const onSelect = event => {
      event.preventDefault();
    };
    return (
      <div className="Overview">
        <div className="columns">
          <div className="column is-3">
            <BuildMenu onSelect={onSelect}/>
          </div>
          <div className="column">
            {this.renderSkillTree()}
          </div>
          <div className="column is-3 is-hidden-mobile">
            <div className="card">
              <div className="card-content">
                <div className="menu-label">Build Progress</div>
                {this.renderProgressBars()}
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {activeBuild: state.activeBuild}
}

export default connect(mapStateToProps)(Overview);
