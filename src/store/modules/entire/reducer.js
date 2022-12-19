const initialState = {

}
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'xxx':
      console.log('first');
      break;
    default:
      return state;
  }
}
export default reducer;