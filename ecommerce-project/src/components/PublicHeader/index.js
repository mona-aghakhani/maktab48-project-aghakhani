import {
 AppBar,
//   Toolbar,
   Typography,
    // Box,
     InputBase,
    Grid
} from '@material-ui/core'
import React from 'react';
import { NavLink } from "react-router-dom";
// import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
import { useStyles } from "./styles"

const StyledBadge = withStyles((theme) => ({
    badge: {
    //   right: -3,
    //   top: 13,
    left:"5px",
    //   border: `2px solid ${theme.palette.background.paper}`,
    //   padding: '0 4px',
      color:"white",
      background:'rgb(82, 195, 89)'
    },
  }))(Badge);


const PublicHeader = () => {
    const { appbar,
        //  box,
          link, search, searchIcon, inputRoot, inputInput, grid, item1, item2, item3,badge } = useStyles();
    return (
        <div>
            <AppBar className={appbar} position="static">
                {/* <Toolbar   className={appbar}> */}
                {/* <Grid container direction="row">
                    <Grid item> */}
                {/* <Box> */}
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
                    </Grid>
                    {/* </Box> */}
                    {/* </Grid> */}
                    {/* <Grid item alignItems="center">
                        <Grid item> */}
                    {/* <Box className={box}> */}
                    {/* <div> */}
                    <Grid item md={2} sm={4} xs={12} className={item3} container>
                      {/* <Grid item > */}
                        <NavLink to="/login" exact className={link}  >
                            <AccountCircleIcon/>
                           <Typography> مدیریت</Typography>
                    </NavLink >
                    {/* </Grid> */}
                    {/* <div style={{display:"flex"}}> */}
                    {/* <Grid item > */}
                        <NavLink to="/" className={link}>
                        <IconButton aria-label="cart" color="inherit">
      <StyledBadge badgeContent={0}
    //    badgeContent={numItems}
      >
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
                        {/* <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} className={badge}>
                            <LocalGroceryStoreIcon/>
                            </Badge>
            </IconButton>  */}
                            <Typography>سبد خرید</Typography>
                    </NavLink>
                    {/* </Grid> */}
                    {/* </div> */}
                        {/* <NavLink to="/admin/login" exact >
      login
      </NavLink> */}
                        {/* </div> */}
                        {/* </Grid>
                    <Grid item> */}
                        {/* <div> */}

                        {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton> */}
                        {/* </div>
                    </Box> */}
                        {/* </Grid>
                    </Grid>
                    </Grid> */}
                    </Grid>
                </Grid>
                {/* </Toolbar> */}
            </AppBar>

        </div>
    )
}

export default PublicHeader
