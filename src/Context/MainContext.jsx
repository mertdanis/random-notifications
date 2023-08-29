import React, { createContext, useContext, useEffect, useReducer } from "react";

import notificationSound from "../../public/sound/1.mp3";
import axios from "axios";
import { getNotfSound } from "../components/Audio";

const MainProvider = createContext();

const initialState = {
  data: [],
  filter: "all",
};

function MainContext({ children }) {
  const soundSrc = notificationSound;

  const reducer = (state, action) => {
    switch (action.type) {
      case "data":
        return {
          ...state,
          data: action.payload,
        };

      case "data/readAll":
        const readAll = state.data.reduce(
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

      case "data/add":
        const { title, body, id } = action.payload;

        const newNotification = {
          img: `https://i.pravatar.cc/150?u=${title}`,
          name: title,
          id,
          notificationText: body,
          status: false,
        };
        return {
          ...state,
          data: [newNotification, ...state.data],
        };

      case "data/toggleImportant":
        const importantIndex = state.data[action.payload];

        const importantNotification = state.data.map((value) => {
          if (value === importantIndex) {
            return { ...value, isImportant: !value?.isImportant };
          }

          return value;
        });

        return {
          ...state,
          data: importantNotification,
        };

      case "data/del":
        const delIndex = state.data[action.payload];

        const delNotification = state.data.filter((value) => {
          return value !== delIndex;
        });

        return {
          ...state,
          data: delNotification,
        };

      case "notification/new/text":
        return {
          ...state,
          newNotifications: action.payload,
        };

      default:
        return state;
    }
  };

  const [{ data, filter, isImportant }, dispatch] = useReducer(
    reducer,
    initialState
  );

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

  const randomTime = Math.floor(Math.random() * 300000000);
  useEffect(() => {
    const randomNotf = setTimeout(() => {
      const fetchNewNotification = async () => {
        const random = Math.floor(Math.random() * 100);
        try {
          const res = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
          );

          dispatch({
            type: "data/add",
            payload: res.data[random],
          });
        } catch (error) {
          dispatch({
            type: "fetch/error",
            payload: error,
          });
        }
      };
      fetchNewNotification();
      getNotfSound(soundSrc);
    }, randomTime);

    return () => clearTimeout(randomNotf);
  }, [randomTime]);

  const unreadedNotifications = data?.filter((content) => {
    if (content.status === false) {
      return content;
    }
  });

  const importantNotifications = data?.filter((content) => {
    if (content?.isImportant === true) {
      return content;
    }
  });

  return (
    <MainProvider.Provider
      value={{
        data,
        dispatch,
        filter,
        unreadedNotifications,
        isImportant,
        importantNotifications,
      }}
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
