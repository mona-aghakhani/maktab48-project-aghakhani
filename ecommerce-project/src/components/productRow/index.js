import React from 'react';
import {useHistory} from "react-router-dom"
// import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles({
  box:{
    textAlign:"center",
    cursor:"pointer",
// margin:"5px",
'&:hover':{
borderBottom:"1px solid rgb(234,149,63,0.9)"
}
  },
  img:{
    objectFit:'contain',
    objectPosition:'center',
    width:50,
    height:50,
    borderRadius:0.5,
  },
 
});
function ProductRow({product}) {
  let history=useHistory()
  const classes = useStyles();
//   const handleGoToUserPage=()=>{
//     console.log(1);
//     history.push(`/user/${user.id}`)
//   }

    return(
        <TableRow key={product?.id} >
            
        {/* <TableCell component="th" scope="row">
          {product?.id}
        </TableCell> */}
        {/* <TableCell align="right">{user?.code}</TableCell> */}
        <TableCell align="left"><img className={classes.img} src={product?.image}/></TableCell>
        <TableCell align="left">
            {product?.title}
            </TableCell>
        <TableCell align="left">
            {product?.category}
            </TableCell>
            <TableCell align="left">
           <Box className={classes.box}>ویرایش</Box>
           <Box className={classes.box}>حذف</Box>
            </TableCell>
        
        
       
      </TableRow>
    )
}
export default ProductRow;