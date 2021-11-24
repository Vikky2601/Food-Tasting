import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import SaveIcon from "@material-ui/icons/Save";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
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

const EditTestType = () => {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  const [data, setData] = useState({
    description: "",
    description_long_text: "",
  });

  const handleDelete = async () => {
    await axios.delete(
      `${process.env.REACT_APP_SERVER_PATH}/api/v1/tasting_types/${id}`
    );
    setOpen(true);
    setTimeout(() => {
      history.push("/administration/test-type");
    }, 1500);
  };

  const handleToClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setOpen(false);
  };

  useEffect(() => {
    const loadUser = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/tasting_types/${id}`
      );
      setData(response.data);
    };
    loadUser();
  }, [id]);

  const { description, description_long_text } = data;

  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `${process.env.REACT_APP_SERVER_PATH}/api/v1/tasting_types/${id}/`,
      data
    );
    history.push("/administration/test-type");
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Grid
        container
        direction="row-reverse"
        justifyContent="center"
        alignItems="center"
      >
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
          open={open}
          autoHideDuration={1500}
          message="Test Type Deleted"
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
                <Link to={"/administration/test-type"}>
                  <i class="bi bi-arrow-left" component={Link}></i> Back
                </Link>
              </div>
              <h4 className="col-9">Edit Tasting Type Details (#ID {id})</h4>
            </div>
            <br />
            <div className="attribute-box-1-editBox row ">
              <p className="col-md-5 col-sm-12">Description</p>
              <input
                className="col-md-7 col-sm-12"
                required
                placeholder="Enter a description"
                type="text"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
              <br />
              <br />

              <p className="mt-3 col-md-5 col-sm-12">Description Long Text</p>
              <input
                className="col-md-7 col-sm-12 mt-3"
                type="text"
                placeholder="Enter Description long text"
                name="description_long_text"
                value={description_long_text}
                onChange={(e) => onInputChange(e)}
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

export default EditTestType;
