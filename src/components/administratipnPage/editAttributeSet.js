import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Link, useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import SaveIcon from "@material-ui/icons/Save";
import axios from "axios";
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

const EditAttributeSet = () => {
  const classes = useStyles();
  const [tableDate, setTableData] = useState([]);
  const [_category, set_Category] = useState([]);
  const history = useHistory();
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([
    {
      description: "",
      attribute_set_type: "",
      category: "",
      archieved: false,
      attribute1: "",
      attribute2: "",
      attribute3: "",
      attribute4: "",
      attribute5: "",
      attribute6: "",
    },
  ]);

  const handleToClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setOpen(false);
  };

  const handleDelete = async () => {
    await axios.delete(
      `${process.env.REACT_APP_SERVER_PATH}/api/v1/attribute_set/${id}`
    );
    setOpen(true);
    setTimeout(() => {
      history.push("/administration/attribute-set");
    }, 1500);
  };
  console.log("Response", tableDate);
  useEffect(() => {
    const loadUser = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/attribute_set/${id}`
      );
      console.log(response);
      setData(response.data);
      const attr_array = [
        response.data.attribute1,
        response.data.attribute2,
        response.data.attribute3,
        response.data.attribute4,
        response.data.attribute5,
        response.data.attribute6,
      ];

      setTableData(attr_array);
    };

    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/v1/categories/`)
      .then((res) => {
        set_Category(res.data.results.reverse());
      });

    loadUser();
  }, [id]);

  const { description, attribute_set_type, category, archieved } = data;

  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleRemove = () => {
    setTableData([]);
    setData({
      description: description,
      attribute_set_type: attribute_set_type,
      category: category,
      archieved: archieved,
      attribute1: "",
      attribute2: "",
      attribute3: "",
      attribute4: "",
      attribute5: "",
      attribute6: "",
    });
  };
  const handleChangeName = (dataname) => {
    var new_data = [...tableDate, dataname.name];
    setTableData(new_data);
    console.log("New", new_data);
    new_data.length === 1 &&
      setData({
        description: description,
        attribute_set_type: attribute_set_type,
        category: category,
        archieved: archieved,
        attribute1: new_data[0],
        attribute2: "",
        attribute3: "",
        attribute4: "",
        attribute5: "",
        attribute6: "",
      });
    new_data.length === 2 &&
      setData({
        description: description,
        attribute_set_type: attribute_set_type,
        category: category,
        archieved: archieved,
        attribute1: new_data[0],
        attribute2: new_data[1],
        attribute3: "",
        attribute4: "",
        attribute5: "",
        attribute6: "",
      });
    new_data.length === 3 &&
      setData({
        description: description,
        attribute_set_type: attribute_set_type,
        category: category,
        archieved: archieved,
        attribute1: new_data[0],
        attribute2: new_data[1],
        attribute3: new_data[2],
        attribute4: "",
        attribute5: "",
        attribute6: "",
      });
    new_data.length === 4 &&
      setData({
        description: description,
        attribute_set_type: attribute_set_type,
        category: category,
        archieved: archieved,
        attribute1: new_data[0],
        attribute2: new_data[1],
        attribute3: new_data[2],
        attribute4: new_data[3],
        attribute5: "",
        attribute6: "",
      });
    new_data.length === 5 &&
      setData({
        description: description,
        attribute_set_type: attribute_set_type,
        category: category,
        archieved: archieved,
        attribute1: new_data[0],
        attribute2: new_data[1],
        attribute3: new_data[2],
        attribute4: new_data[3],
        attribute5: new_data[4],
        attribute6: "",
      });
    new_data.length === 6 &&
      setData({
        description: description,
        attribute_set_type: attribute_set_type,
        category: category,
        archieved: archieved,
        attribute1: new_data[0],
        attribute2: new_data[1],
        attribute3: new_data[2],
        attribute4: new_data[3],
        attribute5: new_data[4],
        attribute6: new_data[5],
      });
  };
  const onChangeArchieved = (e) => {
    setData({ ...data, [e.target.value]: e.target.checked });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `${process.env.REACT_APP_SERVER_PATH}/api/v1/attribute_set/${id}/`,
      data
    );
    setTimeout(() => {
      history.push("/administration/attribute-set");
    }, 1000);
  };
  const table = [
    { name: "Aftertaste" },
    { name: "Appearance" },
    { name: "Appearance (unprepared)" },
    { name: "Aroma/smell" },
    { name: "Bitter" },
    { name: "Consistancy" },
    { name: "Consistancy (unprepared)" },
    { name: "Dressings 2" },
    { name: "Flavor+(after)taste" },
    { name: "Flavor+Taste" },
    { name: "Mouthfeel" },
    { name: "Overall Profile" },
    { name: "Salty" },
    { name: "Scooping from jar" },
    { name: "Sour" },
    { name: "Spreadablity" },
    { name: "Sweet" },
    { name: "Taxture(Unprepared" },
    { name: "Ummami" },
    { name: "Water" },
  ];

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            message="Attribute Set Deleted"
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
                    <Link to={"/administration/attribute-set"}>
                      <i class="bi bi-arrow-left" component={Link}></i> Back
                    </Link>
                  </div>
                  <h4 className="col-9">
                    Edit Attribute Set Details (#ID {id})
                  </h4>
                  <br />
                </div>
                <div className="attribute-box-1-editBox row ">
                  <p className="col-md-5 col-sm-12 mt-3">
                    Description{" "}
                    <h5 className="text-sm">(for the attribute sets)</h5>
                  </p>
                  <input
                    className="col-md-7 col-sm-12"
                    placeholser="Enter a product group name"
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => onInputChange(e)}
                  />
                  <br />

                  <p className="col-md-5 col-sm-12 mt-3">Attribute Set Type</p>
                  <select
                    className="col-md-7 col-sm-12 mt-3"
                    name="attribute_set_type"
                    id="attribute_set_type"
                    value={attribute_set_type}
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
                    {_category.map((cat) => (
                      <option value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                  <br />
                  <br />

                  <p className="mt-3 d-inline">Archieved</p>
                  <input
                    type="checkbox"
                    name="archieved"
                    value="archieved"
                    checked={archieved}
                    onChange={(e) => onChangeArchieved(e)}
                  />
                  <br />
                  <br />
                  <div className="table-responsive-lg">
                    <table class="table  table-striped m-0">
                      <thead>
                        <tr>
                          <th scope="col">Attribute #1</th>
                          <th scope="col">Attribute #2</th>
                          <th scope="col">Attribute #3</th>
                          <th scope="col">Attribute #4</th>
                          <th scope="col">Attribute #5</th>
                          <th scope="col">Attribute #6</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          {tableDate.map((data) => (
                            <td className="b">{data}</td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                    <button
                      onClick={handleRemove}
                      style={{ margin: 2 }}
                      type="button"
                      className="parameter-btn btn btn-warning mt-2"
                    >
                      Remove All
                    </button>
                  </div>


                  <p className="col-md-5 col-sm-12 mt-3">
                    Select From Attributes
                  </p>
                  <div className="col-md-7 col-sm-12 mt-3 row">
                    {table.map((dataname) => (
                      <div className="col-12 col-sm-4 col-md-6 col-lg-4">
                        <button
                          disabled={tableDate.length >= 6 ? true : false}
                          type="button"
                          className="p-2 m-2 b att-w"
                          onClick={() => handleChangeName(dataname)}
                        >
                          {dataname.name}
                        </button>
                      </div>
                    ))}
                  </div>
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
                    className="btn-tasting"
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                    type="submit"
                  >
                    Save
                  </Button>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </Grid>
      </form>
    </div>
  );
};

export default EditAttributeSet;
