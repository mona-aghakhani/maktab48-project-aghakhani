import React from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import {addNewOrder} from "../../../store/actions/ordersActions"
import {clearCart} from "../../../store/actions/cartActions"
import {Box,Button,Container,Grid,Typography} from '@material-ui/core'
import dargah0 from "../../../assets/images/dargah0.jpg"
import { useStyles } from "./styles"
const Payment = () => {
/*
* useSelector for get newOrder obj & dispatch addOrder action
*/
const newOrder=useSelector((state) => state.allOrders.newOrder)
const dispatch = useDispatch()
console.log(newOrder);


let history=useHistory()
const handleSuccess=()=>{
    dispatch(addNewOrder(newOrder))
    dispatch(clearCart())
    history.push('/success')
}
const handleFailed=()=>{
    history.push('/failed')
}
    const {  grid, btn, img, box,container,cancel } = useStyles();
    return (
        <>
        <Container maxWidth="lg" className={container}>
            <Grid container>
                <Grid xs={12}>
        <Box className={box}><img className={img} src={dargah0} alt="درگاه بانکی" /></Box>
        </Grid>
        <Grid className={grid} xs={12} >
        <Button onClick={handleSuccess}  className={btn}>پرداخت موفق</Button>
        <Button onClick={handleFailed}  className={cancel}>انصراف </Button>

        </Grid>
        </Grid>
        </Container>
      </>
    )
}

export default Payment
