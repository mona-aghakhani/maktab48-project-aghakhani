import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {Button,TextField,FormControlLabel,Checkbox,Grid,Card,Container,Typography} from "@material-ui/core";
import { useStyles } from "./styles";
import { login } from "../../../api/login";
import {isLoggedIn} from "../../../utils/auth"
// import { setToken, getProducts } from "../../../store/actions/productActions";




export default function AdminLogin({}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  /*
  * chech token 
  */
  const handleLogin = (e) => {
    e.preventDefault();
    if ((email, password)) {
      login(email, password)
        .then((res) => {
          // console.log(res.data,"data");
          // dispatch(setToken(res.data.token));
          localStorage.setItem("token", res.data.token);
          // window.location.reload();
          if (isLoggedIn()) {
            history.push("/admin/products");
          }
          
        })
        .catch((err) => console.error(err));
    }
     else {
      // toast.error("email and password fields could not be empty! ");
      console.error("err")
    }
  };
  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  return (
     
    
      <Container component="main" maxWidth="sm">
           <Card className={classes.paper}>
        {/* <CssBaseline /> */}
        {/* <div className={classes.paper}> */}
        
          <Typography component="h1" variant="h5">
            فرم ورود
          </Typography>
          <form
            onSubmit={handleLogin}
            className={classes.form}
           
            noValidate
            autoComplete="off"
          >
            <div >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                placeholder=" نام کاربری"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={handleChange}
              />
              {/* <TextField placeholder="Name" />
        <input type="text" placeholder="Name" /> */}
            </div>
            {/* <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          /> */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder="رمز ورود"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handleChange}
            />
            {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
            <Button
              // onClick={handleLogin}
              type="submit"
              fullWidth
              variant="contained"
              disabled={!email && !password}
              color="primary"
              className={classes.submit}
            >
              ورود
            </Button>
            {/* <Button
          onClick={onClick}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button> */}
            {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button> */}
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
              </Grid>
              <Grid item>
                {/* <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link> */}
              </Grid>
            </Grid>
          </form>
        {/* </div> */}
        
        </Card>
       </Container>
    
   
  );
}
