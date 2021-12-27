const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

// const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
        const camp = new Campground({
            title: 'purple field'})
        await camp.save()
            .then(data => {
                console.log(data)
            }).catch(err => {
                console.log(err.errors.title)
            })
        }

seedDB().then(() => {
    mongoose.connection.close();
})