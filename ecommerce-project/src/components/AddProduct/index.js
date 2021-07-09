import React, { useState } from "react";
import { useFilePicker } from "use-file-picker";
import { useDispatch } from "react-redux";

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
import { addNewProduct } from "../../store/actions/productActions";



export default function AddProduct({ handleClose}) {
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
  
  const handleSubmit = (e) => {
    
    e.preventDefault();
    // console.log("add comp");
    
  let newProduct={ title:title,image:filesContent[0]?.content,category:category,description:description,price:"",amount:""};
  // console.log(newProduct);
  
dispatch(addNewProduct(newProduct))
 
    handleClose();
  };
 
  

  return (
    <Container component="main" maxWidth="sm">
      <form
        onSubmit={handleSubmit}
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
onChange={(e)=>setImage(e.target.value)}

              />
            </Grid>
            <Grid item xs={2}>
              <button
                type="button"
                onClick={() =>{openFileSelector();
                }}
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
              name="نام"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
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
                
                onChange={(e)=>setCategory(e.target.value)}
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
              onChange={(e)=>setDescription(e.target.value)}
            />
          </Grid>
          <Grid container xs={12} justify="center">
            <Button
              onClick={handleSubmit}
              type="submit"
              // fullWidth
              variant="contained"
              disabled={!title && !category}

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


