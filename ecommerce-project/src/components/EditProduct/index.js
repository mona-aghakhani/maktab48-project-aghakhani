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
import { updateProductById } from "../../store/actions/productActions";


export default function EditProduct({handleClose,editedObj}) {
  const classes = useStyles();

  // console.log(editedObj);


  /*
   * set states for input values
   */

  const [image, setImage] = useState(editedObj.image);
  const [title, setTitle] = useState(editedObj.title);
  const [category, setCategory] = useState(editedObj.category);
  const [description, setDescription] = useState(editedObj.description);
  /*
   * usedispatch action for edit product
   */
    const dispatch = useDispatch();

  /*
   * 'use-file-picker' : Simple react hook to open browser file selector.
   */
  const [openFileSelector, { filesContent }] = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
    multiple: true,
  });

 
  const handleEdit = (e) => {
    e.preventDefault();
    // console.log("edit comp");
   
      let updatedProductObj={...editedObj, title,image:filesContent[0]?.content || image ,category,description};
     console.log(updatedProductObj);
     dispatch(updateProductById(editedObj.id,updatedProductObj))

    handleClose();
    // dispatch(getProducts())
    window.location.reload()
  };
  
  return (
    <Container component="main" maxWidth="sm">
      <form
        onSubmit={handleEdit}
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
                defaultValue={image}
                // margin="normal"
                // disabled
                className={classes.input}
                fullWidth
// value={image}
onChange={(e)=>setImage(e.target.value)}

              />
            </Grid>
            <Grid item xs={2}>
              <button
                type="button"
                onClick={() =>openFileSelector()}
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
             
              type="submit"
            
              variant="contained"
             

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
