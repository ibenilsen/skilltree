import { combineReducers } from 'redux';
import ActiveBuildReducer from './reducer_active_build';
import BuildDBReducer from './buildDBReducer'

const rootReducer = combineReducers({
  activeBuild: ActiveBuildReducer,
  builds: BuildDBReducer
});

export default rootReducer;
