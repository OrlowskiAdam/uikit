import {createMuiTheme} from "@material-ui/core";

const arcBlue = "#0b72b9";
const arcOrange = "#ffba60";

export const theme = createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange
    },
    primary: {
      main: arcBlue
    },
    secondary: {
      main: arcOrange
    }
  },
  typography: {
    h3: {
      fontWeight: 300
    }
  },
  shape: {
    borderRadius: 16
  }
});