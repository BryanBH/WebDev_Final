import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/landingPage.css";

let platform;
let user;
const Landing = () => {
	const [selects, setSelects] = useState();
	const [username, setUsername] = useState();
	const navigate = useNavigate();

	const handleExports = () => {
		platform = selects;
		user = username;
	};

	const sendToResults = () => {
		navigate("/results", { state: { platform: selects, user: username } });
	};
	return (
		<div className="landing-container">
			<h1 className="landing-title">APEX TRACKER</h1>

			<div className="form-container">
				<table className="landing-table">
					<thread>
						<tr>
							<td className="search">
								<input
									type="text"
									className="search-input"
									placeholder="Search"
									required
									onBeforeInputCapture={(e) =>
										setUsername(e.target.value)
									}
									onChange={(e) =>
										setUsername(e.target.value)
									}
								/>
							</td>
							<td>
								<select
									value={selects}
									onChange={(e) =>
										setSelects(e.target.value)
									}>
									<option>Select platform</option>
									<option value="psn">Playstation</option>
									<option value="xbl">Xbox</option>
									<option value="origin">Origin</option>
								</select>
							</td>
							<td>
								<button
									type="submit"
									className="submitBtn"
									onClick={handleExports()}>
									<a
										href="/results"
										onClick={() => {
											sendToResults();
										}}>
										Search
									</a>
								</button>
							</td>
						</tr>
					</thread>
				</table>
			</div>
		</div>
	);
};

export { platform, user };
export default Landing;
