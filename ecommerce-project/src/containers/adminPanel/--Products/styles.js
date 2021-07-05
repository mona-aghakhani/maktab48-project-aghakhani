import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles(theme => ({
    img:{
        objectFit:'contain',
        objectPosition:'center',
        width:50,
        height:50,
        borderRadius:0.5,
      },
      cell:{
        width:50,
        height:50,
      },
    pageContent: {
        width:"70%",
        // height:"200px",
        // margin: theme.spacing(2),
        // padding: theme.spacing(1),
        margin:"20px auto",
        // background:"lightgray"
        background:"rgb(214,230,215,0.6)"
    },
   div: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
      },
      table: {
        minWidth: 650,
        // direction:'rtl',
        marginTop: 50,
        borderTop: "1px solid gray",
      },
    // searchInput: {
    //     width: '75%'
    // }
}))