import React from 'react'
import { Container, Grid, Typography, Box } from '@material-ui/core'
import cancel4 from "../../../assets/images/cancel4.png"
import { useStyles } from "./styles"
const FailedPayment = () => {
    const classes = useStyles()
    return (
        <Container maxWidth="lg">
            <Grid container spacing={8} alignItems="center" className={classes.container} >
                <Grid item xs={12} sm={6} md={6}>
                    <Box className={classes.box}>
                        <img src={cancel4} className={classes.img} alt="cancel" />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography>
                        پرداخت موفقیت آمیز نبود.سفارش شما در انتظار پرداخت است.
</Typography>
                </Grid>
            </Grid>

        </Container>
    )
}

export default FailedPayment
