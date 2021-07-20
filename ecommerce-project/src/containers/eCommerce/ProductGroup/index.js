import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Divider from '@material-ui/core/Divider';
// import { useHistory } from "react-router-dom"
// import Drawer from '@material-ui/core/Drawer';
// import Hidden from '@material-ui/core/Hidden';
// import IconButton from '@material-ui/core/IconButton';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import MailIcon from '@material-ui/icons/Mail';
// import MenuIcon from '@material-ui/icons/Menu';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import CircularProgress from '@material-ui/core/CircularProgress';
import {
    Container, Grid, Card, Box, CardContent, MenuItem, Select,
    //  InputBase,
    FormControl,
    //  InputLabel,   TextField,
      OutlinedInput
} from '@material-ui/core';
// import SearchIcon from "@material-ui/icons/Search";
// import Pagination from '@material-ui/lab/Pagination';
// import PaginationItem from '@material-ui/lab/PaginationItem';
import ReactPaginate from 'react-paginate'
import { useStyles } from "./styles";
import { NavLink, useParams } from "react-router-dom";
// import { getProducts, setLoading } from "../../../store/actions/productActions"
import { getChangeList,getAllCategoryList } from "../../../api/products/products"
const ProductGroup = () => {
    const { sidebar, progress, pagination, pages,nav,activeNav,
         select, active,mainGrid, cardContent, cardItem, box, boxContainer, label, img, containerPaginate, mainContainer, sort, sortTilte,
        //   headerCategory, searchIcon, inputInput, inputRoot
         } = useStyles()
    /*
    * useParams and get productCategory
    */
    const { productCategory } = useParams()
// console.log(productCategory);
// const history = useHistory();
// console.log(history);
    // const products = useSelector((state) => state.allProducts.products);
    // const categoryData = products.filter((item) => item.category === productCategory)
    // const pageCount = Math.ceil(Number(categoryData.length) / 4)
    // console.log(pageCount);
    // console.log(categoryData);
    // const loading = useSelector((state) => state.allOrders.loading);
    // const dispatch = useDispatch();
    const [data, setData] = useState([])
    /*
     * useState and handlePagination
    */
    const [page, setPage] = useState(1)
    // const [pageCount, setPageCount] = useState(2)

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        // console.log(selectedPage);
        setPage(selectedPage + 1)
    }
    /*
    * useState and handleSorting
    */
    const [valueSort, setValueSort] = useState('')
    const [sortParam, setSortParam] = useState('id')
    const [order, setOrder] = useState('desc')
    const handleSort = (e) => {
        setValueSort(e.target.value)
        if (e.target.value === 'جدید ترین') {
            setSortParam('id')
            setOrder('desc')
        }
        if (e.target.value === "قدیمی ترین") {
            setSortParam('id')
            setOrder('asc')
        }
        if (e.target.value === "گران ترین") {
            setSortParam('price')
            setOrder('desc')
        }
        if (e.target.value === "ارزان ترین") {
            setSortParam('price')
            setOrder('asc')
        }

    }
    /*
    * useState and handleSearching
    */
    const [search, setSearch] = useState("")


    // console.log(sortParam);
    const [categoryData, setCategoryData] = useState([])
    
    useEffect(() => {
        // dispatch(getProducts());
        getAllCategoryList(productCategory).then(res=>setCategoryData(res.data))
    }, [productCategory]);
    console.log(categoryData);
    const pageCount = Math.ceil(Number(categoryData.length) / 4)
    useEffect(() => {
        // setLoading
        if (search !== '') {
            console.log("search");
            const filteredData = categoryData.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
            console.log(filteredData);
            setData(filteredData)

        } else {
            getChangeList(productCategory, sortParam, order, page).then(res => {
                console.log(res);
                setData(res.data)
            })
        }
        // console.log(data);
        // return () => {

        // }
    }, [sortParam, page, order, search,categoryData])
    console.log(data);



    return (
        <main>
            {/* {loading && <CircularProgress className={progress} size={100} thickness={4} disableShrink />} */}
            {/* <Container maxWidth='lg'> */}
            <Grid container className={mainGrid}>
                {/* <div
         className={classes.toolbar}
          /> */}
                <Grid className={sidebar} item xs={12} sm={3}>
                    <Divider />
                    <List>
                        <NavLink exact to={"/listProducts/لبنیات"} className={nav} activeClassName={activeNav}>
                        <ListItem>
                            <Typography variant="h6">کالاهای گروه لبنیات</Typography>
                        </ListItem>
                        </NavLink>
                        <ListItem>  <Typography> ماست </Typography>   </ListItem>
                        <ListItem> <Typography>پنیر  </Typography>    </ListItem>
                        <ListItem>  <Typography>شیر  </Typography> </ListItem>
                        <ListItem> <Typography>کره  </Typography>  </ListItem>
                        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
                    </List>
                    <Divider />
                    <List>
                    <NavLink exact to={"/listProducts/شوینده"} className={nav} activeClassName={activeNav}>
                        <ListItem>
                            <Typography variant="h6">کالاهای گروه شوینده</Typography>
                        </ListItem>
                        </NavLink>
                        <ListItem>  <Typography> پودر لباسشویی </Typography>   </ListItem>
                        <ListItem> <Typography>قرص ماشین ظرفشویی  </Typography>    </ListItem>
                        <ListItem>  <Typography>مایع دستشویی  </Typography> </ListItem>
                        <ListItem> <Typography>شیشه پاک کن  </Typography>  </ListItem>
                    </List>
                    <Divider />
                    <List>
                    <NavLink exact to={"/listProducts/نوشیدنی"}
                     className={nav} 
                     activeClassName={activeNav}>
                        <ListItem>
                            <Typography variant="h6">کالاهای گروه  نوشیدنی</Typography>
                        </ListItem>
                        </NavLink>
                        <ListItem>  <Typography> چایی  </Typography>   </ListItem>
                        <ListItem> <Typography> قهوه   </Typography>    </ListItem>
                        <ListItem>  <Typography>آبمیوه   </Typography> </ListItem>
                        <ListItem> <Typography>دلستر    </Typography>  </ListItem>
                    </List>
                    <Divider />
                    <List>
                    <NavLink exact to={"/listProducts/خواروبار"}
                     className={nav}
                      activeClassName={activeNav}>
                        <ListItem>
                            <Typography variant="h6">کالاهای گروه خوار وبار</Typography>
                        </ListItem>
                        </NavLink>
                        <ListItem>  <Typography> برنج  </Typography>   </ListItem>
                        <ListItem> <Typography> قند   </Typography>    </ListItem>
                        <ListItem>  <Typography>روغن   </Typography> </ListItem>
                        <ListItem> <Typography>نبات    </Typography>  </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Container maxWidth="xl" className={mainContainer}>
                        {/* <Grid container spacing={2} > */}
                        <Grid container spacing={4} alignItems="center" justify="space-between"
                        //  className={headerCategory}
                        >

                            <Grid item xs={12} sm={3} md={3} className={sort} >



                                <Typography className={sortTilte}>ترتیب:</Typography>
                                <FormControl variant="outlined"
                                // className={classes.formControl}
                                >
                                    {/* <InputLabel 
                                className={label}
                                //   id="demo-simple-select-outlined-label"
                                  shrink
                                     htmlFor="component-outlined"
                                     >
                                         ترتیب
                                         </InputLabel> */}
                                    <Select
                                        //  labelId="demo-simple-select-outlined-label"
                                        id="component-outlined"
                                        value={valueSort}
                                        // fullWidth
                                        onChange={(e) => handleSort(e)}
                                        // onChange={(e) => setSortParam(e.target.value)}
                                        label="جدیدترین"
                                        className={select}
                                    >
                                        <MenuItem value=''>
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={"جدیدترین"}>جدیدترین</MenuItem>
                                        <MenuItem value={"قدیمی ترین"}>قدیمی ترین</MenuItem>
                                        <MenuItem value={"گران ترین"}>گران ترین</MenuItem>
                                        <MenuItem value={"ارزان ترین"}>ارزان ترین</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                {/* <hr/> */}
                                <Divider />
                            </Grid>
                            <Grid item xs={12} sm={3} md={3}>
                                {/* <div className={search}>
                            <div className={searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="جستجو..."
                                classes={{
                                    root: inputRoot,
                                    input: inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div> */}
                                {/* <SearchIcon /> */}
                                {/* <TextField
                                    variant="outlined"
                                    placeholder="جستجو... "
                                    color="primary"
                                    fullWidth
                                    name="جستجو"
                                    className={search}
                                    // value={title}
                                    onChange={(e) => setSearch(e.target.value)}
                                /> */}
                                <OutlinedInput
                                    variant="outlined"
                                    placeholder="جستجو... "
                                    color="primary"
                                    fullWidth
                                    name="جستجو"
                                    className={search}
                                    // value={title}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </Grid>

                        </Grid>

                        {/* </Grid> */}
                        {/* <Typography>search pagination sorting</Typography> */}

                        <Grid container spacing={8}>
                            {data?.map((card) => (
                                <Grid item
                                    key={card}
                                    xs={12} sm={6} md={6}
                                
                                    
                                //  lg={3}
                                >
                                    <Card
                                        className={cardItem}
                                    >
                                        <Box
                                            className={boxContainer}

                                        >
                                            <Box
                                                className={box}
                                            >
                                                <img
                                                    className={img}

                                                    src={card.image}
                                                    alt="کالا" />
                                            </Box>
                                        </Box>
                                        {/* <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/random"
            title="Image title"
          /> */}
                                        <CardContent
                                        //   className={classes.cardContent}
                                        >
                                            <Typography gutterBottom variant="h5" component="h5">

                                                {card.title}
                                            </Typography>
                                            <Typography color="primary" variant="h5">
                                                {(Number(card.price)).toLocaleString()}   تومان

                                        </Typography>
                                        </CardContent>

                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid className={containerPaginate}>
                            <ReactPaginate
                                previousLabel={"قبلی"}
                                nextLabel={"بعدی"}
                                // breakLabel={"..."}
                                // breakClassName={"break-me"}
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={handlePageClick}
                                containerClassName={pagination}
                                // subContainerClassName={pages, pagination}
                                activeClassName={active} />
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
            {/* </Container> */}
        </main>
    )
}

export default ProductGroup
