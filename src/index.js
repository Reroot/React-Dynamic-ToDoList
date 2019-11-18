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

function MyApp() {
	return (
		<div className="app-bar">
			<ul>
				<p>Hi my name is Artem, my favorite vaction spots are...</p>
				<p>I'm going to be a great painter one day.</p>
				<li>Kiev</li>
				<li>Italy</li>
				<li>Moscow</li>
			</ul>
		</div>
	);
}
//now it's more resuable, and we can have it anywhere in the code
//ReactDOM.render(MyApp(), document.getElementById("root"));

//even better, dom element grab
ReactDOM.render(<MyApp />, document.getElementById("root"));

//check it, can't render two html elements together in jsx
//need to be wrapped/nested wiht divs
//ReactDOM.render(<h1>"render some text"</h1>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
