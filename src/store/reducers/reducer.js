export const reducer = (state, action) => {
  switch (action.type) {
    case "addCurrentUser":
      return {...state, currentUser: action.payload};
    case "addUser":
      return {
        ...state,
        usersList: action.payload.newUsers,
        currentUser: action.payload.newUser
      };
    case "logout":
      return {...state, currentUser: null};
    case "changeScore":
      return {...state, currentScore: state.currentScore + action.payload};
    case "clearScore":
      return {...state, currentScore: 0};
    case "updateBest":
      return {
        ...state,
        usersList: action.payload.newUserListBest,
        currentUser: action.payload.newUsersBest
      };
    default:
      return state;
  }
}
