const TrackerGG = require(".");

const tapi = new TrackerGG({api_key: "adf78f9b-e866-4a59-af5c-eeb6b3574241"});
(async () => {
  const data = await tapi.csgo("notii123");
  console.log(data);
})(0);
