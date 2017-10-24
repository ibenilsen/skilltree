import { combineReducers } from 'redux';
import ActiveBuildReducer from './reducer_active_build';
import BuildDBReducer from './buildDBReducer'
import { authReducer, isAuthenticated } from '../auth';

const rootReducer = combineReducers({
  auth: authReducer,
  activeBuild: ActiveBuildReducer,
  builds: BuildDBReducer
});

export default rootReducer;
