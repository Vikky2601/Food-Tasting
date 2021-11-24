import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";

const ViewUsers = () => {
  const { id } = useParams();
  const [view, setView] = useState([]);

  useEffect(() => {
    const loadView = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/users/${id}/`
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
              <Link to={"/administration/test-type"}>
                <i class="bi bi-arrow-left" component={Link}></i> Back
              </Link>
            </div>
            <h4 className="col-9">User Result (#ID : {view.id})</h4>
          </div>
          <div className="attribute-box-1-editBox row ">
            <p className="col-md-5 col-sm-12 ">User Window Account</p>
            <input
              className="col-md-7 col-sm-12 mt-3"
              type="text"
              value={view.user_window_account}
            />
            <br />

            <p className="mt-3 col-md-5 col-sm-12">Survey Id</p>
            <input
              className="col-md-7 col-sm-12 mt-3"
              value={view.survey_id}
              type="text"
            />
            <p className="mt-3 col-md-5 col-sm-12">Mail</p>
            <input
              className="col-md-7 col-sm-12 mt-3"
              value={view.mail}
              type="text"
            />
            <p className="mt-3 col-md-5 col-sm-12">Verified</p>
            <input
              className="col-md-7 col-sm-12 mt-3"
              value={view.verified_taster ? "verified" : "not verified"}
              type="text"
            />
            <p className="mt-3 col-md-5 col-sm-12">Archieved</p>
            <input
              className="col-md-7 col-sm-12 mt-3"
              value={view.archieved ? "archieved" : "not archieved"}
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

export default ViewUsers;
