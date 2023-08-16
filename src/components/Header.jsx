import { useState } from "react";

function Header({ content, setContent }) {
  const stateKey = content.filter((stateKey) => {
    return stateKey.state === "unread";
  });

  const markasRead = () => {
    const readAll = content.map((key) =>
      key.state === "unread" ? { ...key, state: "read" } : key
    );
    setContent(readAll);
  };

  return (
    <div className="container-header">
      <div className="container-header-left">
        <p className="container-header-left-notf">Notification</p>
        <p className="container-header-left-number">{stateKey.length}</p>
      </div>
      <div>
        <button onClick={markasRead} className="container-header-btn">
          Mark all as read
        </button>
      </div>
    </div>
  );
}

export default Header;
