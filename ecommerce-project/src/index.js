import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import { Provider } from "react-redux";
import store from "./store/store";
import {
  StylesProvider,
  ThemeProvider,
  jssPreset,
} from "@material-ui/core/styles";
import { create } from "jss";
import {CssBaseline } from "@material-ui/core";
import rtl from "jss-rtl";
import {theme} from "./theme/index"
import { ToastContainer } from "react-toastify";
import { saveState } from './localStorage';
store.subscribe(()=>{
  let state=store.getState().cartItems;

  saveState({cartItems:state})
})
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer/>
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
