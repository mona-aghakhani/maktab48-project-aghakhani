import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";

// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { login } from "../../../api/login";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setToken, getProducts } from "../../../store/actions/productActions";
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }
const theme = createMuiTheme({
  direction: "rtl",
});
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(12),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // minWidth:"300px",
    padding:theme.spacing(4)
  },
 
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AdminLogin({}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleLogin = (e) => {
    e.preventDefault();
    if ((email, password)) {
      login(email, password)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          // window.location.reload();
          dispatch(setToken(res.data.token));
          history.push("/dashboard");
        })
        .catch((err) => console.error(err));
    }
    //  else {
    //   toast.error("email and password fields could not be empty! ");
    // }
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
            dir="rtl"
            noValidate
            autoComplete="off"
          >
            <div dir="rtl">
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
              onClick={handleLogin}
              type="submit"
              fullWidth
              variant="contained"
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
