import { createMuiTheme } from "@material-ui/core";
// const primary = "#d204f2";
// const secondary = "#FF5C93";
// const warning = "#FFC260";
// const success = "#3CD4A0";
// const info = "#9013FE";
export const theme = createMuiTheme({
  direction: "rtl",
  // typography: {
  //   fontFamily: [
  //     'shabnam',
  //     'BlinkMacSystemFont',
  //     '"Segoe UI"',
  //     'Roboto',
  //     '"Helvetica Neue"',
  //     'Arial',
  //     'sans-serif',
  //     '"Apple Color Emoji"',
  //     '"Segoe UI Emoji"',
  //     '"Segoe UI Symbol"',
  //   ].join(','),
  // },
  palette: {
    // background: {
    //   default: "#ededdc"
    //   // default: "rgb(243,239,248)"
    // },
    text: {
      primary: "#4A4A4A",
      secondary: "rgb(214,230,215)",
      hint: "#B9B9B9",
    },
    background: {
      default: "#ededdc",
      light: "#F3F5FF",
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "rgb(234,149,63,0.9)",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: '#0066ff',
      main: "rgb(214,230,215)",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },

    // success: {
    //   main: "rgb(103,182,108)",

    // },
    // text:{
    //   // secondary:"rgb(205,242,208)"
    //   secondary:"rgb(214,230,215)"
    // },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  customShadows: {
    widget:
      "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetDark:
      "0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetWide:
      "0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
  },
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: "rgba(74,74,74,0.4)",
      },
    },
    MuiMenu: {
      paper: {
        boxShadow:
          "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
      },
    },
    MuiPaper: {
      root: {
        background: "#ededdc",
        boxShadow:
          "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
      },
    },
    MuiDialog: {
      paper: {
        background: "#ededdc",
        // boxShadow:
        //   "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
      },
    },
    MuiSelect: {
      icon: {
        color: "#B9B9B9",
      },
    },
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: "#F3F5FF !important",
          "&:focus": {
            backgroundColor: "#F3F5FF",
          },
        },
      },
      // button: {
      //   "&:hover, &:focus": {
      //     backgroundColor: "blue",
      //   },
      // },
    },
    MuiTouchRipple: {
      child: {
        backgroundColor: "white",
        fontFamily: "Shabnam !important",
      },
    },
    MuiTableRow: {
      root: {
        height: 56,
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: "1px solid rgba(224, 224, 224, .5)",
      },
      head: {
        textAlign: "right",
        fontSize: "0.75rem",
        fontFamily: "Shabnam",
      },
      body: {
        textAlign: "right",
        fontSize: "0.75rem",
        fontFamily: "Shabnam",
      },
    },
    MuiButton: {
      root: {
        minWidth: "15px",
        "&:hover": {
          backgroundColor: "rgb(233,170,106,0.95)",
        },
      },
      contained: {
        "&:hover": {
          backgroundColor: "rgb(233,170,106,0.95)",
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        margin:"5px 0",
        fontFamily: "Shabnam !important",
      },
      input: {
        padding: "5px",
        fontSize: "12px",
        margin: "10px 0",
      },
    },
    MuiFormControl:{
      root:{
width:"100%"
      }
    },
    MuiInputbase:{
      root:{
        fontFamily: "Shabnam !important",
      }
    },
    MuiSelect:{
      root:{
        fontFamily: "Shabnam !important",
      }
    },
    MuiTypography: {
      root: {
        fontFamily: "Shabnam !important",
      },
      variantMapping: {
        h1: "h2",
        h2: "h2",
        h3: "h2",
        h4: "h2",
        h5: "h2",
        h6: "h2",
        subtitle1: "h2",
        subtitle2: "h2",
        body1: "span",
        body2: "span",
      },
    },
    MuiListItemText: {
      root: {
        textAlign: "right",
      },
    },
    MUIDataTable: {
      responsiveStacked: {
        overFlowX: "hidden !important",
      },
      caption: {
        display: "none",
      },
    },
    MuiButtonBase: {
      root: {
        fontFamily: "Shabnam !important",
      },
    },
    MuiDialogTitle: {
      root: {
        fontFamily: "Shabnam !important",
        fontSize: "20px",
      },
    },
  },
  // overrides: {
  //   MuiOutlinedInput: {
  //     root: {
  //       // height:"15px",
  //       backgroundColor: 'rgba(255,255,255,0.8)',
  //       '&:hover': {
  //         backgroundColor: 'rgba(255,255,255,1)'
  //       },
  //       '&.Mui-focused': {
  //         backgroundColor: 'rgba(255,255,255,1)'
  //       }
  //     }
  //   }
  // },
});
