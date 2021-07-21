import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  appbar: {
    minHeight: "30px",
    justifyContent: "space-between",
    padding: "10px",
    alignItems: "center"
  },
  grid: {
    alignItems: "center",
    justifyContent: "center"
  },
  item1: {
    textAlign: "center"
  },
  item2: {
    justifyContent: "center",
    margin: "10px 0"
  },
  item3: {
    textAlign: "center",
    textDecoration: "none",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "13px",
    display: "flex",
    alignItems: "center",
    '&:hover': {
      textDecoration: "none",
      borderBottom: "1px solid rgb(214,230,215)",
    }
  },
  svg:{
    margin:"0 5px"
  },
  
}))