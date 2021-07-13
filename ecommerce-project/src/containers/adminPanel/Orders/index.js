import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Table, TableBody,TableHead,TableCell,TableContainer,TableFooter,TableRow,TablePagination,
  Paper,
  Typography,
  Grid,
  Button,
  Container,
  Box,
  TableSortLabel,Radio,RadioGroup,FormControlLabel,FormControl,FormLabel 
} from "@material-ui/core";
import { useStyles2 } from "./styles";
import { TablePaginationActions } from "./TablePaginationActions";

import { CustomDialog } from "../../../components/CustomDialog";
import AddProduct from "../../../components/AddProduct";
import EditProduct from "../../../components/EditProduct";

import { setOrders, getOrders } from "../../../store/actions/ordersActions";
// import { getAllProducts, deleteApiProduct, postNewProduct, putApiProduct } from "../../../api/products/products";
import CircularProgress from '@material-ui/core/CircularProgress';

/*
* functions and states for handle sorting
*/

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}
const headCells = [
  { id: 'name', label: 'نام کاربر', disableSorting: true },
  { id: 'total', label: 'مجموع مبلغ', disableSorting: false },
  { id: 'orderTime', label: 'زمان ثبت سفارش',
   disableSorting: false
   },
  { id: 'order', label: '', disableSorting: true },
]
const styles = {
  activeSortIcon: {
    // "& > :not(nth-of-child(2))": {
      // fontSize: "1.25rem",
      opacity:1,
      color:"red"
      // fontWeight: 600
    // }
    // opacity: 1,
    // color:"black"
  },
  // Half visible for inactive icons
  inactiveSortIcon: {
    opacity: 1,
  },
  icon: {
      display: 'none',
      color:"red"
  },
  active: {
      '& $icon': {
          display: 'inline',
      },
  },
};
// const styles = theme => ({
//   // Fully visible for active icons
//   activeSortIcon: {
//     opacity: 1,
//   },
//   // Half visible for inactive icons
//   inactiveSortIcon: {
//     opacity: 0.4,
//   },
// });
function EnhancedTableHead(props) {
  const {
    classes,
    order,
    orderBy,
    onRequestSort
  } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
          olSpan={1}
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
          >
             {headCell.disableSorting ? headCell.label :
            <TableSortLabel
              active={orderBy === headCell.id }
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              // style={styles}
              // style={{ opacity: (true === headCell.disableSorting ) ? 0 :1 }}
              classes={{
                // Override with the active class if this is the selected column or inactive otherwise
                icon: ((true === headCell.disableSorting) ? styles.activeSortIcon : styles.inactiveSortIcon ) 
                // icon: ((orderBy === 'category') ? styles.activeSortIcon : styles.inactiveSortIcon ) 
                // icon:  classes.activeSortIcon 
                }}
            >
              {headCell.label}
            </TableSortLabel>
             }
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


const Products = () => {
  /*
   * use useselector & dispatch for get products and handle api calls
   */
  const orders = useSelector((state) => state.allOrders.orders);
  console.log(orders);
  // const products=orders.map((order)=>order.products)
  // console.log(products);
  const loading = useSelector((state) => state.allOrders.loading);
  console.log(loading);
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
    dispatch(getOrders());
  }, []);

  /*
   * setState and functions for handle CustomDialog
   */
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);


  const [editedObj, setEditedObj] = useState(null);

  const handleOpenAddDialog = () => {
    setIsOpenAdd(true);
    console.log(isOpenAdd);
  };
  const handleDialogAddClose = () => {
    setIsOpenAdd(false);
  };
  const handleOpenUpdateDialog = (obj) => {
    // console.log("edit");
    setEditedObj(obj)
    // console.log(editedObj);
    setIsOpenUpdate(true);
  };
  // console.log(editedObj);

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
    rowsPerPage - Math.min(rowsPerPage, orders?.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



  const [order, setOrder] = useState()
  const [orderBy, setOrderBy] = useState()

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
/*
* initial states & functions for handle filtering with Radio
*/
// const [value, setValue] = React.useState('female');

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };
// <FormControl component="fieldset">
//       <FormLabel component="legend">Gender</FormLabel>
//       <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
//         <FormControlLabel value="female" control={<Radio />} label="Female" />
//         <FormControlLabel value="male" control={<Radio />} label="Male" />
//         <FormControlLabel value="other" control={<Radio />} label="Other" />
//         <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
//       </RadioGroup>
//     </FormControl>
  /*
   *  initial states & functions without redux
   */
  // const [orders, setorders] = useState([]);
  // useEffect(() => {
  //   const getproducts = async () => {
  //     const productsFromServer = await getAllProducts();
  //     console.log(productsFromServer);
  //     // setproducts(productsFromServer.data);
  //   };
  //   getproducts();
  // }, []);


  return (
    <main
    //  style={{height:"80vh"}}
    >
      {loading && <CircularProgress className={classes.progress} size={100} thickness={4} disableShrink />}
      {!loading && <Container maxWidth="md">
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
          {orders !== "Not found" && (
            <Table className={classes.table}>
              <EnhancedTableHead
                classes={{
                  icon: classes.icon,
                  active: classes.active
                }}
                // classes={classes}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={orders.length}
              />


              <TableBody>
                {stableSort(orders, getComparator(order, orderBy))?.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
                  // : products
                  // )?
                  .map((row, index) => (
                    <TableRow key={row?.index}>

                      <TableCell>
                        {row?.fullName}
                        {/* <img className={classes.img} src={row?.image} /> */}
                      </TableCell>
                      <TableCell>{row?.total}</TableCell>
                      <TableCell>{row?.orderTime}</TableCell>
                      <TableCell>
                        <Box onClick={() => handleOpenUpdateDialog(row)}   className={classes.box}> ویرایش </Box>
                        {/* <Box onClick={() => { dispatch(deleteProductById(row.id)); }} className={classes.box} > حذف</Box> */}
                      </TableCell>
                    </TableRow>

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
                    count={orders?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    labelRowsPerPage=''
                    // classes={{
                    //   toolbar: classes.toolbar,
                    //   caption: classes.caption
                    // }}
                    // SelectProps={{
                    //   inputProps: { "aria-label": "none " },
                    //   // variant="",
                    //   native: true,

                    // }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          )}
        </TableContainer>
      </Container>}
      {isOpenAdd && <CustomDialog
        isOpen={isOpenAdd}
        handleClose={handleDialogAddClose}
        className={classes.dialogTitle}
        title="افزودن/ویرایش کالا"
      >
        <AddProduct handleClose={handleDialogAddClose} />
      </CustomDialog>}
      {isOpenUpdate && <CustomDialog
        isOpen={isOpenUpdate}
        handleClose={handleDialogUpdateClose}
        className={classes.dialogTitle}
        title="افزودن/ویرایش کالا"
      >
        <EditProduct
          handleClose={handleDialogUpdateClose}
          editedObj={editedObj} />

      </CustomDialog>}
    </main>
  );
};

export default Products;

