import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../css/Results.css";

const Results = () => {
	const location = useLocation();
	const [legendStats, setLegendStats] = useState();
	const [lifetimeStats, setLifetimeStats] = useState();

	const username = location.state.user;
	const platform = location.state.platform;

	useEffect(() => {
		axios
			.get("/callAPI", {
				params: {
					platform: platform,
					username: username,
				},
			})
			.then((response) => {
				const segments = response.data.object;
				const life = segments.shift();
				setLegendStats(segments);
				setLifetimeStats([life.stats]);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	console.log(legendStats);
	console.log(lifetimeStats);

	return (
		<div className="container">
			<h1 className="user-title">{username} Stats</h1>

			<div className="lifetime-container">
				{lifetimeStats &&
					lifetimeStats.map((object) => {
						const { arenaRankScore, kills, level } = object;
						let damage = null;
						console.log(Object.keys(object));

						if (Object.keys(object).includes("damage")) {
							damage = object.damage;
						}
						return (
							<table
								className="lifetime-table"
								style={{ width: "80%" }}>
								<thead>
									<tr>
										<th colSpan="3">Lifetime Stats</th>
									</tr>
									<tr>
										<th colSpan="3">
											Rank:
											{arenaRankScore.metadata.rankName}
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th>Kills</th>
										{damage ? <th>Damage</th> : null}
										<th>Level</th>
									</tr>
									<tr>
										<td>kills: {kills.displayValue}</td>
										{damage ? (
											<td>
												Total damage:{" "}
												{damage.displayValue}
											</td>
										) : null}
										<td>Level: {level.displayValue}</td>
									</tr>
									<tr>
										<td>Bottom {100 - kills.percentile}%</td>
										{damage ? (
											<td>
												Bottom {100 - damage.percentile}%
											</td>
										) : null}
										<td>Bottom {100 - level.percentile}%</td>
									</tr>
								</tbody>
							</table>
						);
					})}
			</div>

			<div className="legends-container">
				{legendStats &&
					legendStats.map((legend) => {
						const { metadata, stats } = legend;
						const { kills } = stats;
						let damage = null;
						let ability = null;
						if (Object.keys(stats).includes("damage")) {
							damage = stats.damage;
						}
						if (Object.keys(stats).length === 3) {
							ability = Object.entries(stats)[2];
						}

						console.log(ability);
						return (
							<div className="legend">
								<img
									src={metadata.portraitImageUrl}
									alt="legend portrait"
								/>
								{/* {console.log(ability)} */}
								<table className="legend-stats-table" >
									<thead>
										<tr>
											<th>Kills</th>
											{damage ? <th>Damage</th> : null}
											{ability ? (
												<th>
													{ability[1].displayName}
												</th>
											) : null}
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{kills.displayValue}</td>
											{damage ? (
												<td>{damage.displayValue}</td>
											) : null}
											{ability? (<td>{ability[1].displayValue}</td>) : null}
										</tr>
										<tr>
											<td>Bottom {kills.percentile}%</td>
											{damage ? (
												<td>
													Bottom {damage.percentile}%
												</td>
											) : null}
											{ability? ( <td>
												Bottom {""}
												{100 - ability[1].percentile}%
											</td>): null}
										</tr>
									</tbody>
								</table>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Results;
