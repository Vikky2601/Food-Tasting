import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import SaveIcon from "@material-ui/icons/Save";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  snackbarStyleViaContentProps: {
    backgroundColor: "#FF544F",
  },
  snackbarStyleViaNestedContent: {
    backgroundColor: "#4BB543",
  },
}));

const EditUser = () => {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    user_window_account: "",
    survey_id: "",
    mail: "",
    verified_taster: "",
    archieved: false,
    add_role: null,
    category: "",
    tasting_region: "",
  });

  const handleToClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setOpen(false);
  };

  useEffect(() => {
    const loadUser = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/users/${id}`
      );
      setData(response.data);
    };
    loadUser();
  }, [id]);

  const handleDelete = async () => {
    await axios.delete(
      `${process.env.REACT_APP_SERVER_PATH}/api/v1/users/${id}`
    );
    setOpen(true);
    setTimeout(() => {
      history.push("/administration/users");
    }, 1500);
  };

  const {
    user_window_account,
    survey_id,
    mail,
    verified_taster,
    archieved,
    add_role,
    category,
    tasting_region,
  } = data;

  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onChangeVerifiedTaster = (e) => {
    setData({ ...data, [e.target.value]: e.target.checked });
  };
  const onChangeArchieved = (e) => {
    setData({ ...data, [e.target.value]: e.target.checked });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `${process.env.REACT_APP_SERVER_PATH}/api/v1/users/${id}/`,
      data
    );
    history.push("/administration/users");
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
          message="User Deleted"
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
        <div className="admin box-shadow">
          <div className=" HOME attribute-box">
            <div className="attribute-box-1 table-margin box-shadow">
              <div className="attribute-box-1-heading row">
                <div className="col-3 attribute-back-link">
                  <Link to={"/administration/users"}>
                    <i class="bi bi-arrow-left" component={Link}></i> Back
                  </Link>
                </div>
                <h4 className="col-9">Edit User Details (#ID {id})</h4>
                <br />
              </div>
              <div className="attribute-box-1-editBox row ">
                <p className="col-md-5 col-sm-12 mt-3">User Window Account</p>
                <input
                  className="col-md-7 col-sm-12"
                  placeholder="Enter a window account name (max 20  character)"
                  type="text"
                  name="user_window_account"
                  value={user_window_account}
                  onChange={(e) => onInputChange(e)}
                />
                <br />
                <br />

                <p className="col-md-5 col-sm-12 mt-3">Survey ID</p>
                <input
                  className="col-md-7 col-sm-12"
                  placeholder="Enter a survey short name or full window user name"
                  type="text"
                  name="survey_id"
                  value={survey_id}
                  onChange={(e) => onInputChange(e)}
                />
                <br />
                <br />

                <p className="col-md-5 col-sm-12 mt-3">Mail</p>
                <input
                  className="col-md-7 col-sm-12"
                  placeholder="Enter a mail address"
                  type="text"
                  name="mail"
                  value={mail}
                  onChange={(e) => onInputChange(e)}
                />
                <br />
                <br />

                <p className="col-md-5 col-sm-12 mt-3">Add Role</p>
                <select
                  className="col-md-7 col-sm-12 mt-3"
                  name="add_role"
                  value={add_role}
                  id="cars"
                  onChange={(e) => onInputChange(e)}
                >
                  <option class="optionGroup" selected disabled>
                    Choose Role
                  </option>
                  <option value="Viewer">Viewer</option>
                  <option value="Editor">Editor</option>
                  <option value="EditorExtended">Editor Extended</option>
                  <option value="CTI">CTI Admin</option>
                  <option value="Admin">Admin</option>
                  <option value="participant">participant</option>
                </select>
                <br />
                <br />

                <p className="col-md-5 col-sm-12 mt-3">Category</p>
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
                  <option value="BVG">BVG</option>
                  <option value="ICR">ICR</option>
                  <option value="SND">SND</option>
                  <option value="SVR">SVR</option>
                </select>

                <p className="col-md-5 col-sm-12 mt-3">Tasting Region*</p>
                <select
                  className="col-md-7 col-sm-12 mt-3"
                  required
                  name="tasting_region"
                  id="cars"
                  value={tasting_region}
                  onChange={(e) => onInputChange(e)}
                >
                  <option value="AMET">AMET</option>
                  <option value="EU">EU</option>
                  <option value="GCEA">GCEA</option>
                  <option value="LATAM">LATAM</option>
                  <option value="SA">NA</option>
                  <option value="SA">SA</option>
                </select>
                <p className="mt-3 d-inline">Verified Taster</p>
                <input
                  className="col-md-7 col-sm-12"
                  type="checkbox"
                  checked={verified_taster}
                  name="verified_taster"
                  value="verified_taster"
                  onChange={(e) => onChangeVerifiedTaster(e)}
                />

                <p className="mt-0 d-inline">Archieved</p>
                <input
                  type="checkbox"
                  name="archieved"
                  checked={archieved}
                  value="archieved"
                  onChange={(e) => onChangeArchieved(e)}
                />
              </div>
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
        </div>
      </Grid>
    </form>
  );
};

export default EditUser;
