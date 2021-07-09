import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Table, TableBody,
  TableHead,
  TableCell,
  TableContainer,
  TableFooter,
  TableRow,
  TablePagination,
  Paper,
  Typography,
  Grid,
  Button,
  Container,
  Box,
} from "@material-ui/core";
import { useStyles2 } from "./styles";
import { TablePaginationActions } from "./TablePaginationActions";

import { CustomDialog } from "../../../components/CustomDialog";
import AddProduct from "../../../components/AddProduct";
import EditProduct from "../../../components/EditProduct";
// import { useAxios } from "../../../api/products/useAxios";
import { setProducts, getProducts, addNewProduct, deleteProduct, deleteProductById } from "../../../store/actions/productActions";
import { getAllProducts, deleteApiProduct, postNewProduct, putApiProduct } from "../../../api/products/products";
// import {deleteApiProduct} from "../../api/products/products"
// import axios from "axios";

const Products = () => {
  /*
   * use useselector & dispatch for get products and handle api calls
   */
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  /*
   * dispatch sync action(setProducts) and get data
   */
  // useEffect(() => {
  //   getAllProducts().then((res) => {
  //     console.log("res data for products", res.data);
  //     dispatch(setProducts(res.data));
  //   });
  // }, []);

  /*
   * dispatch async action and get data
   */
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  /*
   * setState for handle CustomDialog
   */
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);

  // const [showAddComp, setShowAddComp] = useState(false);
  // const [edit, setEdit] = useState(false);
  const [editedObj, setEditedObj] = useState(null);

  const handleOpenAddDialog = () => {
    // setShowAddComp(!showAddComp)

    setIsOpenAdd(true);
    console.log(isOpenAdd);
  };
  const handleDialogAddClose = () => {
    setIsOpenAdd(false);
  };
  const handleOpenUpdateDialog = (obj) => {
    // setShowAddComp(!showAddComp)
console.log("edit");
setEditedObj(obj)
console.log(editedObj);
    setIsOpenUpdate(true);
    console.log(isOpenUpdate);
  };
  console.log(editedObj);
  // useEffect(() => {
  //   setEditedObj(obj)
  // }, [editedObj])
  const handleDialogUpdateClose = () => {
    setIsOpenUpdate(false);
  };

  /*
   * const states and function for pagination table
   */
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, products?.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  /*
   *  initial states & functions without redux
   */
  // const [products, setproducts] = useState([]);
  // useEffect(() => {
  //   const getproducts = async () => {
  //     const productsFromServer = await getAllProducts();
  //     console.log(productsFromServer);
  //     // setproducts(productsFromServer.data);
  //   };
  //   getproducts();
  // }, []);


  const handleEdit = (updatedProduct) => {
    //     const getTasks = async () => {
    //       const tasksFromServer = await deleteApiProduct();
    // console.log(tasksFromServer);
    // console.log(tasksFromServer.data);
    //       setTasks(tasksFromServer.data);
    //     };

    //     getTasks();
    putApiProduct(updatedProduct).then((res) => {
      if (res.status === 404) {
        console.log("error");
        console.log(res);
        // toast.error("Not defined");
      }
      console.log(res);
      console.log(updatedProduct);
      // setproducts(products.splice(updatedProduct.id-1,1,updatedProduct));
      // setproducts([...products,newProduct])
      // setproducts(products.filter((task) => task.id !== id));
    });
    console.log("edit put");

    //     const getproducts = async () => {
    //       const productsFromServer = await deleteApiProduct();
    // console.log(productsFromServer);
    //       setproducts(productsFromServer.data);
    //     };

    //     getproducts();
  };

  /*
   * handle edit product & and setState for get edited product
   */
 

  // const handleDialogOpenEdit = (productObj) => {
  //   setEdit(true)
  //   setIsOpen(true);
  //   console.log("edit");
  //   setEditedObj(productObj);
  //   console.log(editedObj);
  // };
  return (
    <main>
      <Container maxWidth="md">
        <Grid container justify="space-between" className={classes.grid}>
          <Grid item>
            <Typography>مدیریت کالاها</Typography>
          </Grid>
          <Grid item>
            <Button className={classes.btn} onClick={handleOpenAddDialog}>
              افزودن کالا
            </Button>
          </Grid>
        </Grid>
        <TableContainer className={classes.paper} component={Paper}>
          {products !== "Not found" && (
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  {/* <TableCell>#</TableCell> */}
                  {/* <TableCell>code</TableCell> */}
                  <TableCell>تصویر</TableCell>
                  <TableCell>نام کالا</TableCell>

                  <TableCell>دسته بندی</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products !== "Not found" &&
                  (rowsPerPage > 0
                    ? products?.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    : products
                  )?.map((row, index) => (
                    <TableRow key={row?.index}>
                      {/* <TableCell component="th" scope="row">
                      {product?.id}
                    </TableCell> */}
                      {/* <TableCell align="right">{user?.code}</TableCell> */}
                      <TableCell>
                        <img className={classes.img} src={row?.image} />
                      </TableCell>
                      <TableCell>{row?.title}</TableCell>
                      <TableCell>{row?.category}</TableCell>
                      <TableCell>
                        <Box
                        // onClick={handleOpenUpdateDialog}
                        onClick={()=>handleOpenUpdateDialog(row)}
                       
                          // onClick={()=>handleOpen(row)}
                          className={classes.box}
                        >
                          ویرایش
                        </Box>
                        <Box
                          // onClick={() => handleDel(row.id)}
                          //  onClick={()=>{dispatch(deleteProductById(index))}}
                          onClick={() => {
                            dispatch(deleteProductById(row.id));
                          }}
                          className={classes.box}
                        >
                          حذف
                        </Box>
                      </TableCell>
                    </TableRow>
                    // <ProductRow
                    //   // handleOpen={handleDialogOpenEdit}
                    //   // handleDel={handleDel}
                    //   //  handleEdit={handleEdit}
                    //   key={row.id}
                    //   row={row}
                    // />
                  ))}

                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: "کل", value: -1 }]}
                    colSpan={3}
                    count={products?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: { "aria-label": "تعداد ردیف در هر صفحه " },
                      native: true,
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          )}
        </TableContainer>
      </Container>
     {isOpenAdd && <CustomDialog
        isOpen={isOpenAdd}
        handleClose={handleDialogAddClose}
        className={classes.dialogTitle}
        title="افزودن/ویرایش کالا"
      >
        <AddProduct
          // products={products}
          handleClose={handleDialogAddClose}
        // editedObj={editedObj}
        // handleAdd={handleAdd}
        // handleEdit={handleEdit}
        />
      </CustomDialog>}
      {isOpenUpdate && <CustomDialog
        isOpen={isOpenUpdate}
        handleClose={handleDialogUpdateClose}
        className={classes.dialogTitle}
        title="افزودن/ویرایش کالا"
      >
    <EditProduct
     handleClose={handleDialogUpdateClose}
     editedObj={editedObj}
    //  handleAdd={handleAdd}
    // handleEdit={handleEdit}
     />
       
      </CustomDialog> }
    </main>
  );
};

