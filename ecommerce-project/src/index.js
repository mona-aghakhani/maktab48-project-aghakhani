import {
  StylesProvider,
  ThemeProvider,
  jssPreset,
} from "@material-ui/core/styles";
import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { create } from "jss";
import { createMuiTheme,CssBaseline } from "@material-ui/core";
import rtl from "jss-rtl";
import store from "./redux/store";
import {theme} from "./styles/index"


// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
        <CssBaseline />
          <App />
        </ThemeProvider>
      </StylesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
