import React from "react"; // for jsx to work
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";

// render(what we want to render, where it will be rendered)
//ReactDOM.render(<App />, document.getElementById('root'));

//if I want to render in the dom here, in the root id
//but dping this is not a good idea was to lump everything
//making resuable code is the way
// ReactDOM.render(
// 	<ul>
// 		<li></li>
// 		<li></li>
// 		<li></li>
// 	</ul>,
// 	document.getElementById("root")
// );

//return the jsx from the fucntional componet
//making it as a function makes it resuable
// const color = {
// 	color: "green"
// };
//let's put this in app.js instead and render from the root from here

//now it's more resuable, and we can have it anywhere in the code
//ReactDOM.render(MyApp(), document.getElementById("root"));

//even better, dom element grab
ReactDOM.render(<App />, document.getElementById("root"));
//<App it'selft is a componet that holds componets
//check it, can't render two html elements together in jsx
//need to be wrapped/nested wiht divs
//ReactDOM.render(<h1>"render some text"</h1>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
