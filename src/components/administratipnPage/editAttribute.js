import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
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

const EditAttribute = () => {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();

  const [details, setDetails] = useState([]);
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleToClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setOpen(false);
  };

  useEffect(() => {
    const loadUser = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/attributes/${id}/`
      );
      setDescription(result.data);
    };
    loadUser();
  }, [id]);

  const onDeleteAttribute = async () => {
    await axios.delete(
      `${process.env.REACT_APP_SERVER_PATH}/api/v1/attributes/${id}/`
    );
    setOpen(true);
    setTimeout(() => {
      history.push("/administration/attribute");
    }, 1500);
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
      await axios.put(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/attributes/${id}/`,
        payload
      );

      setSuccess(true);

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
            className: classes.snackbarStyleViaContentProps,
          }}
          open={open}
          autoHideDuration={1500}
          message="Archived Entry"
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
            horizontal: "center",
            vertical: "bottom",
          }}
          ContentProps={{
            "aria-describedby": "message-id",
            className: classes.snackbarStyleViaNestedContent,
          }}
          open={success}
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

        <div className=" HOME attribute-box ">
          <div className="attribute-box-1 table-margin box-shadow">
            <div className="attribute-box-1-heading row">
              <div className="col-3 attribute-back-link">
                <Link to={"/administration/attribute"}>
                  <i class="bi bi-arrow-left" component={Link}></i> Back
                </Link>
              </div>
              <h4 className="col-9">Edit attribute details (#ID {id})</h4>
              <br />
            </div>
            <div className="attribute-box-1-editBox row ">
              <p className="col-md-5 col-sm-12 ">Description</p>
              <br />
              <input
                className="col-md-7 col-sm-12"
                type="text"
                value={description.description}
                onChange={(e) => setDescription(e.target.value)}
              />{" "}
            </div>
            <br />
            <div className="js">
              <Button
                startIcon={<ArchiveOutlinedIcon />}
                variant="contained"
                className="btn-tasting tasting-survey-btn"
                color="primary"
                onClick={onDeleteAttribute}
              >
                Archive
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

export default EditAttribute;
