import React from "react";

import { useData } from "../Context/MainContext";
import { Button } from "@mui/material";

function Header() {
  const { data, dispatch, unreadedNotifications, importantNotifications } =
    useData();

  const notfLength = unreadedNotifications.length;
  const dataLength = data.length;
  const importantLength = importantNotifications.length;
  return (
    <div className="flex justify-between gap-6 bg-gray-300 pl-6">
      <div className="flex flex-col gap-3 ">
        <h2>Summary</h2>
        <p>
          total notification is {dataLength}. you got {notfLength} unreaded
          notification and {importantLength} marked as important!
        </p>
      </div>

      {notfLength ? (
        <Button
          onClick={() => {
            dispatch({
              type: "data/readAll",
            });
          }}
        >
          Mark all as read
        </Button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
