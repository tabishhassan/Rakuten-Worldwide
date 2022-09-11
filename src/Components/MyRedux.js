function myreducer(state, action) {
  let nextState;
  switch (action.type) {
    case "one":
      nextstate = {
        ...state,
        profil: action.value
      };
      return nextState;
    case "two":
      nextstate = {
        ...state,
        profil: action.value
      };
      return nextState;
    default:
      return state;
  }
}
