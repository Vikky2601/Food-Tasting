import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import SaveIcon from "@material-ui/icons/Save";
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
const NewSample = () => {
  const classes = useStyles();
  const history = useHistory();
  const [details, setDetails] = useState([]);
  const [code, setCode] = useState();
  const [description, setDescription] = useState();
  const [recipe, setRecipe] = useState();
  const [category, setCategory] = useState();
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [_category, set_Category] = useState([]);
  const [fillcategory, setFillCategory] = useState(false);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/v1/categories/`)
      .then((res) => {
        set_Category(res.data.results);
      });
  }, []);
  const handleValidation = () => {
    !category && setFillCategory(true);
  };
  const handleToClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setOpen(false);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (!code || !description || !recipe || !category) {
      setOpen(true);
    }

    setDetails([
      ...details,
      {
        code,
        description,
        recipe,
        category,
      },
    ]);

    try {
      var payload = {
        code: code,
        description: description,
        recipe: recipe,
        category: category,
      };
      await axios.post(
        process.env.REACT_APP_SERVER_PATH + "/api/v1/samples/",
        payload
      );
      setSuccess(true);
      setTimeout(() => {
        history.push("/sample");
      }, 1500);
    } catch (error) {
      console.log("error in add sample page");
    }
  };

  return (
    <div>
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
        message="Please Fill The Required Fields"
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
        message="New Sample Saved"
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
      <form onSubmit={onFormSubmit}>
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
                  <Link to={"/sample"}>
                    <i class="bi bi-arrow-left" component={Link}></i> Back
                  </Link>
                </div>
                <h4 className="col-9">Add Sample Details</h4>
                <br />
              </div>
              <div className="attribute-box-1-editBox row ">
                <p className="col-md-5 col-sm-12 mt-3">
                  Product Name{" "}
                  <h6 className="text-sm f-w-6">
                    (3-digit code, visible to participants)
                  </h6>
                </p>
                <input
                  className="col-md-7 col-sm-12"
                  maxlength="10"
                  placeholder="Enter a simple short name"
                  type="text"
                  required
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />

                <br />
                <br />
                <p className="col-md-5 col-sm-12 mt-3">
                  Product Description{" "}
                  <h6 className="text-sm f-w-6">
                    (e.g characteristics, not visible to participants)
                  </h6>
                </p>
                <input
                  className="col-md-7 col-sm-12"
                  type="text"
                  required
                  placeholder="Enter a Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                <br />

                <p className="col-md-5 col-sm-12 mt-3">
                  Further Specification{" "}
                  <h6 className="text-sm f-w-6">
                    (PLM or MRDR, not visible to participants)
                  </h6>
                </p>
                <input
                  className="col-md-7 col-sm-12"
                  type="text"
                  placeholder="Enter a Description"
                  value={recipe}
                  onChange={(e) => setRecipe(e.target.value)}
                />
                <br />
                <br />

                <p className="col-md-5 col-sm-12 mt-3">
                  Category{" "}
                  <h6 className="text-sm f-w-6">
                    (can only be changed untill assigned)
                  </h6>
                </p>
                <select
                  className="col-md-7 col-sm-12 mt-3"
                  name="Category"
                  id="cars"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option class="optionGroup" selected disabled>
                    Choose Attribute Set
                  </option>
                  {_category.map((cat) => (
                    <option value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
              {!category && fillcategory && (
                <p className="required_field_sampleCategory">
                  Please choose the category*
                </p>
              )}
              <br />
              <div className="js">
                <Button
                  className="btn-tasting"
                  variant="contained"
                  color="primary"
                  startIcon={<SaveIcon />}
                  type="submit"
                  onClick={handleValidation}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </form>
    </div>
  );
};

export default NewSample;
