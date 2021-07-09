import React, { useState } from "react";
import { useFilePicker } from "use-file-picker";
import { useDispatch,useSelector } from "react-redux";
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
import { addNewProduct,addProduct } from "../../store/actions/productActions";
import {useAxios} from "../../api/products/useAxios"
import {postNewProduct} from "../../api/products/products"
import axios from 'axios';
// import { isLoggedIn } from "../../../utils/auth";
// import { setToken, getProducts } from "../../../store/actions/productActions";

export default function AddProduct({
  handleClose,
  // handleAdd,handleEdit,editedObj,tasks
}) {
  const classes = useStyles();
 /*
   * useselector & get products
   */
 const products = useSelector((state) => state.allProducts.products);
 const dispatch = useDispatch();



/*
* custom hook for api
*/
// const { response, loading, error } = useAxios({
//   method: "get",
//   url: "http://localhost:5000/products",
//   headers: { "content-type": "application/json" }
// });
// console.log(response, loading, error);

  /*
   * set states for input values
   */
  // console.log(editedObj);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  // const [newitem, setNew] = useState(null)
//   const { response, loading, error } = useAxios({
//   method: "post",
//   url: "http://localhost:5000/products",
//   headers: { "content-type": "application/json" },
// data:JSON.stringify(newitem)
// });
// console.log(response, loading, error);

  //   const history = useHistory();
  

  /*
   * 'use-file-picker' : Simple react hook to open browser file selector.
   */
  const [openFileSelector, { filesContent, loadingImg, errorsImg }] = useFilePicker({
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

  // if (loadingImg) {
  //   return <div>Loading...</div>;
  // }

  // if (errorsImg.length) {
  //   return <div>Error...</div>;
  // }
  // const addAproduct=()=>{
  //   let newProduct={ id:Math.floor(Math.random() * 1000000),title,image:filesContent[0]?.content,category,description}
  //   console.log(newProduct);
  // }
  const handleLogin = (e) => {
    // console.log("ok");
    e.preventDefault();

    // if (image && title) {
      
    // }
    // if (editedObj) {
    //   console.log("edit");
    //   let updatedProductObj={...editedObj, title,image:filesContent[0]?.content || image ,category,description};
    //  console.log(updatedProductObj);
    //   handleEdit(updatedProductObj)
    // }
    // console.log("ok");
    // setImage(filesContent[0]?.content);
    // console.log(title,image,category,description);
    // addAproduct();
    console.log("add comp");
    
  let newProduct={ title:title,image:filesContent[0]?.content,category:category,description:description,price:"",amount:""};
  console.log(newProduct);
  // postNewProduct(newProduct).then(function(res){
  //   dispatch(addProduct(res.data))
  // })
dispatch(addNewProduct(newProduct))
  // axios.post('http://localhost:5000/products',newProduct)
  // .then(function (res){
  //   console.log(res);
  //   dispatch(addProduct(res.data))
  // })
  // dispatch(addNewProduct(newProduct))
  //   getAllProducts().then((res) => {
  //     console.log("res data for products", res.data);
  //     dispatch(setProducts(res.data));
  //   });
//   postNewProduct(newProduct).then((res) => {
//     // if (res.status === 404) {
//     //   console.log("error");
//     //   console.log(res);
//     //   // toast.error("Not defined");
//     // }
// dispatch(addProduct(newProduct))
//   })
 
    handleClose();
  };
  const handleChange = (e) => {

    setImage(e.target.value);
    // setImage(filesContent[0]?.content);
    // if (e.target.name === "image") {
    //   console.log("ok");

    // //   setImage(filesContent[0]?.content);
    // //   setImage(e.target.files);
    //   console.log(image,"img");
    // } else {
    //   // setPassword(e.target.value);
    // }
    // console.log(image,"img");
  };
  // console.log(image,"img");
  
//   console.log(filesContent[0]?.content);
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
                // disabled
                className={classes.input}
                fullWidth
value={image}
onChange={(e)=>setImage(e.target.value)}
// onChange={handleChange}
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
              onClick={handleLogin}
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



   // setproducts([...products, newProduct]);
    // setproducts(products.filter((task) => task.id !== id));



// console.log(newProduct);
// handleAdd(newProduct)
// dispatch(addProduct(postNewProduct(newProduct)))
// let res=postNewProduct(newProduct)
// console.log(res);
// console.log(res.data);
// .then((res)=>{
//   console.log(res.data);
// })
// setNew(newProduct)
// const { response, loading, error } = useAxios({
//   method: "post",
//   url: "http://localhost:5000/products",
//   headers: { "content-type": "application/json" },
// data:newProduct
// });
// console.log(response, loading, error);
