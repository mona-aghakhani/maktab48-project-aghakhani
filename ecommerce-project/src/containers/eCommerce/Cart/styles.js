import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles({
    dialogTitle: {
        fontSize: "17px",
    },
    table: {
        minWidth: 650,
        background: "rgba(231, 231 ,231,0.45)",

    },
    btn: {
        background: "rgb(103,182,108)",
        padding: "5px 15px",
        //   margin:"auto",
        borderRadius: "5px",

    },
    paper: {
        margin: "20px 0",
        // width:"80%"
    },
    grid: {
        // width: "90%",
        margin: "20px auto",
    },
    img: {
        objectFit: "contain",
        objectPosition: "center",
        height: "200px",
        width: "400px",
        // margin:"auto"
    },
    box: {
        height: "200px",
        width: "400px",
        margin: "auto"
    },
    title: {
        margin: "20px auto",
        textAlign: "center"
    }
})