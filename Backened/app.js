const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productModel = require("./models/productSchema");

const app = express();
const PORT = process.env.PORT || 5000;
const BASE_URI =
  "mongodb+srv://admin:admin3108@cluster0.zbhlrew.mongodb.net/ProductDb";

mongoose
  .connect(BASE_URI)
  .then((res) => console.log("mongoDb Connect"))
  .catch((err) => console.log(err, "error"));

app.use(express.json());
app.use(cors());

app.get("/api/sample", (req, res) => {
  res.send("API hit....!");
});

//// GET ALL PRODUCT API /////
app.get("/api/products", (req, res, next) => {
  productModel.find({}, (error, products) => {
    if (error) {
      res.send("error", error);
    } else {
      res.json({
        message: "All Products",
        products,
      });
    }
  });
});

///// PRODUCT CREATE API //////
app.post("/api/product", (req, res, next) => {
  console.log("body", req.body);

  productModel.create(req.body, (error, data) => {
    if (error) {
      res.send("error", error);
    } else {
      res.json({
        message: "Product successfully created",
        data,
      });
    }
  });
});
///// PRODUCT DELETE API //////
app.delete("/api/product", (req, res, next) => {
  const { _id } = req.body;
  productModel.findByIdAndDelete(_id, (error, data) => {
    if (error) {
      res.send("error", error);
    } else {
      res.json({
        message: "Product successfully deleted",
        data,
      });
    }
  });
});
//// PRODUCT UPDATE API ///
app.put("/api/product", (req, res, next) => {
  const { _id, title, price, category, imgSrc } = req.body;
  productModel.findByIdAndUpdate(
    _id,
    { title, price, category, imgSrc },
    { new: true },
    (error, data) => {
      if (error) {
        res.send("error", error);
      } else {
        res.json({
          message: "Product Successfully updated",
          data,
        });
      }
    }
  );
});

app.listen(PORT, () => console.log(`server running on localhost:${PORT}`));
