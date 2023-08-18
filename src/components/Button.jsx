import React from "react";

function Buttons({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default Buttons;
