require("./models/users");
const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//importing routes
const Users = require('./routes/api/usersRoutes');

const app = express()
const port = 4000

// connecting to the DB
mongoose
    .connect("mongodb://127.0.0.1:27017", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        console.log("connected to mongodb")
    ).catch(err => console.log(err))

// to read body requests
app.use(bodyParser.json());

// using the routes set at "./routes"
app.use("/api/users", Users)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))