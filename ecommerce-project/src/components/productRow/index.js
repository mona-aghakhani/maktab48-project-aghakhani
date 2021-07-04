import React from 'react';
import {useHistory} from "react-router-dom"
// import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
const useStyles = makeStyles({
 
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
           <span>ویرایش</span>
           <span>حذف</span>
            </TableCell>
        
        
       
      </TableRow>
    )
}
export default ProductRow;