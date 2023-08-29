import Header from "./components/Header";
import Content from "./components/Content";

import ContentFilter from "./components/ContentFilter";

import "./style/global.css";

function App() {
  return (
    <div className="flex bg-neutral-950	   justify-center items-center h-screen w-screen">
      <div className="flex flex-col bg-white text-black	   p-6 rounded-2xl gap-6 	 overflow-y-auto">
        <Header />
        <Content />
        <ContentFilter />
      </div>
    </div>
  );
}

export default App;
