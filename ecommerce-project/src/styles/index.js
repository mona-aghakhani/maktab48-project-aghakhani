import { createMuiTheme} from "@material-ui/core";
const primary = "#d204f2";
const secondary = "#FF5C93";
const warning = "#FFC260";
const success = "#3CD4A0";
const info = "#9013FE";
export const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'shabnam',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    palette: {
      background: {
        default: "rgb(243,239,248)"
      },
        primary: {
          // light: will be calculated from palette.primary.main,
          main: "rgb(255,126,101)",
          // dark: will be calculated from palette.primary.main,
          // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
          light: '#0066ff',
          main: "rgb(213,171,235)",
          // dark: will be calculated from palette.secondary.main,
          contrastText: '#ffcc00',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
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
    direction: "rtl",
  });