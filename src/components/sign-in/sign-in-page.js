import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authActions } from '../../auth';


const SignInPage = ({signInWithGithub, signInWithGoogle, signInWithTwitter}) => {
  return (
    <div className="columns">
      <div className="column is-12">
        <h1 className="title is-4">Sign in</h1>
        {/* <div className="button" onClick={signInWithGithub}>GitHub</div> */}
        <div className="button" onClick={signInWithGoogle}>Google</div>
        {/* <div className="button" onClick={signInWithTwitter}>Twitter</div> */}
      </div>
    </div>
  );
};


//=====================================
//  CONNECT
//-------------------------------------

const mapDispatchToProps = {
  signInWithGithub: authActions.signInWithGithub,
  signInWithGoogle: authActions.signInWithGoogle,
  signInWithTwitter: authActions.signInWithTwitter
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SignInPage)
);
