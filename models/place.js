// import mongoose
const mongoose = require("mongoose")

// Pull Schema and model from Mongoose
const Schema = mongoose.Schema
const model = mongoose.model

// Create Place Schema
const placeSchema = new Schema(
    {
        name: String,
        img: String,
        description: String,
}, {timestamps: true}
)

// create our model object
const Place = model("Place", placeSchema)

// export our model object
module.exports = Place