import "./style/style.css";
import Header from "./components/Header";
import Content from "./components/Content";
import { useEffect, useState } from "react";
// import { uniqueNamesGenerator, Config, names } from "unique-names-generator";
import Audio from "./audio/Audio";

function App({ getNotfSound, soundSrc }) {
  return (
    <div className="container">
      <Header content={content} setContent={setContent} />
      <Content content={content} setContent={setContent} />
      <Audio content={content} />
    </div>
  );
}

export default App;
