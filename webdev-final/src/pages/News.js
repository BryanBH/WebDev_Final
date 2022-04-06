import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/news.css";

const New = () => {
	const [newsArray, setNewsArray] = useState();

	useEffect(() => {
		var config = {
			method: "get",
			url: "https://api.mozambiquehe.re/news?lang=en-us&auth=L3Ra4wdJfU8HJEbQplJV",
			headers: {},
		};

		axios(config)
			.then(function (response) {
				const news = response.data;
				setNewsArray(news);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	console.log(newsArray);
	return (
		<div className="main-container">
			{newsArray &&
				newsArray.map((object) => {
					const { img, link, short_desc, title } = object;
					return (
						<div className="news-container">
							<div className="news-image">
								<a
									href={link}
									target="_blank"
									rel="noopener noreferrer">
									<img src={img} alt="legend" />
								</a>
							</div>
							<div className="news-text">
								<h2 className="news-title">{title}</h2>
								<p className="news-description">{short_desc}</p>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default New;
