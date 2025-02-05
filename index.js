import React from "react";
import ReactDOM from "react-dom/client";

const a=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{id:"gchild"},"welcome to my world")))
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(a);