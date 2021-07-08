import React from 'react';
import {useHistory} from "react-router-dom"
// import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Box from '@material-ui/core/Box';
import { useDispatch } from 'react-redux';
import {deleteApiProduct} from "../../api/products/products"
// import {deleteProductById} from '../../store/actions/productActions'
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
    objectFit:'cover',
    objectPosition:'center',
    width:"60px",
    height:"60px",
    borderRadius:"50%",
  },
 
});
function ProductRow({row,handleOpen,handleDel,handleEdit}) {
  let history=useHistory()
  const classes = useStyles();
  const dispatch = useDispatch()
  // console.log(product,"inja");
//   const handleGoToUserPage=()=>{
//     console.log(1);
//     history.push(`/user/${user.id}`)
//   }

    return(
        <TableRow key={row?.id} >
            
        {/* <TableCell component="th" scope="row">
          {product?.id}
        </TableCell> */}
        {/* <TableCell align="right">{user?.code}</TableCell> */}
        <TableCell ><img className={classes.img} src={row?.image}/></TableCell>
        <TableCell >
            {row?.title}
            </TableCell>
        <TableCell >
            {row?.category}
            </TableCell>
            <TableCell >
           <Box onClick={()=>handleOpen(row)} className={classes.box}>ویرایش</Box>
           <Box 
           onClick={()=>handleDel(row.id)}
          //  onClick={()=>dispatch(deleteProductById(product.id))}
            className={classes.box}>حذف</Box>
            </TableCell>
        
        
       
      </TableRow>
    )
}
export default ProductRow;