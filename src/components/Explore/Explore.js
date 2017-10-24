import React, {Component} from 'react';
import { connect } from 'react-redux';
import BuildCard from '../BuildCard';

class Explore extends Component {
  renderBuilds() {
    return this.props.builds.map((build) => {
      return <div className="col-xs-6 col-sm-4"><BuildCard build={build}  key={build.id}/></div>
    })
  }
  render() {
    return (
      <div className="Overview">
        <div className="row" >
          <div className="col-xs-12 has-text-centered" style={{marginBottom:30}}>
            <h1 className="title is-2">Become a master</h1>
            <h2 className="subtitle is-3">Personal development gamified. </h2>
          </div>
          {this.renderBuilds()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    builds: state.builds
  }
}

export default connect(mapStateToProps)(Explore);
