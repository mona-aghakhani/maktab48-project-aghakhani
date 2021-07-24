import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles({
    container:{
        margin:"30px auto"
    },
    btn: {
        background: "rgb(103,182,108)",
        padding: "5px 15px",
        //   margin:"auto",
        borderRadius: "5px",
        margin:"0 20px",

    },
    grid: {
        // width: "90%",
        display:"flex",
        justifyContent:"center",
        // margin: "20px auto",
    },
    img: {
        objectFit: "contain",
        objectPosition: "center",
        height: "400px",
        width: "550px",
        // margin:"auto"
    },
    box: {
        height: "400px",
        width: "550px",
        margin: "auto"
    },
    cancel:{
        background:"rgba(248,22,5,0.8)",
        padding: "5px 28px",
        margin:"0 20px",
        color:"white",
        //   margin:"auto",
        borderRadius: "5px",
    },
    
})