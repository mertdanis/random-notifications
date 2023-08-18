import React from "react";

import Button from "./Button";

import { useData } from "../Context/MainContext";

function ContentFilter() {
  const { dispatch } = useData();

  return (
    <div className="flex justify-center items-center gap-3 ">
      <label className="font-bold" htmlFor="filter">
        Filter Notifications:
      </label>

      <select
        className="bg-slate-500 "
        id="filter"
        onChange={(e) => {
          dispatch({
            type: "data/filter",
            payload: e.target.value,
          });
        }}
      >
        <option value="all">All</option>
        <option value="unread">Unread</option>
        <option value="important">Important Notifications</option>
      </select>
    </div>
  );
}

export default ContentFilter;
