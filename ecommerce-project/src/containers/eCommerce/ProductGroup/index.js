import React, { useEffect, useState } from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { Container, Grid, Card, Box, CardContent, MenuItem, Select, FormControl, OutlinedInput } from '@material-ui/core';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ReactPaginate from 'react-paginate'
import { useStyles } from "./styles";
import { NavLink, useParams, Link } from "react-router-dom";

import { getChangeList, getAllCategoryList } from "../../../api/products/products"
const ProductGroup = () => {
    const { sidebar, pagination, nav, activeNav, link, select, active, mainGrid, cardItem, box, boxContainer, img, containerPaginate, mainContainer, sort, sortTilte } = useStyles()
    /*
    * useParams and get productCategory
    */
    const { productCategory } = useParams()


    // use redux

    // const products = useSelector((state) => state.allProducts.products);
    // const categoryData = products.filter((item) => item.category === productCategory)
    // const pageCount = Math.ceil(Number(categoryData.length) / 4)

    const [data, setData] = useState([])
    /*
     * useState and handlePagination(use ReactPaginate)
    */
    const [page, setPage] = useState(1)
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

    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        // dispatch(getProducts());
        getAllCategoryList(productCategory).then(res => setCategoryData(res.data))
    }, [productCategory]);

    const pageCount = Math.ceil(Number(categoryData.length) / 4)
    useEffect(() => {

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

    }, [sortParam, page, order, search, categoryData])




    return (
        <main>

            <Grid container className={mainGrid}>

                <Grid className={sidebar} item xs={12} sm={3}>
                    <Divider />
                    <List>
                        <NavLink exact to={"/listProducts/لبنیات"} className={nav} activeClassName={activeNav}>
                            <ListItem>
                                <AssignmentTurnedInIcon />
                                <Typography variant="h6">کالاهای گروه لبنیات</Typography>
                            </ListItem>
                        </NavLink>
                        <ListItem>  <Typography> ماست </Typography>   </ListItem>
                        <ListItem> <Typography>پنیر  </Typography>    </ListItem>
                        <ListItem>  <Typography>شیر  </Typography> </ListItem>
                        <ListItem> <Typography>کره  </Typography>  </ListItem>

                    </List>
                    <Divider />
                    <List>
                        <NavLink exact to={"/listProducts/شوینده"} className={nav} activeClassName={activeNav}>
                            <ListItem>
                                <AssignmentTurnedInIcon />
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
                                <AssignmentTurnedInIcon />
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
                                <AssignmentTurnedInIcon />
                                <Typography variant="h6">کالاهای گروه خواروبار</Typography>
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

                        <Grid container spacing={4} alignItems="center" justify="space-between"
                        //  className={headerCategory}
                        >

                            <Grid item xs={12} sm={3} md={3} className={sort} >



                                <Typography className={sortTilte}>ترتیب:</Typography>
                                <FormControl variant="outlined"
                                // className={classes.formControl}
                                >

                                    <Select

                                        id="component-outlined"
                                        value={valueSort}
                                        // fullWidth
                                        onChange={(e) => handleSort(e)}
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



                        <Grid container spacing={8}>
                            {data?.map((card) => (

                                <Grid item
                                    key={card}
                                    xs={12} sm={6} md={6}
                                //  lg={3}
                                >
                                    <Link exact to={`/product/${card.id}`} className={link}>

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

                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid className={containerPaginate}>
                            <ReactPaginate
                                previousLabel={"قبلی"}
                                nextLabel={"بعدی"}

                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={handlePageClick}
                                containerClassName={pagination}

                                activeClassName={active} />
                        </Grid>
                    </Container>
                </Grid>
            </Grid>

        </main>
    )
}

export default ProductGroup
