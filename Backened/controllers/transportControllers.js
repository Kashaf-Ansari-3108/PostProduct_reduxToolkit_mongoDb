const transportModel = require("../models/transportSchema")

const transportControllers = {
    get: (req, res) => {
      transportModel.find({}, (error, transports) => {
          if (error) {
            console.log(error,"error");
            res.status(500).json({
              message:"Something went wrong!"
            })
          } else {
            res.status(200).json({
              message: "Available Transports",
              transports,
            });
          }
        });
      },
      post:(req, res) => {
        const {transporter, contact, type, noOfSeats, price } = req.body;
        if (!transporter || !contact || !type || !noOfSeats || !price ) {
          res.status(500).json({ message: "Requried Fields are missing." });
          return;
        }
        const objToSend = {
          transporter,
          contact,
          type,
          no_of_seats: noOfSeats,
          price
        };
        console.log(objToSend, "objToSend");
      
        transportModel.create(objToSend, (error, data) => {
          if (error) {
            console.log(error, "error");
            res.status(500).json({
              message: "SomeThing Went Wrong!",
            });
          } else {
            res.status(200).json({
              message: "transport successfully added!",
              data: data,
              status: true,
            });
          }
        });
      },
      delete:(req, res) => {
        const { id } = req.params;
        transportModel.findByIdAndDelete(id, (error, data) => {
          if (error) {
            console.log(error, "error");
            res.status(500).json({
              message: "SomeThing Went Wrong!",
            });
          } else {
            res.status(200).json({
              message: "transport successfully deleted!",
              data: data,
              status: true,
            });
          }
        });
      },
      update:(req, res) => {
    const { _id, transporter, contact, type, noOfSeats, price } = req.body;
    transportModel.findByIdAndUpdate(
      _id,
      { transporter, contact, type, no_of_seats:noOfSeats, price },
      { new: true },
      (error, data) => {
        if (error) {
          console.log(error, "error");
            res.status(500).json({
              message: "SomeThing Went Wrong!",
            });
          } else {
            res.status(200).json({
              message: "transport successfully updated!",
              data: data,
              status: true,
            });
        }
      }
    );
  }
      

}
module.exports = transportControllers;