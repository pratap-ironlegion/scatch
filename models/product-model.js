const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/scatch'); // we don't need to connect again if already connected in user-model.js

const productSchema = mongoose.Schema({
    image : String,
    name : String,
    price : Number,
    discount : {
        type : Number,
        default : 0
    },
    bgcolor : String,
    panelcolor : String,
    textcolor : String
});

module.exports = mongoose.model("product", productSchema);