import React, { createContext, useContext, useEffect, useReducer } from "react";

import axios from "axios";

const MainProvider = createContext();

const initialState = {
  data: [],
  newNotifications: [],
  filter: "all",
};

function MainContext({ children }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "data":
        return {
          ...state,
          data: action.payload,
        };

      case "data/readAll":
        const dataStatus_True = state.data.reduce(
          (prev, cur) => (cur.status = true),
          false
        );

        return {
          ...state,
        };

      case "data/toggleNotification":
        const index = action.payload;

        const readNotification = state.data.map((value, i) => {
          if (i === index) {
            return { ...value, status: !value.status };
          }

          return value;
        });

        return {
          ...state,
          data: readNotification,
        };

      case "data/filter":
        return {
          ...state,
          filter: action.payload,
        };

      default:
        return state;
    }
  };

  const [{ data, filter }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/data/data.json");

        dispatch({
          type: "data",
          payload: res.data.data,
        });
      } catch (error) {
        dispatch({
          type: "error",
        });
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchNewNotification = async () => {
      try {
        const res = await axios("");

        console.log(res);

        dispatch({
          type: "data/newNotification",
          payload: res.data,
        });
      } catch (error) {
        dispatch({
          type: "error",
        });
      }
    };

    fetchNewNotification();
  }, []);

  const unreadedNotifications = data?.filter((content) => {
    if (content.status === false) {
      return content;
    }
  });

  return (
    <MainProvider.Provider
      value={{ data, dispatch, filter, unreadedNotifications }}
    >
      {children}
    </MainProvider.Provider>
  );
}

const useData = () => {
  const context = useContext(MainProvider);
  return context;
};

export { MainContext, useData };
