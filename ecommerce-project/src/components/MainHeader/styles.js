import { createStyle, makeStyles,fade } from "@material-ui/core";

import { COLORS } from "../../styles/constantVariable";

export const useStyles = makeStyles((theme) => ({
  container: {
    margin: "40px",
  },
  pargraph: {
    color: COLORS.textColor,
  },
  header: {
    // backgroundColor: COLORS.mainColor,
    color:COLORS.boldColor,
    justifyContent:"space-between"
  },
  icon:{
      color:COLORS.iconColor,
  },
  headerText: {
    margin: "0 20px",
  },
  appbar:{
      display:"flex",
      flexGrow: 1,
  },
//   search:{
//       height:"15px",
//       border:"1px solid COLORS.iconColor"
//   }
search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },

}));
export const useOutlinedInputStyles = makeStyles(theme => ({
    root: {
        height:"20px",
        padding:"0px",
        '& label.Mui-focused': {
         color: 'white',
          },
         '& .MuiInput-underline:after': {
          borderBottomColor: 'yellow',
         },
        '& .MuiOutlinedInput-root': {
         '& fieldset': {
         borderColor: 'white',
         },
         '&:hover fieldset': {
          borderColor: 'white',
           },
         '&.Mui-focused fieldset': {
           borderColor: 'yellow',
         },
         },}
         ,
    // root: {
    //     height:"20px",
    //   "& $notchedOutline": {
    //     borderColor: COLORS.iconColor
    //   },
    //   "&:hover $notchedOutline": {
    //     borderColor: COLORS.hoverColorInput
    //   },
    //   "&$focused $notchedOutline": {
    //     borderColor: COLORS.hoverColorInput
    //   }
    // },
    focused: {},
    notchedOutline: {}
  }));