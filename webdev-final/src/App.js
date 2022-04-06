import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Results from "./pages/Results";
import News from "./pages/News";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/results" element={<Results />} />
				<Route path="/news" element={<News/>}/>
			</Routes>
		</Router>
	);
}

export default App;
