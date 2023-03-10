import { createStore } from "redux";
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "RND":
      return state + action.value;
    default:
      return state;
  }
};
const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({ type: "INC" });
store.dispatch({ type: "INC" });
store.dispatch({ type: "INC" });
store.dispatch({ type: "RND", value: Math.floor(Math.random() * 10) });
store.dispatch({ type: "RND", value: Math.floor(Math.random() * 10) });
store.dispatch({ type: "RND", value: Math.floor(Math.random() * 10) });
