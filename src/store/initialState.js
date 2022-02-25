const usersList = JSON.parse(localStorage.getItem("usersList"));
const currentScore = JSON.parse(localStorage.getItem("currentScore"));
export const initialState = {
  usersList: !!usersList ? usersList : [],
  currentUser: JSON.parse(localStorage.getItem("currentUser")),
  currentScore: !!currentScore ? currentScore : 0
};
