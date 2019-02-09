import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Grid from "@material-ui/core/Grid";
import styles from "./styles/styles";
import { withStyles } from "@material-ui/core/styles";

class App extends Component {
  render() {
      
    return (
      <div className={this.props.classes.root}>
        <Grid container spacing={24}>
          <NavBar />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