export default Products;

// {showAddComp &&  <AddProduct
//   products={products}
//   handleClose={handleDialogClose}
//   editedObj={editedObj}
//   // handleAdd={handleAdd}
//   // handleEdit={handleEdit}
// />}
// {/* {edit &&  <EditProduct
//   handleClose={handleDialogClose}
//   editedObj={editedObj}
//   // handleAdd={handleAdd}
//   handleEdit={handleEdit}
// /> } */}
// {/* {!editedObj ? (
// <AddProduct
//   tasks={tasks}
//   handleClose={handleDialogClose}
//   editedObj={editedObj}
//   handleAdd={handleAdd}
//   handleEdit={handleEdit}
// />
// ) : (
// <EditProduct
//   handleClose={handleDialogClose}
//   editedObj={editedObj}
//   handleAdd={handleAdd}
//   handleEdit={handleEdit}
// />
// )} */}
// {/* // <AddProduct handleClose={handleDialogClose} editedObj={editedObj} handleAdd={handleAdd} handleEdit={handleEdit} /> */}

// const handleAdd = (newProduct) => {
//   //     const getproducts = async () => {
//   //       const productsFromServer = await deleteApiProduct();
//   // console.log(productsFromServer);
//   // console.log(productsFromServer.data);
//   //       setproducts(productsFromServer.data);
//   //     };

//   //     getproducts();
//   postNewProduct(newProduct).then((res) => {
//     if (res.status === 404) {
//       console.log("error");
//       console.log(res);
//       // toast.error("Not defined");
//     }
//     // setproducts([...products, newProduct]);
//     // setproducts(products.filter((task) => task.id !== id));
//   });
//   console.log("add");

//   //     const getproducts = async () => {
//   //       const productsFromServer = await deleteApiProduct();
//   // console.log(productsFromServer);
//   //       setproducts(productsFromServer.data);
//   //     };

//   //     getproducts();
// };

/*
 * Fetch products
 */
// const fetchproducts = async () => {
//   let res = await axios({
//     method: "get",
//     url: "http://localhost:5000/products",
//     headers: { "content-type": "application/json" },
//   }).catch((err) => console.log(err));
//   return res;
// };
// const fetchproducts = async () => {
//   try {
//     const response = await fetch(`http://localhost:5000/products`);
//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.log(err);
//     // toast.error("request failed!");
//   } finally {
//     console.log("it is done!!");
//   }
// };

// console.log(products);

// const handleAdd = (newProduct) => {
//   console.log("add");
//   dispatch(addNewProduct(newProduct))
//   //     const getproducts = async () => {
//   //       const productsFromServer = await deleteApiProduct();
//   // console.log(productsFromServer);
//   // console.log(productsFromServer.data);
//   //       setproducts(productsFromServer.data);
//   //     };

//   //     getproducts();
//   // postNewProduct(newProduct).then((res) => {
//   //   if (res.status === 404) {
//   //     console.log("error");
//   //     console.log(res);
//   //     // toast.error("Not defined");
//   //   }
//     // setproducts([...products, newProduct]);
//     // setproducts(products.filter((task) => task.id !== id));
//   }

//     const getproducts = async () => {
//       const productsFromServer = await deleteApiProduct();
// console.log(productsFromServer);
//       setproducts(productsFromServer.data);
//     };

//     getproducts();
// };
