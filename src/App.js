import React from "react";
import "./App.css";
import NavBar from "./componets/NavBar";
import ListPop from "./componets/ListPop";
import Footer from "./componets/Footer";

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<NavBar />
				<ListPop />
				<Footer />
			</div>
		</div>
	);
}

export default App;
