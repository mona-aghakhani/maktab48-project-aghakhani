import React from "react";
import { Typography, Box,TableContainer,TableRow,TableBody,Paper,TableCell, TableHead,Grid, Table, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch} from "react-redux"
import { changeStatus,updateOrderById } from "../../store/actions/ordersActions";
const useStyles = makeStyles({
    table: {
      minWidth: 650,
      background: "rgba(231, 231 ,231,0.45)",
     
    },
    btn:{
        background: "rgb(103,182,108)",
        padding:"5px 15px",
      margin:"auto",
        borderRadius:"5px",
      
    },
    paper:{
        margin:"20px 0"
    }
  });

const OrderDetail = ({orderObj,delivered}) => {

const classes = useStyles();
const dispatch = useDispatch()
/*
*use put api & dispatch for change order status
*/
const handleEdit=()=>{
  // console.log(orderObj);
let statusObj={...orderObj,status:"تحویل شده"}
// console.log(statusObj);
dispatch(updateOrderById(orderObj.id,statusObj))
window.location.reload()
}


  return (
    < >
    <Grid container>
      {/* <Box bgcolor="text.secondary"> */}
        {/* <Container maxWidth="lg"> */}
        <Grid item xs={12}>
          <Box >
            <Typography>نام مشتری : {orderObj.fullName}</Typography>
          </Box>
          </Grid>
          <Grid item xs={12}>
          <Box>
            <Typography>آدرس : {orderObj.address} </Typography>
          </Box>
          </Grid>
          <Grid item xs={12}>
          <Box >
          <Typography>تلفن : {orderObj.phone} </Typography>
          </Box>
          </Grid>
          <Grid item xs={12}>
          <Box  >
         
          <Typography>زمان تحویل : {orderObj.deliveryTime} </Typography>
          </Box>
          </Grid>
          <Grid item xs={12}>
          <Box >
          <Typography>زمان سفارش : {orderObj.orderTime} </Typography>
          </Box>
          </Grid>
          <TableContainer className={classes.paper} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">کالا</TableCell>
            <TableCell align="left">قیمت</TableCell>
            <TableCell align="left">تعداد</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderObj.products.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left" component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.number}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {delivered === "در انتظار ارسال"   ? <Button className={classes.btn}
    onClick={handleEdit}
    >تحویل شد</Button> : <Typography>زمان تحویل : {orderObj.deliveryTime}</Typography>}
        {/* </Container> */}
      {/* </Box> */}
      </Grid>
    </>
  );
};
export default OrderDetail;
