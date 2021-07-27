import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Table, TableBody, TableHead, TableCell, TableContainer, TableFooter, TableRow, TablePagination,
  Paper,
  Typography,
  Grid,

  Container,
  Box,
  TableSortLabel, Radio, RadioGroup, FormControlLabel, FormControl
} from "@material-ui/core";
import { useStyles2 } from "./styles";
import { TablePaginationActions } from "./TablePaginationActions";

import { CustomDialog } from "../../../components/CustomDialog";


import { getOrders } from "../../../store/actions/ordersActions";
// import { getAllProducts, deleteApiProduct, postNewProduct, putApiProduct } from "../../../api/products/products";
import CircularProgress from '@material-ui/core/CircularProgress';
import OrderDetail from "../../../components/OrderDetail";

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
  {
    id: 'orderTime', label: 'زمان ثبت سفارش',
    disableSorting: false
  },
  { id: 'order', label: '', disableSorting: true },
]
const styles = {
  activeSortIcon: {
    opacity: 1,
    color: "red"
  },

  inactiveSortIcon: {
    opacity: 1,
  },
  icon: {
    display: 'none',
    color: "red"
  },
  active: {
    '& $icon': {
      display: 'inline',
    },
  },
};

function EnhancedTableHead(props) {
  const {

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
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
                // style={styles}
                // style={{ opacity: (true === headCell.disableSorting ) ? 0 :1 }}
                classes={{
                  // Override with the active class if this is the selected column or inactive otherwise
                  icon: ((true === headCell.disableSorting) ? styles.activeSortIcon : styles.inactiveSortIcon)
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


const Orders = () => {
  /*
   * use useselector & dispatch for get products and handle api calls
   */
  const orders = useSelector((state) => state.allOrders.orders);
  const deliveredOrders = orders.filter((item) => item.status === "تحویل شده")
  const waitingOrders = orders.filter((item) => item.status === " در انتظار ارسال")
  /*
  * initial states & functions for handle filtering with Radio
  */

  const [value, setValue] = useState("در انتظار ارسال");


  const handleChange = (event) => {
    setValue(event.target.value);
  };
  let data = value === "در انتظار ارسال" ? waitingOrders : deliveredOrders;



  const loading = useSelector((state) => state.allOrders.loading);

  const dispatch = useDispatch();
  /*
   * dispatch async action and get data
   */
  useEffect(() => {
    dispatch(getOrders());
  }, []);
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
   * setState and functions for handle CustomDialog
   */
  const [isOpen, setIsOpen] = useState(false);
  // const [isOpenUpdate, setIsOpenUpdate] = useState(false);


  const [orderObj, setOrderObj] = useState(null);

  const handleOpen = (obj) => {
    setOrderObj(obj)
    setIsOpen(true);

    // console.log(isOpenAdd);
  };
  const handleClose = () => {
    setIsOpen(false);
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
        <Grid container justify="space-between" alignItems="center" className={classes.grid}>
          <Grid item>
            <Typography>مدیریت سفارش ها</Typography>
          </Grid>
          <Grid item >
            <FormControl component="fieldset">
              {/* <FormLabel component="legend">Gender</FormLabel> */}
              <RadioGroup aria-label="فیلتر" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="در انتظار ارسال" control={<Radio />} label="سفارش های در انتظار ارسال" />
                <FormControlLabel value="تحویل شده" control={<Radio />} label="سفارش های تحویل شده" />

              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        <TableContainer className={classes.paper} component={Paper}>
          {orders !== "Not found"
            && (
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
                  rowCount={data.length}
                />


                <TableBody>
                  {stableSort(data, getComparator(order, orderBy))?.slice(
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
                        <TableCell>{Number(row?.total).toLocaleString()}</TableCell>
                        <TableCell>{row?.orderTime}</TableCell>
                        <TableCell>
                          <Box onClick={() => handleOpen(row)} className={classes.box}> بررسی سفارش </Box>

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
                      count={data?.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      labelRowsPerPage='تعداد سطر های هر صفحه'
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
      {isOpen && <CustomDialog
        isOpen={isOpen}
        handleClose={handleClose}
        className={classes.dialogTitle}
        title="نمایش سفارش"
      >
        <OrderDetail orderObj={orderObj} delivered={value} handleClose={handleClose} />
      </CustomDialog>}

    </main>
  );
};

export default Orders;

