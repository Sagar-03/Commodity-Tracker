const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/login");

connect.then(() => {
    console.log("Database connected");
})
.catch(() => {
    console.log("Database connection failed");
});

const loginSchema = new mongoose.Schema({ // Corrected Schema to use capital 'S'
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tln: {
        type: String,
        required: true,
        unique: true
    }
});

const collection = mongoose.model("user", loginSchema); // Corrected model creation

module.exports = collection;
