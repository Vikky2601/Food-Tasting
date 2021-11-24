import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  snackbarStyleViaContentProps: {
    backgroundColor: "#FF544F",
  },
  snackbarStyleViaNestedContent: {
    backgroundColor: "#4BB543",
  },
}));

const NewAttribute = () => {
  const classes = useStyles();
  const history = useHistory();

  const [details, setDetails] = useState([]);
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);

  const handleToClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setOpen(false);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    setDetails([
      ...details,
      {
        description,
      },
    ]);
    try {
      var payload = {
        description: description,
      };
      await axios.post(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/attributes/`,
        payload
      );

      setOpen(true);
      setTimeout(() => {
        history.push("/administration/attribute");
      }, 1500);
    } catch (error) {
      console.log("description Error", error);
    }
  };

  console.log("description", details);

  return (
    <form onSubmit={onFormSubmit}>
      <Grid
        container
        direction="row-reverse"
        justifyContent="center"
        alignItems="center"
      >
        <Snackbar
          className="snackbar"
          anchorOrigin={{
            horizontal: "center",
            vertical: "bottom",
          }}
          ContentProps={{
            "aria-describedby": "message-id",
            className: classes.snackbarStyleViaNestedContent,
          }}
          open={open}
          autoHideDuration={1500}
          message="Attribute Added"
          onClose={handleToClose}
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleToClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />

        <div className=" HOME attribute-box ">
          <div className="attribute-box-1 table-margin box-shadow">
            <div className="attribute-box-1-heading row">
              <div className="col-3 attribute-back-link">
                <Link to={"/administration/attribute"}>
                  <i class="bi bi-arrow-left" component={Link}></i> Back
                </Link>
              </div>
              <h4 className="col-9">Add a new Attribute</h4>
            </div>
            <div className="attribute-box-1-editBox row ">
              <p className="col-md-5 col-sm-12 ">Description</p>
              <br />
              <input
                className="col-md-7 col-sm-12"
                required
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />{" "}
              <br />
              <br />
            </div>

            <div className="js">
              <Button
                variant="contained"

                color="primary"
                className="btn-tasting tasting-survey-btn"
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

export default NewAttribute;
