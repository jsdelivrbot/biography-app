export default function(state = null, action) {
  switch(action.type) {
    case 'CELEBRITY_SELECTED':
      return action.payload;
  }
  return state;
}
