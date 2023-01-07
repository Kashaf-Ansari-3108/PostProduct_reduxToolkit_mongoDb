import {React, useEffect} from "react";
import pic from "../assests/pic.jpg";
import bg from "../assests/bg.jpg"
import { useForm, Controller } from "react-hook-form";
import Grid from "@mui/material/Grid";
import { Box, Container, Typography } from "@mui/material";
import InputCmp from "../mui component/InputCmp";
import ButtonCmp from "../mui component/ButtonCmp";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../store/loginSlice";
import { useDispatch,useSelector } from "react-redux";
import toast from 'react-hot-toast';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {status,data} = useSelector((state)=>state.loginSlice);
  
  useEffect(()=>{
     if(status == "loading"){
      toast.success("Loading !!!");
     }
     else if(status == "idle"){
      toast.success(data.message);
      localStorage.setItem("user", JSON.stringify(data.data));
      localStorage.setItem("token", data.token);
      navigate("/");
}
     else{
      toast.error(data.message);
     }
  },[status])

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (obj) => {
    console.log(obj);
    dispatch(loginUser(obj));
   };
  return (
    <>
    
      <Box>
        <Grid container>
          <Grid item md={6} xs={0}>
            <Box
              component="img"
              src={pic}
              sx={{
                width: "100%",
                height: "650px",
                display: { xs: "none", md: "flex" },
              }}
            ></Box>
          </Grid>
          <Grid item md={6} sx={{ backgroundImage:`url(${bg})`}}>
           
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ m: 5,px:"30px",py:"60px", display:"flex",flexDirection:"column",gap:2, }}
            >
                 <Box
              component="h1"
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 2,
                fontFamily: "cursive",
                color: "green",
              }}
            >
              Welcome
            </Box>
             
              <Controller
                name="email"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <InputCmp
                    label="Email"
                    onChange={onChange}
                    value={value}
                    type="email"
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <InputCmp
                    label="Password"
                    onChange={onChange}
                    value={value}
                    type="password"
                  />
                )}
              />
              <Box sx={{ mt: 3, display: "flex", flexWrap:"wrap", justifyContent: "space-between", a:{textDecoration:"none",color:"green"} }}>
                <Typography sx={{color:"grey"}}>Don't have an account? <Link to="/signup">Sign up</Link></Typography>
                <ButtonCmp label="Login" onClick={handleSubmit(onSubmit)} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
   
  );
}

export default Login;
