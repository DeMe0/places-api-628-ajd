// Get environmental variables
require("dotenv").config();

// get PORT from env variables
const PORT = process.env.PORT

// import dependencies
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

// import database connection
const mongoose = require("./db/connection")

// create express application object
const app = express();

// set up middleware
app.use(cors()) // adds cors headers
app.use(express.json()) // parses JSON bodies and adds them to req.body
app.use(morgan("tiny"))

// import people router
const placesRouter = require('./controllers/Place')

// routes and routes
app.get("/", (req, res) => res.send("Server is Working")) // the route to test the server
app.use("/places", placesRouter) // send all '/places' to the placesRouter

// Server listener
app.listen(PORT, () => console.log(`Listening on ${PORT}`))