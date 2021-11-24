import React, { useState, useEffect } from "react";
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

const EditProductPlateform = () => {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();
  const [_category, set_Category] = useState([]);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    category: "",
    archived: false,
    product_group: "",
  });

  const handleToClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setOpen(false);
  };

  const handleDelete = async () => {
    await axios.delete(
      `${process.env.REACT_APP_SERVER_PATH}/api/v1/product_platform/${id}`
    );
    setOpen(true);
    setTimeout(() => {
      history.push("/administration/product-platform");
    }, 1500);
  };

  useEffect(() => {
    const loadUser = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/product_platform/${id}`
      );
      setData(response.data);
      console.log(response.data);
    };
    loadUser();
    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/v1/categories/`)
      .then((res) => {
        set_Category(res.data.results.reverse());
      });
  }, [id]);
  const { category, archived, product_group } = data;
  const onCheckboxClick = (e) => {
    setData({ ...data, [e.target.value]: e.target.checked });
  };
  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `${process.env.REACT_APP_SERVER_PATH}/api/v1/product_platform/${id}/`,
      data
    );
    history.push("/administration/product-platform");
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
          message="Product Plateform Deleted"
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
              <h4 className="col-9">
                Edit Product Platform Details (#ID {id})
              </h4>
            </div>
            <div className="attribute-box-1-editBox row ">
              <p className="col-md-5 col-sm-12 ">Product Group Name</p>
              <input
                className="col-md-7 col-sm-12"
                placeholser="Enter a product platform name"
                name="product_group"
                type="text"
                value={product_group}
                onChange={(e) => onInputChange(e)}
              />
              <br />
              <br />

              <p className="mt-3 col-md-5 col-sm-12">Category</p>
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
              <br />
              <br />

              <p className="mt-3 d-inline">Archived</p>
              <input
                type="checkbox"
                name="archived"
                checked={archived}
                value="archived"
                onChange={(e) => onCheckboxClick(e)}
              />

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
                  className="btn-tasting"
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

export default EditProductPlateform;
