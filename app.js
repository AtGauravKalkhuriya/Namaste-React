import React from "react";
import ReactDOM from "react-dom/client";
// Your React code goes here
// const heading = React.createElement("h1", {id:"heading"}, "Hello world! from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/*
<div id ="parent">
<div id="child">
<h1>"I am h1 tag"</h1></div>
*/
const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{}, "I am h1 tag"),React.createElement("h2",{}, "I am h2 tag")] ) );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
 