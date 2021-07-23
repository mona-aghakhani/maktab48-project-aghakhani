import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Container, Paper, Grid, Button, IconButton, TableContainer, Tooltip, Table, TableHead, TableRow, TableCell, TableBody, Box } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import { useStyles } from "./styles"
import { removeCart } from "../../../store/actions/cartActions"
import { useHistory } from "react-router-dom"
import basket from "../../../assets/images/basket.png"

const Cart = () => {

  const cartItems = useSelector((state) => state.cartItems)
  const productSum = cartItems.map(item => item.price * item.number)
  // console.log(productSum);
  const total = productSum.reduce((sum, item) => (sum += item))
  const dispatch = useDispatch()

  const { paper, table, grid, btn, img, box, title } = useStyles();
  /*
  * useHistory for handle go to finalizePage
  */
  let history = useHistory()
  const handleGoToFinalizePage = () => {
    history.push(`/finalizeCart`)
  }



  return (
    <main>
      <Container maxWidth="lg">
        {cartItems.length > 0 ? (
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
        ) : (
          <>
            <Box className={box}><img className={img} src={basket} alt="سبد" /></Box>

            <Typography variant="h6" className={title}>سبد خرید شماخالی است...</Typography>
          </>
        )}

      </Container>

    </main>
  )
}

export default Cart
