const express = require("express");
const { partials } = require("handlebars");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8000;


app.set("view engine", "hbs")
hbs.registerPartials(`${__dirname}/partials`)
app.use(express.static(`${__dirname}/public`));

app.get("/", (req,res) => {
    res.render("index");
});

app.get("/about", (req,res) => {
    res.render("about");
});

app.get("/weather", (req,res) => {
    res.render("weather");
});

app.get("*", (req,res) => {
    res.render("404");
});

app.listen(port);

