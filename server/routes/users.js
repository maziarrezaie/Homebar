var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const url = `mongodb+srv://maziar:maziar123@cluster0-qxuag.mongodb.net/test?retryWrites=true&w=majority`;

/* Register User. */
router.post("/add", function(req, res) {
  MongoClient.connect(url, { useUnifiedTopology: true }, (error, con) => {
    if (error) throw error;
    const dbo = con.db("likor");
    const user = req.body;

    dbo.collection("users").insertOne(user, (err, result) => {
      if (err) throw err;
      res.send("User Registered Successfully");
      con.close();
    });
  });
});

/* router.post('/add', function(req, res) {
  console.log(req.body);
}); */

module.exports = router;
