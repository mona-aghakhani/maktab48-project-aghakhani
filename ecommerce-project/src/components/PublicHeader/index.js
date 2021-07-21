import React from 'react';
import { NavLink } from "react-router-dom";
import { AppBar, Typography, Grid, Badge, IconButton } from '@material-ui/core'
// import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useStyles } from "./styles"

const StyledBadge = withStyles((theme) => ({
    badge: {
        left: "5px",
        color: "white",
        background: 'rgb(82, 195, 89)'
    },
}))(Badge);


const PublicHeader = () => {
    const { appbar, link, grid, item1, item2, item3,svg } = useStyles();
    return (
        <div>
            <AppBar className={appbar} position="static">

                <Grid container className={grid} >
                    <Grid item md={3} sm={2} xs={12} className={item1}>
                        <Typography>
                            فروشگاه کسب و کالا
                    </Typography>
                    </Grid>
                    <Grid
                        item
                        md={7}
                        sm={6}
                        xs={12}
                        container
                        spacing={1}
                        className={item2}
                    >
                    </Grid>
                    <Grid item md={2} sm={4} xs={12} className={item3} container>
                        <NavLink to="/login" exact className={link}  >
                            <AccountCircleIcon className={svg} />
                            <Typography> مدیریت</Typography>
                        </NavLink >
                        <NavLink to="/Cart" className={link}>
                            <IconButton aria-label="cart" color="inherit">
                                <StyledBadge badgeContent={0}
                                //    badgeContent={numItems}
                                >
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                            <Typography>سبد خرید</Typography>
                        </NavLink>
                    </Grid>
                </Grid>
            </AppBar>

        </div>
    )
}

export default PublicHeader
