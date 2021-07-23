import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Container, Paper, Grid, Button, IconButton, TableContainer, Tooltip, Table, TableHead, TableRow, TableCell, TableBody, Box } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
// import { makeStyles } from '@material-ui/core/styles';
import { CustomDialog } from "../../../components/CustomDialog";
// import CartForm from "../../../components/CartForm"
import { useStyles } from "./styles"
import { removeCart } from "../../../store/actions/cartActions"
import {useHistory} from "react-router-dom"
import basket from "../../../assets/images/basket.png"
// const useStyles = makeStyles({
//     table: {
//       minWidth: 650,
//       background: "rgba(231, 231 ,231,0.45)",

//     },
//     btn:{
//         background: "rgb(103,182,108)",
//         padding:"5px 15px",
//     //   margin:"auto",
//         borderRadius:"5px",

//     },
//     paper:{
//         margin:"20px 0",
//         // width:"80%"
//     },
//     grid: {
//         // width: "90%",
//         margin: "20px auto",
//       },
//   });
const Cart = () => {


  const cartItems = useSelector((state) => state.cartItems)
  const productSum = cartItems.map(item => item.price * item.number)
  // console.log(productSum);
  const total = productSum.reduce((sum, item) => (sum += item))
  // console.log(total);

  // console.log(cartItems);
  const dispatch = useDispatch()
  // const cartItems=[{
  //     "id": 1,
  //     "fullName": "اکبر زمانی",
  //     "address": "مشهد،بلوار فرامرز عباسی",
  //     "phone": "09388888888",
  //     "orderTime": "1400/03/04",
  //     "deliveryTime": "1400/03/14",
  //     "products": [
  //       {
  //         "title": "قرص ظرفشویی  ",
  //         "price": "120000",
  //         "number": "1"
  //       },
  //       {
  //         "title": "لپه  ",
  //         "price": "40000",
  //         "number": "2"
  //       },
  //       {
  //         "title": "  دلستر ",
  //         "price": "16000",
  //         "number": "1"
  //       }
  //     ],
  //     "total": "216000",
  //     "status": "تحویل شده"
  //   },]
  const { paper, table, grid, btn,img ,box,title} = useStyles();
/*
* useHistory for handle go to finalizePage
*/
let history=useHistory()
  const handleGoToFinalizePage = () => {
    history.push(`/finalizeCart`)
  }


 
  return (
    <main>
      <Container maxWidth="lg">
        { cartItems.length > 0 ? (
          <>
          <Typography variant="h4"> سبد خرید</Typography>
        <Container style={{ width: "80%" }}>
          <TableContainer className={paper} component={Paper}>
            <Table className={table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">کالا</TableCell>
                  <TableCell align="left">قیمت</TableCell>
                  <TableCell align="left">تعداد</TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((row, index) => (
                  <TableRow key={row.index}>
                    <TableCell align="left" component="th" scope="row">
                      {row.title}
                    </TableCell>
                    <TableCell align="left">{row.price}</TableCell>
                    <TableCell align="left">{row.number}</TableCell>
                    <TableCell align="left">
                      <Tooltip title="حذف کالا" placement="top">
                        <IconButton aria-label="delete"
                          onClick={() => { dispatch(removeCart(index)) }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                      {/* <Box onClick={() => { dispatch(deleteProductById(row.id)); }} className={box} > حذف</Box> */}
                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Grid container justify="space-between" className={grid}>
            <Grid item>
              <Typography variant="h5"> جمع : {total.toLocaleString()} تومان</Typography>
            </Grid>
            <Grid item>
              <Button className={btn}
                //  onClick={handleOpen}
                onClick={handleGoToFinalizePage}
              >
                نهایی کردن سبد خرید
            </Button>
            </Grid>
          </Grid>
        </Container>
        </>
        ):(
          <>
          <Box className={box}><img className={img} src={basket} alt="سبد"/></Box>
          
<Typography variant="h6" className={title}>سبد خرید شماخالی است...</Typography>
</>
        )}
        
      </Container>
      {/* {isOpen && <CustomDialog
        isOpen={isOpen}
        handleClose={handleClose}
        className={dialogTitle}
        title=" نهایی کردن سبد خرید"
      >
        <CartForm  handleClose={handleClose} />
      </CustomDialog>} */}
    </main>
  )
}

export default Cart
