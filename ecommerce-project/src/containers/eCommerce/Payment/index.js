import React from 'react'
import { useHistory } from "react-router-dom"
import {Box,Button,Container,Grid,Typography} from '@material-ui/core'
import dargah0 from "../../../assets/images/dargah0.jpg"
import { useStyles } from "./styles"
const Payment = () => {

    const {  grid, btn, img, box,container,cancel } = useStyles();
    return (
        <>
        <Container maxWidth="lg" className={container}>
            <Grid container>
                <Grid xs={12}>
        <Box className={box}><img className={img} src={dargah0} alt="درگاه بانکی" /></Box>
        </Grid>
        <Grid className={grid} xs={12} >
        <Button   className={btn}>پرداخت موفق</Button>
        <Button   className={cancel}>انصراف </Button>

        </Grid>
        </Grid>
        </Container>
      </>
    )
}

export default Payment
