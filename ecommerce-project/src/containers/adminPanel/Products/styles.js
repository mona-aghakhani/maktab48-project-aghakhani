import { makeStyles, useTheme } from "@material-ui/core/styles";
export const useStyles2 = makeStyles({
    table: {
      minWidth: 650,
      // direction:'rtl',
      // marginTop: 50,
      // borderTop: "1px solid gray",
    },
    paper: {
      width: "90%",
      // height:"200px",
      // margin: theme.spacing(5),
      // padding: theme.spacing(3)
      margin: "20px auto",
      // background:"lightgray"
      background: "rgb(214,230,215,0.6)",
    },
    grid: {
      width: "90%",
      margin: "20px auto",
    },
    btn: {
      background: "rgb(103,182,108)",
      padding: " 5px 10px",
      "&:hover": {
        background: "primary",
      },
    },
    dialogTitle: {
      fontSize: "17px",
    },
  });
  // const useStyles2 = makeStyles({
//   table: {
//     minWidth: 650,
//     // direction:'rtl',
//     // marginTop: 50,
//     // borderTop: "1px solid gray",
//   },
//   paper: {
//     width: "90%",
//     // height:"200px",
//     // margin: theme.spacing(5),
//     // padding: theme.spacing(3)
//     margin: "20px auto",
//     // background:"lightgray"
//     background: "rgb(214,230,215,0.6)",
//   },
//   grid: {
//     width: "90%",
//     margin: "20px auto",
//   },
//   btn: {
//     background: "rgb(103,182,108)",
//     padding: " 5px 10px",
//     "&:hover": {
//       background: "primary",
//     },
//   },
//   dialogTitle: {
//     fontSize: "17px",
//   },
// });