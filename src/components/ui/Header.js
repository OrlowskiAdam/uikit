import {AppBar, Toolbar, useScrollTrigger} from "@material-ui/core";
import {cloneElement} from "react";
import {makeStyles} from "@material-ui/styles";

import logo from '../../assets/logo.svg';

const ElevationScroll = props => {
  const {children} = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em"
  },
  logo: {
    height: "7em"
  }
}))

export const Header = (props) => {
  const classes = useStyles();
  return (
      <>
        <ElevationScroll>
          <AppBar position="fixed">
            <Toolbar disableGutters>
              <img src={logo} alt="logo" className={classes.logo} />
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>
      </>
  )
}