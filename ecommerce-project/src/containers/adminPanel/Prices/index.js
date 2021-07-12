import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {TableContainer,Paper,  Typography, Grid, Button} from "@material-ui/core";
  import { useStyles2 } from "./styles";
const Prices = () => {
    const classes = useStyles2();

    const products = useSelector((state) => state.allProducts.products);

    /*
    * use Data Grid - Editing for handle Edit
    * const columns 
    */
    const columns = [
        {
          field: 'id',
          headerName: 'شماره کالا',
          width: 220,
          editable: true,
        },
        { field: 'productName',
          headerName: 'نام کالا',
          width: 180,
          editable: true },
        { field: 'price',
         headerName: 'قیمت(ریال)',
         width: 180,
          type: 'number',
           editable: true },
        {
          field: 'number',
          headerName: 'تعداد',
          type: 'number',
          width: 180,
          editable: true,
        }
      ];
      



    return (
        <main>
            <Grid container justify="space-between" className={classes.grid}>
          <Grid item>
            <Typography>مدیریت موجودی و قیمت ها</Typography>
          </Grid>
          <Grid item>
            {/* <Button className={classes.btn} onClick={handleOpenAddDialog}>
              افزودن کالا
            </Button> */}
          </Grid>
        </Grid>
             <TableContainer className={classes.paper} component={Paper}>
             <div style={{ flexGrow: 1 }}>

             </div>
             </TableContainer>
        
        </main>
    )
}

export default Prices
