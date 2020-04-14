import React from "react";
import Button from "@material-ui/core/Button";
import usestyle from "./style";

export default function Material() {
  const classes = usestyle();
  return (
    <div className={classes.content}>
      <h3 className={classes.title}>Material</h3>
      <span>Demo Material</span>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
}
