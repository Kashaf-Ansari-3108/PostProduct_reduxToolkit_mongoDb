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
import { category, price, title } from "../store/productsSlice";
import { postData } from "../store/postProductSlice";
import categories from "./categoryOption";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
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
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.products);

  const setTitle = (val) => {
    dispatch(title(val));
  };
  const setPrice = (val) => {
    dispatch(price(val));
  };
  const setCategory = (val) => {
    dispatch(category(val));
  };
 
  const data = {
    title: selector.title,
    price: selector.price,
    category: selector.category,
  };
  const post = (data) => {
    dispatch(postData(data));
    setOpen(false);
  };

  return (
    <div>
      <Typography variant="h4" sx={{ color: "red" }}>
        Add Product <AiOutlinePlusCircle onClick={handleOpen} />
      </Typography>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <InputCmp
            onChange={(e) => setTitle(e.target.value)}
            label="Product Title"
          />
          <InputCmp
            onChange={(e) => setPrice(e.target.value)}
            label="Price (in Rs.)"
          />
          <SelectCmp
            label="Select category of the product"
            optionObj={categories}
            onChange={(e) => setCategory(e.target.value)}
          />
         
          <ButtonCmp onClick={() => post(data)} label="Submit" />
        </Box>
      </Modal>
    </div>
  );
}
