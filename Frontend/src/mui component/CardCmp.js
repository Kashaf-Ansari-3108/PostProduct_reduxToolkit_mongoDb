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
import ButtonCmp from "./ButtonCmp";
import { putData } from "../store/putProductSlice";
const style2 = {
   border: '2px solid red',
    margin: '10px',
    width:'400px',
    boxShadow: '-3px 0px 5px 12px rgba(235,115,115,0.75)',
    webkitBoxShadow: '-3px 0px 5px 12px rgba(235,115,115,0.75)',
    mozBoxShadow: '-3px 0px 5px 12px rgba(235,115,115,0.75)',
    display:'flex',
    flexDirection:'column',
    gap:5,
   
 
};
const style = {
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 2,
}

export default function CardCmp({ product }) {
  const [editMode, setEditMode] = useState(false);
  const [titleVal, setTitleVal] = useState(product.title);
  const [priceVal, setPriceVal] = useState(product.price);
  const [categoryVal, setCategoryVal] = useState(product.category);
  const dispatch = useDispatch();
  const data = {
    title: titleVal,
    price: priceVal,
    category: categoryVal,
   _id: product._id,
  };
  
  
  const deleteP = (data) => {
    dispatch(deleteData(data));
  };
  
  

  const update = (data) => {
    dispatch(putData(data));
    setEditMode(false);
  };
  return (
    <Card sx={style2}>
      {editMode == false ? (
        <>
         <CardContent>
            <Typography sx={{my:'30px',fontSize:'30px',borderBottom:"2px solid black"}} gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography sx={{my:'15px',fontSize:'20px',borderBottom:"1px solid grey"}} variant="body2" color="text.secondary">
              Price: Rs.{product.price}
            </Typography>
            <Typography sx={{my:'15px',fontSize:'20px',borderBottom:"1px solid grey"}} variant="body2" color="text.secondary">
              Category: {product.category}
            </Typography>
          </CardContent>
          <CardActions>
            
            <ButtonCmp label="Delete" onClick={() => deleteP(product)}/>
            <ButtonCmp label="Edit" onClick={() => setEditMode(true)}/>
             
          </CardActions>
        </>
      ) : (
        <>
          <Card sx={style}>
           
            <InputCmp
              value={titleVal}
              onChange={(e) =>  setTitleVal(e.target.value)}
              label="title"
            />
            <InputCmp
              value={priceVal}
              onChange={(e) => setPriceVal(e.target.value)}
              label="price"
            />
            <SelectCmp
              value={categoryVal}
              onChange={(e) => setCategoryVal(e.target.value)}
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
