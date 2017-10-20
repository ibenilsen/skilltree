import data from './build_db.json'

export default function(state = data[0], action) {
  switch(action.type) {
    case 'SELECT_BUIlD':
      return action.payload;
    default: break
  }
  return state;
}
