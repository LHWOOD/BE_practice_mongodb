const db = require("../config/connection");
const User = require("../models/user");
const userSeeds = require("./userSeeds.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});

    await User.create(userSeeds);

    console.log("seeding complete!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
