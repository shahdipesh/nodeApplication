var express = require("express");

var pool = require("./connection");

var app = express();

app.use(express.json());

app.get("/", function (req, res) {
  pool.query(`SELECT * from facebook;`, function (err, rows) {
      if (err)throw err;
    res.send(rows);
  });
});

app.post("/create/user", function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    pool.query(`INSERT INTO facebook (username,password) VALUES ("${username}","${password}") `, function (err, rows) {
        if (err)throw err;
      res.send(rows);
    });
  });

  app.put("/update/user", function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    pool.query(`UPDATE facebook SET password = "${password}" WHERE username = "${username}"  `, function (err, rows) {
        if (err)throw err;
      res.send(rows);
    });
  });

  app.delete("/delete/user", function (req, res) {
    var username = req.body.username;
    pool.query(`DELETE FROM facebook WHERE username = "${username}"  `, function (err, rows) {
        if (err)throw err;
      res.send(rows);
    });
  });



app.listen(3000, function () {
  console.log("Server started at port 3000");
});
