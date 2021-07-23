import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    sidebar: {
        border: "1px solid rgba(0,0,0,0.12)",
        // BorderBottom:"1px solid rgba(0,0,0,0.12)"
    },
    progress: {
        marginLeft: '45%',
        marginTop: "15%"
    },
    pagination: {
        margin: "15px auto",
        display: "flex",
        listStyle: "none",
        outline: "none",
        '&>active > a': {
            background: "rgb(103,182,108)",
            borderColor: "rgb(103,182,108)",
            color: "#fff"
        },
        '&>li > a': {
            border: "1px solid rgb(103,182,108)",
            padding: "5px 10px",
            outline: "none",
            cursor: "pointer"
        }

    },
    active: {
        //   color:"red"
        '&>a': {
            background: "rgb(103,182,108)",
            borderColor: "rgba(234,149,63,0.9)",
            color: "#fff"
        }
    },
    mainContainer: {
        margin: "10% 10px"
    },
    sort: {
        display: "flex",
        alignItems: "center"
    },
    sortTilte: {
        marginRight: "5px"
    },
    headerCategory: {
        background: "rgba(111, 101 ,101,0.4)",
        width: "100%",
        // padding:"10px",
        textAlign: "center",
        color: "#636363",
        // height:"30px",
        borderRadius: "5px",
        margin: "0px auto"
    },
    search: {
        margin: "3px 1px",
        height: "32px"
    },
    // label:{
    //     color:"rgba(154,154,154,0.6)",
    //     // fontSize:"11px",
    //     // position:"relative",
    //     // bottom:"3px"
    // },
    select: {
        margin: 0,
        height: "30px"
    },

    containerPaginate: {
        display: "flex",
        justifyContent: "center",
        margin: "20vh 0 0"
    },
    boxContainer: {
        background: "rgba(234,149,63,0.2)",
        padding: "5px",
        margin: "5px 20%",
        borderRadius: "5px",
        textAlign: "center",
        width: "60%",
        height: '50%'
    },
    box: {
        // width:"150px",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        border: "1px solid rgba(234,149,63,0.9)",
        borderRadius: "5px",
        // margin:"5px auto",
        textAlign: "center",
        background: "white"
    },
    img: {
        objectFit: "contain",
        objectPosition: "center",
        height: "100px",
        width: "100px",
        margin: "auto"
    },
    cardItem: {
        width: "100%",
        height: "100%",
        textAlign: "center",
        background: "rgb(223 219 219 / 20%)"
    },
    mainGrid: {
        overflow: "hidden"
    },
    nav: {
        textDecoration: "none",
        cursor: "pointer",
        color: "black",
        fontWeight: "bold",
        fontSize: "20px"

    },
    activeNav: {
        color: "rgb(103,182,108)",
        // background:"rgb(103,182,108)",
        '&>li': {
            background: "rgb(103,182,108,0.1)",
            paddingTop: 0,
            // borderColor:"rgba(234,149,63,0.9)",
            // color:"#fff" 
        }
    },
    link: {
        textDecoration: "none",
    }


}))