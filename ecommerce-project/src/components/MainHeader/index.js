import React from "react";
import { AppBar, Toolbar, Grid, Link } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { useStyles } from "./styles";
import logoNew from "../../assets/images/logoNew.png"


function MainHeader() {
  const { header, appbar, img } = useStyles();

  return (
    <>
      <AppBar color="secondary" className={appbar} position="static" >
        <Toolbar className={header}>
          <Grid container alignItems="center">
            <Grid item>
              <img src={logoNew} className={img} alt="logo" />
            </Grid>
          </Grid>
          <Link href="/">
            <HomeIcon color="primary" />
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default MainHeader;
