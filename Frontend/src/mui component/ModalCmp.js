import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputCmp from "./InputCmp";
import SelectCmp from "./SelectCmp";
import ButtonCmp from "./ButtonCmp";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import types from "./typeOption";
import { Controller, useForm } from "react-hook-form";
import { addTransport } from "../store/addTransportSlice";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
 
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

export default function ModalCmp() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
     transporter: "",
     contact: "",
     type:"",
     price:"",
     noOfSeats:"",
 },
  });
  const dispatch = useDispatch();
  const onSubmit = (obj) => {
    console.log(obj);
    dispatch(addTransport(obj));
    setOpen(false);
    
  };
 
  

  return (
    <div>
      <Typography variant="h4" sx={{ color: "green" }}>
        Add Transport <AiOutlinePlusCircle onClick={handleOpen} />
      </Typography>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
         
         
          <ButtonCmp  label="Submit" onClick={handleSubmit(onSubmit)} />
        </Box>
      </Modal>
    </div>
  );
}
