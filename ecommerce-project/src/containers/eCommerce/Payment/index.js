import React, { useEffect, useState } from 'react'
import { Redirect, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { addNewOrder, getOrders } from "../../../store/actions/ordersActions"
import { clearCart } from "../../../store/actions/cartActions"
import { Box, Button, Container, Grid, Typography } from '@material-ui/core'
import dargah0 from "../../../assets/images/dargah0.jpg"
import { useStyles } from "./styles"
const Payment = () => {
    /*
    * useSelector for get newOrder obj & dispatch addOrder action
    */
    const newOrder = useSelector((state) => state.allOrders.newOrder)
    const orders = useSelector((state) => state.allOrders.orders)
    // console.log(orders.length);
    const dispatch = useDispatch()
    // console.log(newOrder);
    /*
    * usestate for handle Redirect
    */
    const [goToSuccess, setGoToSuccess] = useState(false)
    const [goToFailed, setGoToFailed] = useState(false)
    useEffect(() => {
        dispatch(getOrders());
    }, []);
    // let history = useHistory()
    const handleSuccess = () => {
        dispatch(addNewOrder(newOrder))
        dispatch(clearCart())
        // history.push('/success/orders.length+1')
        setGoToSuccess(true)
    }
    const handleFailed = () => {
        setGoToFailed(true)
        // history.push('/failed')
    }
    const { grid, btn, img, box, container, cancel } = useStyles();
    return (
        <>
            <Container maxWidth="lg" className={container}>
                <Grid container>
                    <Grid xs={12}>
                        <Box className={box}><img className={img} src={dargah0} alt="درگاه بانکی" /></Box>
                    </Grid>
                    <Grid className={grid} xs={12} >
                        <Button onClick={handleSuccess} className={btn}>پرداخت موفق</Button>
                        <Button onClick={handleFailed} className={cancel}>انصراف </Button>

                    </Grid>
                </Grid>
                {goToSuccess && <Redirect to={`/success/${orders.length + 1}`} />}
                {goToFailed && <Redirect to='/failed' />}
            </Container>
        </>
    )
}

export default Payment
