import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { deleteData } from "../store/deleteProductSlice";
import { useState } from "react";
import InputCmp from "./InputCmp";
import SelectCmp from "./SelectCmp";
import categories from "./categoryOption";
import FileUploadCmp from "../bs component/FileUploadCmp";
import { category, imgSrc, price, title } from "../store/updateValuesSlice";
import ButtonCmp from "./ButtonCmp";
import { putData } from "../store/putProductSlice";
const style = {
  bgcolor: "background.paper",

  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  gap: 1,
};

export default function CardCmp({ product }) {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.updateValues);
  const deleteP = (data) => {
    dispatch(deleteData(data));
  };
  const setTitle = (val) => {
    dispatch(title(val));
  };
  const setPrice = (val) => {
    dispatch(price(val));
  };
  const setCategory = (val) => {
    dispatch(category(val));
  };
  const loadFile = (e) => {
    let src = URL.createObjectURL(e.target.files[0]);
    dispatch(imgSrc(src));
  };
  const data = {
    title: selector.title,
    price: selector.price,
    category: selector.category,
    imgSrc: selector.imgSrc,
    _id: product._id,
  };
  const update = (data) => {
    dispatch(putData(data));
    setEditMode(false);
  };
  return (
    <Card sx={{}}>
      {editMode == false ? (
        <>
          <CardMedia
            component="img"
            alt="item image"
            height="140"
            image={
              product.imageSrc
                ? product.imageSrc
                : "https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000"
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: Rs.{product.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Category: {product.category}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => deleteP(product)} size="small">
              Delete
            </Button>
            <Button onClick={() => setEditMode(true)} size="small">
              Edit
            </Button>
          </CardActions>
        </>
      ) : (
        <>
          <Card sx={style}>
            <FileUploadCmp
              value={selector.imgSrc}
              onChange={(e) => loadFile(e)}
              label="Upload new image of the product"
            />
            <InputCmp
              value={selector.title}
              onChange={(e) => setTitle(e.target.value)}
              label="title"
            />
            <InputCmp
              value={selector.price}
              onChange={(e) => setPrice(e.target.value)}
              label="price"
            />
            <SelectCmp
              value={selector.category}
              onChange={(e) => setCategory(e.target.value)}
              optionObj={categories}
              label="category of the product"
            />
            <ButtonCmp onClick={() => update(data)} label="Done" />
          </Card>
        </>
      )}
    </Card>
  );
}
