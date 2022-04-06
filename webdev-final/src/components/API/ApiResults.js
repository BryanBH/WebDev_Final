import React, { useEffect, useState } from "react";
import axios from "axios";
import { user, platform } from "../../pages/Landing";

const ApiResults = () => {
    const [gamer, setGamer] = useState();
    console.log(user, platform);
    useEffect(() => {
        const options = {
			method: "GET",
			url: "https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/Amartin743/psn",
			headers: {
				"X-RapidAPI-Host": "call-of-duty-modern-warfare.p.rapidapi.com",
				"X-RapidAPI-Key":
					"14798b7b0fmsh795e5ee9759cb95p1d5af5jsn94c670c76eba",
			},
		};

		axios
			.request(options)
			.then(function (response) {
                console.log(response.data);
                const responseUser = response.data.br;
                setGamer(responseUser);
			})
			.catch(function (error) {
				console.error(error);
			});
		// axios
		// 	.get("/getAPI", {
		// 		params: {
		// 			username: user,
		// 			platform: platform,
		// 		},
		// 	})
		// 	.then((response) => {
		// 		const responseUser = response.data.object;
		// 		setGamer(responseUser);
		// 	});
	},[]);

	return <div>ApiResults</div>;
};

export default ApiResults;
