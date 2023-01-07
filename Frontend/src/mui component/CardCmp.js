import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import InputCmp from "./InputCmp";
import SelectCmp from "./SelectCmp";
import categories from "./typeOption";
import ButtonCmp from "./ButtonCmp";
import { deleteTransport } from "../store/deleteTransportSlice";
import { Controller, useForm } from "react-hook-form";
import types from "./typeOption"
import { updateTransport } from "../store/updateTransportSlice";

const style2 = {
   backgroungColor:"blue",
    margin: '10px',
    width:'400px',
   display:'flex',
   flexDirection:'column',
    gap:5,
    boxShadow:24,
   
 
};
const style = {
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 2,
}

export default function CardCmp({ transport }) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
     transporter: transport.transporter,
     contact:  transport.contact,
     type: transport.type,
     price:transport.price,
     noOfSeats:transport.no_of_seats,
 },
  });
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
 const deleteFunc = (id)=>{
  dispatch(deleteTransport(id));
  }

const onSubmit = (obj)=>{
// console.log(obj);
const objtosend = {
   ...obj,
  _id: transport._id

}
dispatch(updateTransport(objtosend));
setEditMode(false);
  }
  
  
return (
    <Card sx={style2}>
    { editMode == false ?(
     <>
     <CardContent>
        <Typography sx={{my:'30px',fontSize:'20px',borderBottom:"2px solid black"}} gutterBottom variant="h5" component="div">
         Transporter: {transport.transporter} <br/> Contact: {transport.contact} 
        </Typography>
        <Typography sx={{my:'15px',fontSize:'20px',borderBottom:"1px solid grey"}} variant="body2" color="text.secondary">
        {transport.type}
        </Typography>
        <Typography sx={{my:'15px',fontSize:'20px',borderBottom:"1px solid grey"}} variant="body2" color="text.secondary">
          Seats: {transport.no_of_seats}
        </Typography>
        <Typography sx={{my:'15px',fontSize:'20px',borderBottom:"1px solid grey"}} variant="body2" color="text.secondary">
          Price: {transport.price}/km
        </Typography>
       
      </CardContent>
      <CardActions>
        
        <ButtonCmp label="Delete" onClick={()=>deleteFunc(transport._id)}/>
        <ButtonCmp label="Edit" onClick={() => setEditMode(true)}/>
         
      </CardActions>
    </>
   ):(
       
    
         <>
          <Card sx={style}>
          <Controller
                name="transporter"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <InputCmp
                    label="Transporter"
                    onChange={onChange}
                    value={value}
                    type="text"
                  />
                )}
              />
              <Controller
                name="contact"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <InputCmp
                    label="Contact"
                    onChange={onChange}
                    value={value}
                    type="text"
                  />
                )}
              />
              <Controller
                name="type"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <SelectCmp
                    label="Select Type"
                    onChange={onChange}
                    value={value}
                    optionObj = {types}
                  />
                )}
              />
              <Controller
                name="noOfSeats"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <InputCmp
                    label="Number of Seats"
                    onChange={onChange}
                    value={value}
                    type="number"
                  />
                )}
              />
              <Controller
                name="price"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <InputCmp
                    label="Price Per km"
                    onChange={onChange}
                    value={value}
                    type="text"
                  />
                )}
              />
           <ButtonCmp label="Done" onClick={handleSubmit(onSubmit)} />
          </Card>
        </> 
   )}
    </Card>
  );
}
