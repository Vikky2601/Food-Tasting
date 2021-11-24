import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const GuidelinesStats = () => {
  return (
    <Grid
      container
      direction="row-reverse"
      justifyContent="center"
      alignItems="center"
    >
      <div className="no-match no-match-padding ">
        <p>It Will Redirect You To Guidelines Stats Page, Are You Sure ?</p>
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
          href="https://unilever.sharepoint.com/sites/FoodCTIChefmanship/Shared%20Documents/General/03%20Guidelines/031%20CTI/03111%20Structured%20Team%20Assessment/Guidelines%20Structured%20Team%20Assessments%20Foods%20-%20June%202020.pdf"
        >
          Yes
        </a>
      </div>
    </Grid>
  );
};

export default GuidelinesStats;
