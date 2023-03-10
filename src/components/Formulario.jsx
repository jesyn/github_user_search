import React, { useEffect, useReducer } from "react";
import { useQuery } from "react-query";
import { getUser } from "../api/getUser";
import DetaildCard from "./DetailCard";
import EmptyCard from "./EmptyCard";
import History from "./History";

const initialState = {
  search: "",
  searchHistory: [],
};

const formularioReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE-SEARCH":
      return { ...state, search: action.payload };
    case "UPDATE-HISTORY":
      return {
        ...state,
        searchHistory: [...state.searchHistory, state.search],
      };
    default:
      return state;
  }
};

function Formulario() {
  const [state, dispatch] = useReducer(formularioReducer, initialState);
  //console.log(state);

  const handlerSearch = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE-HISTORY" });
    dispatch({
      type: "UPDATE-SEARCH",
      payload: "",
    });
  };

  return (
    <>
      <header>
        <h1>Devfinder</h1>
        <form onSubmit={handlerSearch}>
          <label htmlFor="search">
            <input
              type="text"
              id="search"
              value={state.search}
              name="search"
              placeholder="Search Github username_"
              autoComplete="off"
              onChange={(e) => {
                console.log(e.target.value);
                dispatch({
                  type: "UPDATE-SEARCH",
                  payload: e.target.value,
                });
              }}
            />
            <button type="submit">Search</button>
          </label>
        </form>
      </header>
      <DetaildCard user={state.searchHistory[state.searchHistory.length - 1]} />
      <History users={state.searchHistory} />
    </>
  );
}

export default Formulario;
