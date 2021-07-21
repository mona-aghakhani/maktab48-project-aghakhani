import React, {  useEffect, useState } from 'react'
import { getAProduct, getProducts } from "../../../store/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Card, Container, Grid, Paper,Button, Typography,Divider,TextField } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
// import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import {useStyles} from "./styles"
const ProductDetail = () => {
    const {img,box,container,boxDetail,btn,paper,divider,input,gridImg}=useStyles()
    const { productId } = useParams();
    console.log(productId);
    const dispatch = useDispatch();
    const selectedProduct = useSelector( (state) => state.allProducts.selectedProduct );
    console.log(selectedProduct);
    useEffect(() => {
        dispatch(getAProduct(productId));
      }, []);
    return (
        <Container className={container} maxWidth="lg">
          <Grid container spacing={4} alignItems="center" justify="center">
<Grid item xs={12} sm={4} md={4} className={gridImg}>
<Box className={box}>
    <img className={img}  src={selectedProduct.image} alt="کالا" />
</Box>
</Grid>
<Grid item xs={12} sm={8} md={8}>
{/* <Box className={boxDetail}> */}
<Paper className={paper}>
{/* <Card> */}
    <Typography variant="h6"> 
   نام کالا : {selectedProduct.title} 
    </Typography>
    <Divider  className={divider} />
    <Typography> 
      دسته بندی : {selectedProduct.category}
    </Typography>
    <Typography style={{margin:"13px 0"}}> 
       {Number(selectedProduct.price).toLocaleString()} تومان
    </Typography>
    {/* </Card> */}
    <Grid container spacing={3} alignItems="center">
        <Grid>
    <TextField  item
    type="number"
    InputProps={{
        inputProps: { 
            max: 100, min: 0 
        }
    }}
    variant="outlined"
    className={input}
    // size="small"
    // label="what ever"
/>
</Grid>
<Grid item>
<Button 
className={btn}
//  onClick={handleOpenAddDialog}
>
    
              افزودن به سبد خرید
              <AddCircleIcon/>
            </Button>
            </Grid>
            </Grid>
            <Divider  className={divider} />
            <Typography>توضیحات :
                <br/>
                 {selectedProduct.description}</Typography>
    </Paper>
{/* </Box> */}
</Grid>
          </Grid>
        </Container>
    )
}

export default ProductDetail
