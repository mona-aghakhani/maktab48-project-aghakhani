import React from 'react'
import { Container, Grid, Typography, Box } from '@material-ui/core'
import check4 from "../../../assets/images/check4.png"
import { useStyles } from "./styles"
const SuccessPayment = () => {
    const classes = useStyles()
    return (
        <Container maxWidth="lg">
            <Grid container spacing={8} alignItems="center" className={classes.container} >
                <Grid item xs={12} sm={6} md={6}>
                    <Box className={classes.box}>
                        <img src={check4} className={classes.img} alt="check" />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography>
                        با تشکر از پرداخت شما، سفارش شما ثبت شده و جهت هماهنگی ارسال با شما تماس گرفته خواهد شد.
</Typography>
                </Grid>
            </Grid>

        </Container>
    )
}

export default SuccessPayment
