import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { Button } from "@material-ui/core";
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

const NewPlatform = () => {
  const classes = useStyles();
  const history = useHistory();
  const [details, setDetails] = useState("");
  const [product_group, setName] = useState("");
  const [category, setCategory] = useState("");
  const [archived, setArchived] = useState(false);
  const [open, setOpen] = useState(false);
  const [_category, set_Category] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/v1/categories/`)
      .then((res) => {
        set_Category(res.data.results.reverse());
      });
  }, []);
  const handleToClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setOpen(false);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    setDetails([
      ...details,
      {
        product_group,
        category,
        archived,
      },
    ]);

    try {
      var payload = {
        product_group: product_group,
        category: category,
        archived: archived,
      };

      await axios.post(
        process.env.REACT_APP_SERVER_PATH + "/api/v1/product_platform/",
        payload
      );

      setOpen(true);

      setTimeout(() => {
        history.push("/administration/product-platform");
      }, 1500);
    } catch (error) {
      console.log("platform Error: ", error);
    }
  };

  console.log(details);

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
          message="New Plateform Added"
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
                <Link to={"/administration/product-platform"}>
                  <i class="bi bi-arrow-left" component={Link}></i> Back
                </Link>
              </div>
              <h4 className="col-9">Add a new Platfom</h4>
            </div>
            <div className="attribute-box-1-editBox row ">
              <p className="col-md-5 col-sm-12 ">Product Group Name</p>
              <input
                className="col-md-7 col-sm-12"
                placeholder="Enter a product group name"
                required
                type="text"
                value={product_group}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <br />

              <p className="mt-3 col-md-5 col-sm-12">Category</p>
              <select
                className="col-md-7 col-sm-12 mt-3"
                name="Category"
                id="cars"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option class="optionGroup" selected disabled>
                  Choose Category
                </option>
                {_category.map((cat) => (
                  <option value={cat.id}>{cat.name}</option>
                ))}
              </select>
              <br />
              <br />

              <p className="mt-3 d-inline">Archived</p>
              <input
                type="checkbox"
                checked={archived}
                onChange={(e) => setArchived(!archived)}
              />
            </div>

            <div className="js">
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

export default NewPlatform;
