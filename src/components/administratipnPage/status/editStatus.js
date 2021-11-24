import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  snackbarStyleViaContentProps: {
    backgroundColor: "#FF544F",
  },
  snackbarStyleViaNestedContent: {
    backgroundColor: "#4BB543",
  },
}));

const EditStatus = () => {
  const classes = useStyles();
  const history = useHistory();

  const [details, setDetails] = useState([]);
  const [name, setName] = useState("");
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [snackDel, setSnackDel] = useState(false);

  const handleToClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setOpen(false);
  };

  const handleDelete = async () => {
    await axios.delete(
      `${process.env.REACT_APP_SERVER_PATH}/api/v1/statuses/${id}`
    );
    setSnackDel(true);
    setTimeout(() => {
      history.push("/administration/status");
    }, 1500);
  };

  useEffect(() => {
    const loadCategory = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/statuses/${id}/`
      );
      setName(result.data);
    };
    loadCategory();
  }, [id]);

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
      await axios.put(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/statuses/${id}/`,
        payload
      );
      setOpen(true);
      setTimeout(() => {
        history.push("/administration/status");
      }, 1500);
    } catch (error) {
      console.log("category Error", error);
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
          message="Edit Saved"
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

        <Snackbar
          className="snackbar"
          anchorOrigin={{
            horizontal: "top",
            vertical: "bottom",
          }}
          ContentProps={{
            "aria-describedby": "message-id",
            className: classes.snackbarStyleViaContentProps,
          }}
          open={snackDel}
          autoHideDuration={1500}
          message="Status Deleted"
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
                <Link to={"/administration/panel-view"}>
                  <i class="bi bi-arrow-left" component={Link}></i> Back
                </Link>
              </div>
              <h4 className="col-9">Edit Status (#ID {id})</h4>
              <br />
            </div>
            <div className="attribute-box-1-editBox row ">
              <p className="col-md-5 col-sm-12">Status</p>
              <br />
              <input
                className="col-md-7 col-sm-12"
                type="text"
                value={name.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <br />
            <div className="js">
              <Button
                className="btn-tasting btn-del"
                variant="contained"
                startIcon={<DeleteIcon />}
                type="button"
                onClick={handleDelete}
              >
                Delete
              </Button>
              <Button
                className="btn-tasting tasting-survey-btn"
                variant="contained"
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

export default EditStatus;
