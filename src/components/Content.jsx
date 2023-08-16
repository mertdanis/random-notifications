import React, { useEffect } from "react";
import { useState } from "react";
function Content({ content, setContent }) {
  let handleCheck = () => {
    let contentAll = document.querySelectorAll(".container-content");
    contentAll.forEach((div, i) => {
      div.addEventListener("click", () => {
        let readDiv = [...content, (content[i].state = "read")];
        setContent(readDiv);
      });
    });
  };

  return content.map((item) => {
    return (
      <div className="container-content" onClick={handleCheck}>
        <div>
          {item.state == "unread" ? (
            <div className="content content-unread">
              <div className="content-wrap">
                <img src={item.img} className="container-content-img" />
                <div>
                  <div className="content-wrap-2">
                    <p className="content-text">{item.name}</p>{" "}
                    <p className="content-notf">{item.notf}</p>
                  </div>
                  <div>{item.date}</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="content-wrap">
              <img src={item.img} className="container-content-img" />
              <div>
                <div className="content-wrap-2">
                  <p className="content-text">{item.name}</p>{" "}
                  <p className="content-notf">{item.notf}</p>
                </div>
                <p className="content-date">{item.date}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  });
}

export default Content;
