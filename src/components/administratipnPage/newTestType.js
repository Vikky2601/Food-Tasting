import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

const NewTestType = () => {
  const history = useHistory();
  const [details, setDetails] = useState([]);
  const [description, setDescription] = useState("");
  const [description_long_text, setLongDescription] = useState("");

  const onFormSubmit = async (e) => {
    e.preventDefault();

    setDetails([
      ...details,
      {
        description,
        description_long_text,
      },
    ]);

    try {
      var payload = {
        description: description,
        description_long_text: description_long_text,
      };

      await axios.post(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/tasting_types/`,
        payload
      );
      history.push("/administration/test-type");
    } catch (error) {
      console.log("New Test Type Error", error);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Grid
        container
        direction="row-reverse"
        justifyContent="center"
        alignItems="center"
      >
        <div className=" HOME h-100 attribute-box">
          <div className="attribute-box-1 table-margin box-shadow">
            <div className="attribute-box-1-heading row">
              <div className="col-3 attribute-back-link">
                <Link to={"/administration/test-type"}>
                  <i class="bi bi-arrow-left" component={Link}></i> Back
                </Link>
              </div>
              <h4 className="col-9">Add a new Tasting Type</h4>
            </div>
            <br />
            <div className="attribute-box-1-editBox row ">
              <p className="col-md-5 col-sm-12">Description</p>
              <input
                className="col-md-7 col-sm-12"
                required
                placeholder="Enter a description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <br />
              <br />

              <p className="mt-3 col-md-5 col-sm-12">Description Long Text</p>
              <input
                className="col-md-7 col-sm-12 mt-3"
                required
                type="text"
                placeholder="Enter Description long text"
                value={description_long_text}
                onChange={(e) => setLongDescription(e.target.value)}
              />
            </div>
            <br />
            ``
            <div className="js">
              <Button
                variant="contained"
                className="btn-tasting tasting-survey-btn"
                color="primary"
                startIcon={<SaveIcon />}
                type="submit"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </Grid>
    </form>
  );
};

export default NewTestType;
