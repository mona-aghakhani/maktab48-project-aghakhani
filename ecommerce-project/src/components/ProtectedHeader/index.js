import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Box,
  Tab,
  Tabs,
  Paper,
  // Link
} from "@material-ui/core";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { logout } from "../../utils/auth"
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom"
import { useLocation } from "react-router-dom"
const PublicHeader = () => {
  const {
    appbar, link, tab, tabs, indicator, grid, item1, item2, item3, boxLogout } = useStyles();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const location = useLocation();
  const history = useHistory();
  console.log(history);
  return (

    <AppBar className={appbar} position="relative">

      <Grid container className={grid}>
        <Grid item md={3} sm={2} xs={12} className={item1}>
          <Typography>پنل مدیریت فروشگاه</Typography>
        </Grid>
        <Grid
          item
          md={7}
          sm={8}
          xs={12}
          container
          spacing={1}
          className={item2}
        >
          {/* <Tabs
            // position="relative"
            classes={{ indicator: indicator }}
            // TabIndicatorProps={{ style: { background: "red",width:"50px" } }}
            value={value}
            // indicatorColor="secondary"
            textColor="black"
            onChange={handleChange}
            className={tabs}
            initialSelectedIndex={value}
            // initialSelectedIndex={2}
            // orientation={{xs:"vertical"}}
            // aria-label="disabled tabs example"
          >
            <Tab
              value={2}
              label="کالاها"
              className={tab}
              component={Link}
              href="/admin/products"
            />
            <Tab
              value={3}
              label="قیمت و موجودی"
              className={tab}
              component={Link}
              href="/admin/prices"
            />

            <Tab
              value={1}
              label="سفارش ها"
              component={Link}
              href="/admin/orders"
              className={tab}
            />
          </Tabs> */}
          <Tabs
            // position="relative"
            classes={{ indicator: indicator }}
            // TabIndicatorProps={{ style: { background: "red",width:"50px" } }}
            value={location.pathname}
            // indicatorColor="secondary"
            textColor="black"
            onChange={handleChange}
            className={tabs}
            initialSelectedIndex={value}
          // initialSelectedIndex={2}
          // orientation={{xs:"vertical"}}
          // aria-label="disabled tabs example"
          >
            <Tab
              value={"/admin/products"}
              label="کالاها"
              className={tab}
              component={Link}
              to="/admin/products"
            />
            <Tab
              value={"/admin/prices"}
              label="قیمت و موجودی"
              className={tab}
              component={Link}
              to="/admin/prices"
            />

            <Tab
              value={"/admin/orders"}
              label="سفارش ها"
              component={Link}
              to="/admin/orders"
              className={tab}
            />
          </Tabs>

        </Grid>
        <Grid item md={2} sm={2} xs={12} className={item3} container>
          <Link href="/" className={link}>
            {/* <Typography className={link} variant="body1" >بازگشت به سایت</Typography>  */}
            بازگشت به سایت
            </Link>
          <Box
            className={boxLogout}
            //  className={link} 
            onClick={logout} variant="p" >خروج</Box>

        </Grid>
      </Grid>


    </AppBar>

  );
};

export default PublicHeader;


