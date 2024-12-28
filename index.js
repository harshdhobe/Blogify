const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/blogify').then((e) => console.log('mongodb connected'));

const userRoutes = require("./routes/user");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.use("/user", userRoutes);

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`)
});