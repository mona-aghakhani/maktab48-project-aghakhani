import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container, Grid, Card, Box, CardContent } from '@material-ui/core';
// import Pagination from '@material-ui/lab/Pagination';
// import PaginationItem from '@material-ui/lab/PaginationItem';
import ReactPaginate from 'react-paginate'
import { useStyles } from "./styles";
import { useParams } from "react-router-dom";
import { getProducts } from "../../../store/actions/productActions"
const ProductGroup = () => {
    const { sidebar, progress,pagination,pages,active } = useStyles()
    /*
    * useParams and get productCategory
    */
    const { productCategory } = useParams()


    const products = useSelector((state) => state.allProducts.products);
    const categoryData = products.filter((item) => item.category === productCategory)
    // console.log(categoryData);
    const loading = useSelector((state) => state.allOrders.loading);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProducts());
    }, []);

    /*
    * useState and handlePagination
    */
    const [page, setPage] = useState(1)
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        // console.log(selectedPage);
        setPage(selectedPage+1)
    }



    return (
        <main>
            {loading && <CircularProgress className={progress} size={100} thickness={4} disableShrink />}
            {/* <Container maxWidth='lg'> */}
            <Grid container>
                {/* <div
         className={classes.toolbar}
          /> */}
                <Grid className={sidebar} item xs={12} sm={3}>
                    <Divider />
                    <List>
                        <ListItem>
                            <Typography variant="h6">کالاهای گروه لبنیات</Typography>
                        </ListItem>
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
                        <ListItem>
                            <Typography variant="h6">کالاهای گروه شوینده</Typography>
                        </ListItem>
                        <ListItem>  <Typography> پودر لباسشویی </Typography>   </ListItem>
                        <ListItem> <Typography>قرص ماشین ظرفشویی  </Typography>    </ListItem>
                        <ListItem>  <Typography>مایع دستشویی  </Typography> </ListItem>
                        <ListItem> <Typography>شیشه پاک کن  </Typography>  </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem>
                            <Typography variant="h6">کالاهای گروه  نوشیدنی</Typography>
                        </ListItem>
                        <ListItem>  <Typography> چایی  </Typography>   </ListItem>
                        <ListItem> <Typography> قهوه   </Typography>    </ListItem>
                        <ListItem>  <Typography>آبمیوه   </Typography> </ListItem>
                        <ListItem> <Typography>دلستر    </Typography>  </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem>
                            <Typography variant="h6">کالاهای گروه خوار وبار</Typography>
                        </ListItem>
                        <ListItem>  <Typography> برنج  </Typography>   </ListItem>
                        <ListItem> <Typography> قند   </Typography>    </ListItem>
                        <ListItem>  <Typography>روغن   </Typography> </ListItem>
                        <ListItem> <Typography>نبات    </Typography>  </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Container maxWidth="xl">
                        <Typography>search pagination sorting</Typography>

                        <Grid container spacing={8}>
                            {/* {categorydata?.map((card) => ( */}
                            <Grid item
                                // key={card}
                                xs={12} sm={4} md={4}
                            //  lg={3}
                            >
                                <Card
                                //  className={cardItem}
                                >
                                    <Box
                                    //  className={boxContainer}

                                    >
                                        <Box
                                        //  className={box}
                                        >
                                            <img
                                                //  className={img}

                                                // src={card.image}
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

                                            {/* {card.title} */}
                                        </Typography>
                                        <Typography color="primary" variant="h5">
                                            {/* {(Number(card.price)).toLocaleString()}   تومان */}

                                        </Typography>
                                    </CardContent>

                                </Card>
                            </Grid>
                            {/* ))} */}
                        </Grid>
                        <ReactPaginate
                            previousLabel={"prev"}
                            nextLabel={"next"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            // pageCount={this.state.pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName={pagination}
                            subContainerClassName={pages, pagination}
                            activeClassName={active} />
                    </Container>
                </Grid>
            </Grid>
            {/* </Container> */}
        </main>
    )
}

export default ProductGroup
