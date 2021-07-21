import { Typography,Container,Paper,Grid,Button,TableContainer ,Table,TableHead,TableRow,TableCell,TableBody} from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

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
const Cart = () => {
    const cartItems=[]
    const classes = useStyles();
    return (
        <>
        <Container maxWidth="lg">
         <Typography variant="h4"> سبد خرید</Typography> 
         <TableContainer className={classes.paper} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">کالا</TableCell>
            <TableCell align="left">قیمت</TableCell>
            <TableCell align="left">تعداد</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.products.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left" component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.number}</TableCell>
              <TableCell align="left">
              {/* <Box onClick={() => { dispatch(deleteProductById(row.id)); }} className={classes.box} > حذف</Box> */}
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Grid Container justify="space-between">
        <Grid item
        //  xs={12} sm={6}
         >
        <Typography variant="h5"> جمع : 1،035،500 نومان</Typography>
        </Grid>
        <Grid item 
        // xs={12} sm={6}
        >
        <Button className={classes.btn}
        //  onClick={handleOpenAddDialog}
         >
              نهایی کردن سبد خرید 
            </Button>
        </Grid>
    
    </Grid>
         </Container>  
        </>
    )
}

export default Cart
