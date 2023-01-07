const mongoose = require("mongoose");
const transportSchema = mongoose.Schema({
  transporter: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
 no_of_seats: {
    type: Number,
    required: true,
  },
price:{
    type: Number,
    required: true,
},
  created_on: {
    type: Date,
    default: Date.now,
  },
});

const transportModel = mongoose.model("transport", transportSchema);
module.exports = transportModel;
