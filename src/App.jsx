import React from "react";
import Nav from "./components/Nav";
import Routing from "./Utils/Routing";
import Footer from "./components/Footer";
import ScrollTop from "./Utils/ScrollTop";

function App() {
  return (
    <div className="bg-zinc-800 flex flex-col text-white  min-h-screen w-full">
      <Nav />
      <span className="flex-1">
        <ScrollTop />

        <Routing />
      </span>
      <Footer />
    </div>
  );
}

export default App;
