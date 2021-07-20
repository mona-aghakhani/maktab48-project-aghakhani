import React, { useState } from "react";
import { useFilePicker } from "use-file-picker";
import { useDispatch } from "react-redux";

import {
  Button,
  TextField,
  Grid,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { addNewProduct } from "../../store/actions/productActions";
import { ToastContainer, toast } from "react-toastify";


export default function AddProduct({ handleClose }) {
  const classes = useStyles();
  /*
    * usedispatch action for add product
    */

  const dispatch = useDispatch();

  /*
   * set states for input values
   */

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");


  /*
   * 'use-file-picker' : Simple react hook to open browser file selector.
   */
  const [openFileSelector, { filesContent }] = useFilePicker({
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
  /*
  * use output 'use-file-picker'
  */
  //   console.log(filesContent[0]?.content);

  const handleAdd = (e) => {

    e.preventDefault();
    // console.log("add comp");
    if (title && category) {
      let newProduct = { title: title, image: filesContent[0]?.content, category: category, description: description, price: "", amount: "" };
      // console.log(newProduct);

      dispatch(addNewProduct(newProduct))
      handleClose();
    } else {
      toast.error("نام کالا و دسته بندی را لطفا وارد کنید");
      console.error("err")
    }
  };



  return (
    <>
      <ToastContainer />
      <Container component="main" maxWidth="sm">
        <form
          onSubmit={handleAdd}
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
                  // disabled
                  className={classes.input}
                  fullWidth
                  value={image}
                  onChange={(e) => setImage(e.target.value)}

                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  type="button"
                  onClick={() => {
                    openFileSelector();
                  }}
                  className={classes.btnFile}
                >
                  Browse
              </Button>
              </Grid>
            </Grid>
            <Grid xs={12} item>
              <TextField
                variant="outlined"
                placeholder=" نام کالا "
                required
                fullWidth
                name="نام"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                  value={category}

                  onChange={(e) => setCategory(e.target.value)}
                  label="دسته بندی"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"خواروبار"}>خواروبار</MenuItem>
                  <MenuItem value={"لبنیات"}>لبنیات</MenuItem>
                  <MenuItem value={"نوشیدنی"}>نوشیدنی</MenuItem>
                  <MenuItem value={"شوینده"}>شوینده</MenuItem>
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid container xs={12} justify="center">
              <Button
                onClick={handleAdd}
                type="submit"
                // fullWidth
                variant="contained"
                disabled={!title && !category && !image}

                className={classes.btn}
              >
                ذخیره
            </Button>
            </Grid>
          </Grid>
        </form>
      </Container>

    </>
  );
}


