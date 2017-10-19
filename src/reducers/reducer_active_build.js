export default function(state = null, action) {
  switch(action.type) {
    case 'SELECT_BUIlD':
      return action.payload;
    default: break
  }
  return state;
}
