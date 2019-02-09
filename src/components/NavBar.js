import React from "react";
import SimpleMenu from '../components/simpleMenu';
import PropTypes from "prop-types";
import styles from "../styles/styles";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";


function NavBar({ classes }) {
  return (
    <Grid item xs={12}>
      <AppBar position="static" color="inherit">
        <Toolbar>
      <SimpleMenu />
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);