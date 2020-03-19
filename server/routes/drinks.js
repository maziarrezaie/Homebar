const router = require("express").Router();
const MongoClient = require("mongodb").MongoClient;
const url = `mongodb+srv://admin:admin123!@cluster0-r0sxn.mongodb.net/test?retryWrites=true&w=majority`;

router.get("/filter", (req, res, next) => {
  MongoClient.connect(url, { useUnifiedTopology: true }, (error, con) => {
    if (error) throw error;
    const dbo = con.db("likor");

    //To Insert into database
    /* dbo.collection("drinks").insertOne({base: "gin"}, (err, result)=>{
     if(err) throw err;
     console.log(result);
     con.close()
 }) */

    const answers = req.body;

    dbo
      .collection("drinks")
      .find(answers)
      .toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
        con.close();
      });
  });
});

router.post("/add", function(req, res) {
  console.log(req.body);
  MongoClient.connect(url, { useUnifiedTopology: true }, (error, con) => {
    if (error) throw error;
    const dbo = con.db("likor");

    //To Insert into database
    dbo.collection("drinks").insertOne(req.body, (err, result) => {
      if (err) throw err;
      console.log(result);
      con.close();
      res.send({
        msg: "drink successfully inserted",
        result: result
      });
    });
  });
});

module.exports = router;
