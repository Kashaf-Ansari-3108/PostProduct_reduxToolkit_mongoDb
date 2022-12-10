import React from "react";
import ModalCmp from "../mui component/ModalCmp";
import { fetchProduct } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import CardCmp from "../mui component/CardCmp";

const style = {
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  m: 4,
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

const Products = () => {
  const dispatch = useDispatch();
  const { status, data } = useSelector((state) => state.getProducts);
  useEffect(() => {
    dispatch(fetchProduct());
  }, [data]);
  // console.log(status);
  // console.log(data);

  return (
    <>
      <Box sx={style}>
        <ModalCmp />
      </Box>
      <Box sx={{ m: 5 }}>
        <Grid container spacing={2}>
          {data.products?.map((product) => {
            return (
              <Grid item lg={4} md={6} sm={8} key={product._id}>
                <CardCmp product={product} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Products;
