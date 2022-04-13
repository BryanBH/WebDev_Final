import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/aboutUs.css";

const About = () => {
	return (
		<div className="about-container">
			<h1 className="header">About us</h1>
			<h3 className="creators">Creators: </h3>
			<p className="creator-text">
				Bryan Benjumea<br></br>Kevin Diaz<br></br>William Zhu<br></br>
				Alex Sholla
			</p>
		</div>
	);
};
export default About;
