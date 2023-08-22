import Header from "./components/Header";
import Content from "./components/Content";

import ContentFilter from "./components/ContentFilter";

import Audio from "./components/Audio";

import "./style/global.css";

import { useData } from "./Context/MainContext";

function App() {
  return (
    <div className="flex bg-zinc-900   justify-center items-center h-screen w-screen">
      <div className="flex flex-col bg-white text-black p-[2rem] rounded-2xl gap-6 h-5/6	 overflow-y-auto">
        <Audio />
        <Header />
        <Content />
        <ContentFilter />
      </div>
    </div>
  );
}

export default App;
