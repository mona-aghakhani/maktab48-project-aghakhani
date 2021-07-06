import React, { useState } from "react";
import { useFilePicker } from "use-file-picker";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Card,
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useStyles } from "./styles";
// import { login } from "../../../api/login";
// import { isLoggedIn } from "../../../utils/auth";
// import { setToken, getProducts } from "../../../store/actions/productActions";

export default function AddProduct({}) {
  const classes = useStyles();
  /*
   * set states for input values
   */
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  //   const history = useHistory();
  //   const dispatch = useDispatch();

  /*
   * 'use-file-picker' : Simple react hook to open browser file selector.
   */
  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
    multiple: true,
    // limitFilesConfig: { max: 1 },
    // minFileSize: 0.1, // in megabytes
    // maxFileSize: 50,
    // imageSizeRestrictions: {
    //   maxHeight: 900, // in pixels
    //   maxWidth: 1600,
    //   minHeight: 600,
    //   minWidth: 768,
    // },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errors.length) {
    return <div>Error...</div>;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    //   if ((email, password)) {
    //     login(email, password)
    //       .then((res) => {
    //         // console.log(res.data,"data");
    //         // dispatch(setToken(res.data.token));
    //         localStorage.setItem("token", res.data.token);
    //         // window.location.reload();
    //         if (isLoggedIn()) {
    //           history.push("/admin/products");
    //         }

    //       })
    //       .catch((err) => console.error(err));
    //   }
    //    else {
    //     // toast.error("email and password fields could not be empty! ");
    //     console.error("err")
    //   }
  };
  const handleChange = (e) => {
    if (e.target.name === "dataImg") {
      console.log("ok");

      setImage(e.target.files);
      console.log(image);
    } else {
      // setPassword(e.target.value);
    }
  };
  console.log(filesContent[0]?.content);
  return (
    <Container component="main" maxWidth="sm">
      <form
        onSubmit={handleLogin}
        className={classes.form}
        noValidate
        autoComplete="off"
      >
        <Grid container column>
          <Grid
            justify="space-between"
            alignItems="center"
            xs={12}
            item
            container
          >
            <Grid item xs={10}>
              <TextField
                variant="outlined"
                placeholder=" تصویر کالا"
                name="image"
                // margin="normal"
                disabled
                className={classes.input}
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <button
                type="button"
                onClick={() => openFileSelector()}
                className={classes.btnFile}
              >
                Browse
              </button>
            </Grid>
          </Grid>
          <Grid xs={12} item>
            <TextField
              variant="outlined"
              placeholder=" نام کالا "
              required
              fullWidth
            />
          </Grid>
          <Grid xs={12} item>
            <FormControl
              fullWidth
              variant="outlined"
              className={classes.formControl}
            >
              <InputLabel
                className={classes.label}
                id="demo-simple-select-outlined-label"
              >
                دسته بندی
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                //   value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>خواروبار</MenuItem>
                <MenuItem value={20}>لبنیات</MenuItem>
                <MenuItem value={30}>نوشیدنی</MenuItem>
                <MenuItem value={30}>شوینده</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={12} item>
            <TextField
              placeholder="توضیحات"
              variant="outlined"
              multiline
              required
              rows={2}
              rowsMax={4}
            />
          </Grid>
          <Grid container xs={12} justify="center">
            <Button
              // onClick={handleLogin}
              type="submit"
              // fullWidth
              variant="contained"
              // disabled={!email && !password}

              className={classes.btn}
            >
              ذخیره
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
