import { makeStyles } from "@material-ui/core";

import { COLORS } from "../../theme/constantVariable";

export const useStyles = makeStyles((theme) => ({

  header: {
    // backgroundColor: COLORS.mainColor,
    color: COLORS.boldColor,
    justifyContent: "space-between"
  },
  appbar: {
    display: "flex",
    flexGrow: 1,
  },
  img: {
    width: "100px",
    height: "50px"
  }


}));
