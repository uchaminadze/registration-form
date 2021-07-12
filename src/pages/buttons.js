import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Button, Grid } from "@material-ui/core";
import React from "react";

function Buttons() {
  return (
    <Grid container md={12}>
      <Grid item md={3}>
        <Button variant="contained" color="primary">
          BUY NOW
        </Button>
      </Grid>
      <Grid item md={6}>
        <Button variant="contained">
          <ShoppingCartIcon style={{ fontSize: "15px" }} /> ADD TO CART
        </Button>
      </Grid>
    </Grid>
  );
}

export default Buttons;
