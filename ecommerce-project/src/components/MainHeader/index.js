import React from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,Box,
  OutlinedInput,
  TextField,IconButton, Button, Grid
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles, useOutlinedInputStyles } from "./styles";
import logome from "../../assets/images/logome.png"
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//     },
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

function MainHeader() {
  const { container, pargraph, header, headerText, icon, appbar, search,searchIcon ,inputRoot,inputInput} =
    useStyles();
  const outlinedInputClasses = useOutlinedInputStyles();
  return (
    <>
      <AppBar color="secondary" className={appbar} position="relative" >
        <Toolbar  className={header}>
          <Grid container  alignItems="center"> 
            <Grid item>
          {/* <Box > */}
            <img src={logome} style={{width:"100px",height:"50px"}}  />
            </Grid>
            {/* </Box> */}
            <Grid item>
          <Typography variant="h6" noWrap>
            فروشگاه من
          </Typography>
          </Grid>
          </Grid>
          {/* <div
          //    className={classes.search}
          > */}
              <div className={search}>
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
          </div>
        
            {/* <div
            // className={classes.searchIcon}
            >
              <SearchIcon className={icon} />
            </div>
            <InputBase
        className={search}
        placeholder="جستجو..."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={icon} aria-label="search">
        <SearchIcon />
      </IconButton> */}
            {/* <TextField
              classes={outlinedInputClasses}
              label="جستجو..."
              variant="outlined"
            /> */}
            {/* <InputBase
              placeholder="…"
              //   classes={{
              //     root: classes.inputRoot,
              //     input: classes.inputInput,
              //   }}
              inputProps={{ "aria-label": "search" }}
            /> */}
            <HomeIcon color="primary"/>
          {/* </div> */}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default MainHeader;
