import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
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

const SampleEdit = () => {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [edit, setEdit] = useState(false);
  const [_category, set_Category] = useState([]);
  const [data, setData] = useState({
    description: "",
    recipe: "",
    code: "",
    category: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setOpen(false);
  };

  const handleDelete = async () => {
    await axios.delete(
      `${process.env.REACT_APP_SERVER_PATH}/api/v1/samples/${id}`
    );
    setOpen(false);
    setSuccess(true);
    setTimeout(() => {
      history.push("/sample");
    }, 1500);
  };

  useEffect(() => {
    const loadUser = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/samples/${id}`
      );
      setData(response.data);
    };
    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/v1/categories/`)
      .then((res) => {
        set_Category(res.data.results.reverse());
      });
    loadUser();
  }, [id]);

  const { description, recipe, code, category } = data;

  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `${process.env.REACT_APP_SERVER_PATH}/api/v1/samples/${id}/`,
      data
    );
    setEdit(true);
    setTimeout(() => {
      history.push("/sample");
    }, 1500);
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
            horizontal: "center",
            vertical: "bottom",
          }}
          ContentProps={{
            "aria-describedby": "message-id",
            className: classes.snackbarStyleViaContentProps,
          }}
          open={success}
          autoHideDuration={1500}
          message="Sample Deleted"
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
          open={edit}
          autoHideDuration={1500}
          message="Sample Updated"
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

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Do you really want to delete this sample?"}
          </DialogTitle>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleDelete} color="primary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>

        <div className="admin box-shadow">
          <div className=" HOME attribute-box">
            <div className="attribute-box-1 table-margin box-shadow">
              <div className="attribute-box-1-heading row">
                <div className="col-3 attribute-back-link">
                  <Link to={"/sample"}>
                    <i class="bi bi-arrow-left" component={Link}></i> Back
                  </Link>
                </div>
                <h4 className="col-9">Edit Sample Details (#ID {id})</h4>
                <br />
              </div>
              <div className="attribute-box-1-editBox row ">
                <p className="col-md-5 col-sm-12 mt-3">
                  Product Name{" "}
                  <h5 className="text-sm f-w-6">
                    (3-digit code, visible to participants)
                  </h5>
                </p>

                <input
                  className="col-md-7 col-sm-12"
                  maxlength="10"
                  placeholder="Enter a simple short name"
                  type="text"
                  name="code"
                  value={code}
                  onChange={(e) => onInputChange(e)}
                />
                <br />
                <br />

                <p className="col-md-5 col-sm-12 mt-3">
                  Product Description{" "}
                  <h5 className="text-sm f-w-6">
                    (e.g characteristics, not visible to participants)
                  </h5>
                </p>
                <input
                  className="col-md-7 col-sm-12"
                  type="text"
                  placeholder="Enter a Description"
                  name="description"
                  value={description}
                  onChange={(e) => onInputChange(e)}
                />
                <br />
                <br />

                <p className="col-md-5 col-sm-12 mt-3">
                  Further Specification{" "}
                  <h5 className="text-sm f-w-6">(Enter a recipe code)</h5>
                </p>
                <input
                  className="col-md-7 col-sm-12"
                  type="text"
                  placeholder="Enter a Description"
                  name="recipe"
                  value={recipe}
                  onChange={(e) => onInputChange(e)}
                />
                <br />
                <br />

                <p className="col-md-5 col-sm-12 mt-3">
                  Category{" "}
                  <h5 className="text-sm f-w-6">
                    (can only be changed untill assigned)
                  </h5>
                </p>
                <select
                  className="col-md-7 col-sm-12 mt-3"
                  name="category"
                  id="cars"
                  value={category}
                  onChange={(e) => onInputChange(e)}
                >
                  <option class="optionGroup" selected disabled>
                    Choose Category
                  </option>
                  {_category.map((cat) => (
                    <option value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
              <br />
              <div className="js">
                <Button
                  className="btn-tasting bg-danger"
                  startIcon={<FileCopyIcon />}
                  variant="contained"
                  onClick={handleClickOpen}
                >
                  Delete
                </Button>
                <Button
                  className="btn-tasting "
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
        </div>
      </Grid>
    </form>
  );
};

export default SampleEdit;
