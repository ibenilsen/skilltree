import React, {Component} from 'react';
import { connect } from 'react-redux';

import BuildSkillTree from '../BuildSkillTree';
import SignIn from '../sign-in';
import './Overview.css';
import BuildMenu from './BuildMenu/BuildMenu';
import { isAuthenticated, getAuth } from '../../auth';

class Overview extends Component {
  renderSignIn() {
    if(!this.props.authenticated) {
      return <SignIn />
    }
  }
  render() {
    console.log(this);
    return (
      <div className="Overview">
        <div className="columns">
          {/* {this.renderSignIn()} */}
          <div className="column is-3">
            <BuildMenu activeBuild={this.props.activeBuild}/>
          </div>
          <div className="column">
            <BuildSkillTree build={this.props.activeBuild}/>
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = function(state) {
  return {
    authenticated: isAuthenticated(state),
    activeBuild: state.activeBuild
  }
};

export default connect(mapStateToProps)(Overview);
