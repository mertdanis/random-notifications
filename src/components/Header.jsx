import React from "react";

import { useData } from "../Context/MainContext";

function Header() {
  const { data, dispatch, unreadedNotifications } = useData();

  const notfLength = unreadedNotifications.length;
  const dataLength = data.length;
  return (
    <div className="flex justify-between gap-6  ">
      <div className="flex flex-col gap-3 ">
        <p className="uppercase p-3  ">
          <span className="font-bold">{notfLength}</span> unread notifications
        </p>
      </div>

      {notfLength ? (
        <button
          className="font-semibold transition duration-300 uppercase text-black     p-3  "
          onClick={() => {
            dispatch({
              type: "data/readAll",
            });
          }}
        >
          Mark all as read
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
