const mongoose = require("mongoose");
const schema = mongoose.Schema({
    title:{
        type: String,
    },
    price:{
        type: Number,
    },
    category:{
        type: String,
    },
    imgSrc:{
        type: String,
    }
});

const productModel = mongoose.model("product",schema);
module.exports = productModel; 