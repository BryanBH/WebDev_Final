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
				// console.log(response.data);
				const segments = response.data.object;
				const life = segments.shift();
				setLegendStats(segments);
				setLifetimeStats([life.stats]);
			});
	}, []);

	// console.log(lifetimeStats);
	console.log(legendStats);
	// console.log(Object.keys(legendStats))

	return (
		<div className="container">
			<h1>{username} Stats</h1>

			<div className="lifetime-container">
				{lifetimeStats &&
					lifetimeStats.map((object) => {
						const { arenaRankScore, damage, kills, level } = object;
						return (
							<table
								className="lifetime-table"
								style={{ width: "80%"}}>
								<thead>
									<tr>
										<th colSpan="3">Lifetime stats</th>
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
										<th>Damage</th>
										<th>Level</th>
									</tr>
									<tr>
										<td>kills: {kills.displayValue}</td>
										<td>
											Total damage: {damage.displayValue}{" "}
										</td>
										<td>Level: {level.displayValue}</td>
									</tr>
									<tr>
										<td>Top {100 - kills.percentile}%</td>
										<td>Top {100 - damage.percentile}%</td>
										<td>Top {100 - level.percentile}%</td>
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
						const { kills, damage } = legend.stats;
						const ability = Object.entries(stats)[2];
						return (
							<div className="legend">
								<img
									src={metadata.portraitImageUrl}
									alt="legend portrait"
								/>
								{console.log(ability)}
								<table className="legend-stats-table">
									<thead>
										<tr>
											<th>Kills</th>
											<th>Damage</th>
											<th>{ability[1].displayName}</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{kills.displayValue}</td>
											<td>{damage.displayValue}</td>
											<td>{ability[1].displayValue}</td>
										</tr>
										<tr>
											<td>Top {kills.percentile}%</td>
											<td>Top {damage.percentile}%</td>
											<td>
												Top 
												{100 - ability[1].percentile}
											</td>
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
