const router = require("express").Router();
const testUser = require("../models/user.js");

router.get("/user", (req, res) => {
  testUser
    .find()
    .then((dbuser) => {
      res.json(dbuser);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
