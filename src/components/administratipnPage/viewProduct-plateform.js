import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";

const ViewProductPlateform = () => {
  const { id } = useParams();
  const [view, setView] = useState([]);

  useEffect(() => {
    const loadView = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/product_platform/${id}/`
      );
      setView(result.data);
    };
    loadView();
  }, [id]);

  console.log("new Data", view);

  return (
    <Grid
      container
      direction="row-reverse"
      justifyContent="center"
      alignItems="center"
    >
      <div className=" HOME attribute-box">
        <div className="attribute-box-1 table-margin box-shadow">
          <div className="attribute-box-1-heading row">
            <div className="col-3 attribute-back-link">
              <Link to={"/administration/product-platform"}>
                <i class="bi bi-arrow-left" component={Link}></i> Back
              </Link>
            </div>
            <h4 className="col-9">Product Plateform Result (#ID: {view.id})</h4>
          </div>
          <div className="attribute-box-1-editBox row ">
            <p className="col-md-5 col-sm-12 ">Category</p>
            <input
              className="col-md-7 col-sm-12 mt-3"
              type="text"
              value={view.category}
            />
            <br />

            <p className="mt-3 col-md-5 col-sm-12">Description</p>
            <input
              className="col-md-7 col-sm-12 mt-3"
              value={view.product_group}
              type="text"
            />
            <br />
            <br />
            <p className="mt-3 col-md-5 col-sm-12">Status</p>
            <input
              className="col-md-7 col-sm-12 mt-3"
              value={view.archived}
              type="text"
            />
          </div>
          <br />
          <br />
        </div>
      </div>
    </Grid>
  );
};

export default ViewProductPlateform;
