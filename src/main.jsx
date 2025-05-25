import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter  } from "react-router-dom";
import App from "./App"; 
// import './index.css';  // yeh line honi chahiye
// TailwindCSS included yahan

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <HashRouter>
      <App />
    </HashRouter>
    {/* <BrowserRouter basename="/Kedar-online-games/"> {/* 👈 basename added */}
      {/* <App /> */}
    {/* </BrowserRouter> */} */
  </React.StrictMode>
);
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
