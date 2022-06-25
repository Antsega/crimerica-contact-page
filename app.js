const express = require("express");

const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static("public"));

// req = request , res = results
// at page "/" renders contactPage
app.get("/", function(req, res) {
    res.render('contactPage')
})

app.listen(6196, function() {
    console.log("server started on port 6196!!")
})