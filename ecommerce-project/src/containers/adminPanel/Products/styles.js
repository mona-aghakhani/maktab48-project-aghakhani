import { makeStyles } from "@material-ui/core/styles";
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
    box:{
      textAlign:"center",
      cursor:"pointer",
  // margin:"5px",
  '&:hover':{
  borderBottom:"1px solid rgb(234,149,63,0.9)"
  }
    },
    img:{
      objectFit:'cover',
      objectPosition:'center',
      width:"60px",
      height:"60px",
      borderRadius:"50%",
    },
  });
