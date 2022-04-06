const express = require("express");
const app = express();
const port = 5001;
app.use(express.json());
const TrackerGG = require("@notiixd/trackergg");
const { default: axios } = require("axios");
const tapi = new TrackerGG({ api_key: "11a808bc-f421-4aef-a01d-d508dd8a1a34" });

app.listen(port, () => {
	console.log(`Server Running on port ${port}`);
});

app.get("/callAPI", (req, res) => {
	const platform = req.query.platform;
	const username = req.query.username;

	(async () => {
		const data = await tapi.apex(platform, username);
		// console.log(data.data.segments);
		const segments = data.data.segments;
		const object = [];
		for (let segment of segments) {
			const stats = segment.stats;
			const isEmpty = Object.keys(stats).length === 0;
			if (!isEmpty) {
				object.push({
					metadata: segment.metadata,
					stats: segment.stats,
					type: segment.type,
				});
			}
		}
		res.send({ object });
	})(0);
});
