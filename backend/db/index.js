const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://Rajeshmali:1234@cluster0.alfqfb4.mongodb.net/travel');

// Define Schema

// Admin Schema
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

const FlightSchema = new mongoose.Schema({
    airlineName: String,
    flightNumber: String,
    from: String,
    to: String,
    dateAndTime: String,
    tiketPrice: String
});

const HotelSchema = new mongoose.Schema({
    hotelName: String,
    location: String,
    from: String,
    to: String,
    pricePerNight: String
})

const Admin = mongoose.model('admin', AdminSchema);
const User = mongoose.model('user', UserSchema);
const Flight = mongoose.model('flight', FlightSchema);
const Hotel = mongoose.model('hotel', HotelSchema);

module.exports = {
    Admin,
    User,
    Flight,
    Hotel
}


