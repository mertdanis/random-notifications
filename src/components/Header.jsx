import React from "react";

import { useData } from "../Context/MainContext";
import { Button } from "@mui/material";

function Header() {
  const { data, dispatch, unreadedNotifications } = useData();

  const notfLength = unreadedNotifications.length;

  return (
    <div className="flex justify-between gap-6">
      <p>
        Notifications <span>{notfLength}</span>
      </p>

      <Button
        onClick={() => {
          dispatch({
            type: "data/readAll",
          });
        }}
      >
        Mark all as read
      </Button>
    </div>
  );
}

export default Header;
