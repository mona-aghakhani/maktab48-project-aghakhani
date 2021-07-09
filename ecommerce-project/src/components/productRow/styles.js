import { makeStyles, useTheme } from "@material-ui/core/styles";
export const useStyles = makeStyles({
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