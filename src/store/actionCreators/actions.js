import store from "../store";

export const addCurrentUser = (payload) => {
  const state = store.getState();
  const newCurrentUser = state.usersList.find(item => item.name === payload);
  localStorage.setItem("currentUser", JSON.stringify(newCurrentUser));
  return {type: "addCurrentUser", payload: newCurrentUser};
};
export const addUser = (payload) => {
  const state = store.getState();
  const newUser = {name: payload, best: 0};
  const newUsers = [...state.usersList, newUser];
  localStorage.setItem("usersList", JSON.stringify(newUsers));
  localStorage.setItem("currentUser", JSON.stringify(newUser));
  return {type: "addUser", payload: {newUser, newUsers}};
};
export const logout = (payload) => {
  localStorage.removeItem("currentUser");
  return {type: "logout", payload};
};
export const changeScore = (payload) => {
  const state = store.getState();
  localStorage.setItem("currentScore", JSON.stringify(state.currentScore + payload));
  return {type: "changeScore", payload};
};
export const clearScore = (payload) => {
  localStorage.removeItem("currentScore");
  return {type: "clearScore", payload};
};
export const updateBest = (payload) => {
  const state = store.getState();
  const newUserListBest = state.usersList.map(item => {
    if (item.name === state.currentUser.name) item.best = payload;
    return item;
  })
  const newUsersBest = newUserListBest.filter(item => (item.name === state.currentUser.name))[0];
  localStorage.setItem("usersList", JSON.stringify(newUserListBest));
  localStorage.setItem("currentUser", JSON.stringify(newUsersBest));
  return {type: "updateBest", payload: {newUserListBest, newUsersBest}};
};
