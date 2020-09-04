import React from "react";
import "./App.css";
import OptimizedImage from "./components/optimizedImage";

//是非、参考してください
//Image optimization tool: https://squoosh.app/
// Webp supporting detection: https://modernizr.com/download
// Document reference: https://css-tricks.com/using-webp-images/

function App() {
  return (
    <div className="App">
      <OptimizedImage
        src={require("./img/flowers-by-the-lake.webp")}
        fallback={require("./img/flowers-by-the-lake.jpg")}
        alt="flowers by the lake"
      />
      <div className="optimized-background"></div>
    </div>
  );
}

export default App;
