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

const NewCategory = () => {
  const classes = useStyles();
  const history = useHistory();

  const [details, setDetails] = useState([]);
  const [name, setName] = useState("");
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
        name,
      },
    ]);
    try {
      var payload = {
        name: name,
      };
      await axios.post(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/categories/`,
        payload
      );
      setOpen(true);
      setTimeout(() => {
        history.push("/administration/category");
      }, 1500);
    } catch (error) {
      console.log("name Error", error);
    }
  };

  console.log("name", details);

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
          message="Category Added"
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

        <div className=" HOME attribute-box">
          <div className="attribute-box-1 table-margin box-shadow">
            <div className="attribute-box-1-heading row">
              <div className="col-3 attribute-back-link">
                <Link to={"/administration/category"}>
                  <i class="bi bi-arrow-left" component={Link}></i> Back
                </Link>
              </div>
              <h4 className="col-9">Add a new category</h4>
              <br />
            </div>

            <div className="attribute-box-1-editBox row ">
              <p className="col-md-5 col-sm-12">Category</p>
              <br />
              <input
                className="col-md-7 col-sm-12"
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <br />
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

export default NewCategory;
