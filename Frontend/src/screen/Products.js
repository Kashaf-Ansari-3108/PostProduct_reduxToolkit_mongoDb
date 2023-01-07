import {useEffect} from "react";
import ModalCmp from "../mui component/ModalCmp";
import { Box, Grid } from "@mui/material";
import CardCmp from "../mui component/CardCmp";
import { getTransport } from "../store/getTransportSlice";
import { useDispatch, useSelector } from "react-redux";

const style = {
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
  m: 4,
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

const Products = () => {
  const dispatch = useDispatch();
  const { status, data } = useSelector((state) => state.getTransportSlice);
  useEffect(() => {
    dispatch(getTransport());
  }, [data]);
  
return (
    <>
      <Box sx={style}>
        <ModalCmp />
      </Box>
      <Box sx={{ m: 5 }}>
        <Grid container spacing={2}>
          {data.transports?.map((transport) => {
            return (
              <Grid item lg={4} md={6} sm={8} key={transport._id}>
                <CardCmp transport={transport} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Products;
