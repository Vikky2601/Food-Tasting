import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const DegreedLearningPathway = () => {
  return (
    <Grid
      container
      direction="row-reverse"
      justifyContent="center"
      alignItems="center"
    >
      <div className="no-match no-match-padding ">
        <p>
          It Will Redirect You To Degreed Learning Pathway Page, Are You Sure ?
        </p>
        <br />
        <Link
          style={{ background: "purple" }}
          className="tasting-link text-sm l-spacing-1"
          to="/support"
        >
          No
        </Link>
        <br />
        <a
          className="tasting-link text-sm l-spacing-1"
          target="blank"
          href="https://degreed.com/account/login?returnUrl=%2Fpathway%2F3pm3gkzz8n%3Fpath%3Dsensory---product-tasting-training--sta---fal-"
        >
          Yes
        </a>
      </div>
    </Grid>
  );
};

export default DegreedLearningPathway;
