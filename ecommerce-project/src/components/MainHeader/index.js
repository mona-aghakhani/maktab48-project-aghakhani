import React from "react";

import {
  AppBar,
  Toolbar,

  // InputBase,
   Grid
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
// import SearchIcon from "@material-ui/icons/Search";
import { useStyles} from "./styles";
import logoNew from "../../assets/images/logoNew.png"


function MainHeader() {
  const { header, appbar,
    //  search,searchIcon ,inputRoot,inputInput
    } = useStyles();
  
  return (
    <>
      <AppBar color="secondary" className={appbar} position="static" >
        <Toolbar  className={header}>
          <Grid container  alignItems="center"> 
            <Grid item>
          {/* <Box > */}
            <img src={logoNew} style={{width:"100px",height:"50px"}} alt="logo"  />
            </Grid>
            {/* </Box> */}
            {/* <Grid item>
          <Typography variant="h6" noWrap>
            فروشگاه من
          </Typography>
          </Grid> */}
          </Grid>
          {/* <div
          //    className={classes.search}
          > */}
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
        
         
            <HomeIcon color="primary"/>
        
        </Toolbar>
      </AppBar>
    </>
  );
}

export default MainHeader;
