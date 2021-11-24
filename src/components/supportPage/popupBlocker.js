import React from "react";
import Grid from "@material-ui/core/Grid";
//import {Link} from 'react-router-dom';
import doc from "../../assets/logo/doc.png";

const PopupBlocker = () => {
  return (
    <Grid
      container
      direction="row-reverse"
      justifyContent="center"
      alignItems="center"
    >
      <div className="no-match no-match-padding ">
        <img src={doc} alt="doc" />
      </div>
    </Grid>
  );
};

export default PopupBlocker;
