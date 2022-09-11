const initialState = {
  profil: "",
  status: false,
  email: "",
  mdp: ""
};

function myreducer(state = initialState, action) {
  let nextstate;
  switch (action.type) {
    case "connect":
      nextstate = {
        ...state,
        profil: action.value,
        status: true,
        email: action.email,
        mdp: action.mdp
      };
      return nextstate;
    case "disconnect":
      nextstate = {
        ...state,
        profil: action.value,
        status: false
      };
      return nextstate;
    default:
      return state;
  }
}

export default myreducer;
