import { useReducer } from "react";
import { Context } from "./Context/Context";

const initialState = {
  name: "",
  data: [],
  loading: true,
  searchTerm: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "firstName":
      return {
        ...state,
        name: action.value,
      };
    case "Data":
      return {
        ...state,
        data: action.value,
      };
    case "loading":
      return {
        ...state,
        loading: false,
      };
    case "search": {
      return {
        ...state,
        searchTerm: action.value,
      };
    }
    default:
      return state;
  }
};

const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
