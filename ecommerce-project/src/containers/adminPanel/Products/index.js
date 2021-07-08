import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
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
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import ProductRow from "../../../components/productRow";
import { CustomDialog } from "../../../components/CustomDialog";
import AddProduct from "../../../components/AddProduct";
import EditProduct from "../../../components/EditProduct";
import { useAxios } from "../../../api/products/useAxios";
import {
  getProducts,
  setProducts,
} from "../../../store/actions/productActions";
import {
  getAllProducts,
  deleteApiProduct,
  postNewProduct,
  putUpdatedProduct,
} from "../../../api/products/products";
// import {deleteApiProduct} from "../../api/products/products"
import axios from "axios";
const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles({
  table: {
    minWidth: 650,
    // direction:'rtl',
    // marginTop: 50,
    // borderTop: "1px solid gray",
  },
  paper: {
    width: "90%",
    // height:"200px",
    // margin: theme.spacing(5),
    // padding: theme.spacing(3)
    margin: "20px auto",
    // background:"lightgray"
    background: "rgb(214,230,215,0.6)",
  },
  grid: {
    width: "90%",
    margin: "20px auto",
  },
  btn: {
    background: "rgb(103,182,108)",
    padding: " 5px 10px",
    "&:hover": {
      background: "primary",
    },
  },
  dialogTitle: {
    fontSize: "17px",
  },
});
const Products = () => {
  const [data, setData] = useState([]);
  const [tasks, setTasks] = useState([]);
  // const [products, setProducts] = useState([]);
  // const { response, loading, error } = useAxios({
  //   method: "get",
  //   url: "http://localhost:5000/products",
  //   headers: { "content-type": "application/json" }
  // });
  // console.log(response, loading, error);
  // fetchData()
  // console.log(notifToast, fetchData, response, loading, error);

  /*
   * useselector & get products
   */
  const products = useSelector((state) => state.allProducts.products);
  console.log("products", products);

  /*
   * const states for pagination table
   */
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, tasks?.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await getAllProducts();
      console.log(tasksFromServer);
      setTasks(tasksFromServer.data);
    };

    getTasks();
  }, []);
  const handleDel = (id) => {
    //     const getTasks = async () => {
    //       const tasksFromServer = await deleteApiProduct();
    // console.log(tasksFromServer);
    // console.log(tasksFromServer.data);
    //       setTasks(tasksFromServer.data);
    //     };

    //     getTasks();
    deleteApiProduct(id).then((res) => {
      if (res.status === 404) {
        console.log("error");
        console.log(res);
        // toast.error("Not defined");
      }
      setTasks(tasks.filter((task) => task.id !== id));
    });
    //     const getTasks = async () => {
    //       const tasksFromServer = await deleteApiProduct();
    // console.log(tasksFromServer);
    //       setTasks(tasksFromServer.data);
    //     };

    //     getTasks();
  };
  const handleAdd = (newProduct) => {
    //     const getTasks = async () => {
    //       const tasksFromServer = await deleteApiProduct();
    // console.log(tasksFromServer);
    // console.log(tasksFromServer.data);
    //       setTasks(tasksFromServer.data);
    //     };

    //     getTasks();
    postNewProduct(newProduct).then((res) => {
      if (res.status === 404) {
        console.log("error");
        console.log(res);
        // toast.error("Not defined");
      }
      setTasks([...tasks, newProduct]);
      // setTasks(tasks.filter((task) => task.id !== id));
    });
    console.log("add");

    //     const getTasks = async () => {
    //       const tasksFromServer = await deleteApiProduct();
    // console.log(tasksFromServer);
    //       setTasks(tasksFromServer.data);
    //     };

    //     getTasks();
  };
  const handleEdit = (updatedProduct) => {
    //     const getTasks = async () => {
    //       const tasksFromServer = await deleteApiProduct();
    // console.log(tasksFromServer);
    // console.log(tasksFromServer.data);
    //       setTasks(tasksFromServer.data);
    //     };

    //     getTasks();
    putUpdatedProduct(updatedProduct).then((res) => {
      if (res.status === 404) {
        console.log("error");
        console.log(res);
        // toast.error("Not defined");
      }
      console.log(res);
      console.log(updatedProduct);
      setTasks(tasks.splice(updatedProduct.id-1,1,updatedProduct));
      // setTasks([...tasks,newProduct])
      // setTasks(tasks.filter((task) => task.id !== id));
    });
    console.log("edit put");

    //     const getTasks = async () => {
    //       const tasksFromServer = await deleteApiProduct();
    // console.log(tasksFromServer);
    //       setTasks(tasksFromServer.data);
    //     };

    //     getTasks();
  };

  /*
   * Fetch Tasks
   */
  // const fetchTasks = async () => {
  //   let res = await axios({
  //     method: "get",
  //     url: "http://localhost:5000/products",
  //     headers: { "content-type": "application/json" },
  //   }).catch((err) => console.log(err));
  //   return res;
  // };
  // const fetchTasks = async () => {
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

  console.log(tasks);

  const dispatch = useDispatch();
  /*
   * dispatch async action and get data
   */
  //   useEffect(() => {
  //     const getTasks = async () => {
  //       const tasksFromServer = await getAllProducts();

  //       setData(tasksFromServer);
  //     };

  //     getTasks();
  //     console.log(data);
  //     // setData(getAllProducts())
  //     // console.log(data);
  //     // getAllProducts().then((res) => {
  //     //   console.log(res);
  //     //   setData(res.data)
  //     // })
  //     // console.log(data);
  //     //  getAllProducts().then((res) => {
  //     //   // console.log("res", res.data);
  //     //   dispatch(setProducts(res.data));
  //     // });
  //     // console.log();

  //     // getAllProducts()
  // //     fetchData()
  // // if (products) {
  // //   setData(products)
  // // }
  //     // dispatch(getProducts());
  //   }, []);
  /*
   * setState for handle CustomDialog
   */
  const [isOpen, setIsOpen] = useState(false);

  const handleDialogOpen = () => {
    setIsOpen(true);
  };
  const handleDialogClose = () => {
    setIsOpen(false);
  };
  /*
   * handle edit product & and setState for get edited product
   */
  const [editedObj, setEditedObj] = useState(null);

  const handleDialogOpenEdit = (productObj) => {
    setIsOpen(true);
    console.log("edit");
    setEditedObj(productObj);
    console.log(editedObj);
  };
  return (
    <main>
      <Container maxWidth="md">
        <Grid container justify="space-between" className={classes.grid}>
          <Grid item>
            <Typography>مدیریت کالاها</Typography>
          </Grid>
          <Grid item>
            <Button className={classes.btn} onClick={handleDialogOpen}>
              افزودن کالا
            </Button>
          </Grid>
        </Grid>
        <TableContainer className={classes.paper} component={Paper}>
          {tasks !== "Not found" && (
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
                {tasks !== "Not found" &&
                  (rowsPerPage > 0
                    ? tasks?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : tasks
                  )?.map((row) => (
                    <ProductRow
                      handleOpen={handleDialogOpenEdit}
                      handleDel={handleDel}
                      //  handleEdit={handleEdit}
                      key={row.id}
                      row={row}
                    />
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
                    count={tasks?.length}
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
      <CustomDialog
        isOpen={isOpen}
        handleClose={handleDialogClose}
        className={classes.dialogTitle}
        title="افزودن/ویرایش کالا"
      >
        {!editedObj ? (
          <AddProduct
            tasks={tasks}
            handleClose={handleDialogClose}
            editedObj={editedObj}
            handleAdd={handleAdd}
            handleEdit={handleEdit}
          />
        ) : (
          <EditProduct
            handleClose={handleDialogClose}
            editedObj={editedObj}
            handleAdd={handleAdd}
            handleEdit={handleEdit}
          />
        )}
        {/* // <AddProduct handleClose={handleDialogClose} editedObj={editedObj} handleAdd={handleAdd} handleEdit={handleEdit} /> */}
      </CustomDialog>
    </main>
  );
};

export default Products;
