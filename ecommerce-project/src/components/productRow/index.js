import React from 'react';

// import React,{useState,useEffect} from 'react';

// import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Box from '@material-ui/core/Box';
import { useDispatch,useSelector } from "react-redux";
import {deleteApiProduct} from "../../api/products/products"
import {deleteProductById} from '../../store/actions/productActions'
import {useStyles} from "./styles"


function ProductRow({row,handleOpen,
  // handleDel,
 handleEdit}) {

  
  const classes = useStyles();


  const dispatch = useDispatch()

  const handleDel = (id) => {
    dispatch(deleteProductById(id))
    //     const getTasks = async () => {
    //       const tasksFromServer = await deleteApiProduct();
    // console.log(tasksFromServer);
    // console.log(tasksFromServer.data);
    //       setTasks(tasksFromServer.data);
    //     };

    //     getTasks();
    // deleteApiProduct(id).then((res) => {
    //   if (res.status === 404) {
    //     console.log("error");
    //     console.log(res);
    //     // toast.error("Not defined");
    //   }
    //   // setproducts(products.filter((task) => task.id !== id));
    // });
    //     const getproducts = async () => {
    //       const productsFromServer = await deleteApiProduct();
    // console.log(productsFromServer);
    //       setproducts(productsFromServer.data);
    //     };

    //     getproducts();
  };
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
           onClick={
             ()=>handleDel(row.id)
            }
          //  onClick={()=>dispatch(deleteProductById(product.id))}
            className={classes.box}>حذف</Box>
            </TableCell>
        
        
       
      </TableRow>
    )
}
export default ProductRow;