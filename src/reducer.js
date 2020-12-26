export const initialState = {
  movies: [],
  token: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "ADD_TO_MOVIE":
      console.log("action.item: ", action.item);
      return {
        ...state,
        movies: action.item,
      };
    default:
      return state;
  }
};
export default reducer;
