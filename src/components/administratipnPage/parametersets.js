import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

const ParameterSets = () => {
  const [tableData, setTableData] = useState([]);
  const [details, setDetails] = useState([]);
  const [description, setDescription] = useState("");
  const [attribute_set_type, setAttributeType] = useState("");
  const [category, setCategory] = useState("");
  const [archieved, setArchieved] = useState(false);
  const attribute1 = tableData[0];
  const attribute2 = tableData[1];
  const attribute3 = tableData[2];
  const attribute4 = tableData[3];
  const attribute5 = tableData[4];
  const attribute6 = tableData[5];
  const history = useHistory();
  const [_category, set_Category] = useState([]);
  const [filldescription, setFillDescription] = useState(false);
  const [fill_attribute_set_type, setFillAttributeType] = useState(false);
  const [fillcategory, setFillCategory] = useState(false);

  const handleValidation = () => {
    !description && setFillDescription(true);
    !attribute_set_type && setFillAttributeType(true);
    !category && setFillCategory(true);
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/v1/categories/`)
      .then((res) => {
        set_Category(res.data.results);
      });
  }, []);
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
    { name: "Taxture (Unprepared" },
    { name: "Ummami" },
    { name: "Water" },
  ];

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setDetails([
      ...details,
      {
        description,
        attribute_set_type,
        category,
        archieved,
        attribute1,
        attribute2,
        attribute3,
        attribute4,
        attribute5,
        attribute6,
      },
    ]);

    try {
      var payload = {
        description: description,
        attribute_set_type: attribute_set_type,
        category: category,
        archieved: archieved,
        attribute1: attribute1,
        attribute2: attribute2,
        attribute3: attribute3,
        attribute4: attribute4,
        attribute5: attribute5,
        attribute6: attribute6,
      };

      await axios.post(
        process.env.REACT_APP_SERVER_PATH + "/api/v1/attribute_set/",
        payload
      );
      history.push("/administration/attribute-set");
    } catch (error) {
      console.log("error in add sample page");
    }
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <Grid
          container
          direction="row-reverse"
          justifyContent="center"
          alignItems="center"
        >
          <div className="admin box-shadow">
            <div className=" HOME attribute-box">
              <div className="attribute-box-1 table-margin box-shadow">
                <div className="attribute-box-1-heading row">
                  <div className="col-3 attribute-back-link">
                    <Link to={"/administration/attribute-set"}>
                      <i class="bi bi-arrow-left" component={Link}></i> Back
                    </Link>
                  </div>
                  <h4 className="col-9">Add a new Attribute Set</h4>
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
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <br />
                  <br />
                  {!description && filldescription && (
                    <p className="required_field_adminDescription">
                      Please fill the description*
                    </p>
                  )}
                  <p className="col-md-5 col-sm-12 mt-3">Attribute Set Type</p>
                  <select
                    className="col-md-7 col-sm-12 mt-3"
                    name="Category"
                    id="cars"
                    onChange={(e) => setAttributeType(e.target.value)}
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
                  {!attribute_set_type && fill_attribute_set_type && (
                    <p className="required_field_attributeSetType">
                      Please choose the attribute set type*
                    </p>
                  )}
                  <p className="col-md-5 col-sm-12 mt-3">Category</p>
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
                  {!category && fillcategory && (
                    <p className="required_field_adminCategory">
                      Please choose the category*
                    </p>
                  )}
                  <p className="mt-3 d-inline">Archieved</p>
                  <input
                    className="col-md-7 col-sm-12"
                    type="checkbox"
                    value={archieved}
                    onChange={(e) => setArchieved(!archieved)}
                  />
                  <br />
                  <br />
                  <table class="table table-striped">
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
                        {tableData.map((data) => (
                          <td className="b">{data}</td>
                        ))}
                      </tr>
                      <button
                        onClick={() => setTableData([])}
                        style={{ margin: 2 }}
                        className="parameter-btn btn btn-warning mt-2"
                        type="button"
                      >
                        Remove All
                      </button>
                    </tbody>
                  </table>

                  <br />
                  <br />

                  <p className="col-md-5 col-sm-12 mt-3">
                    Select From Attributes
                  </p>
                  <div className="col-md-7 col-sm-12 mt-3 row">
                    {table.map((data) => (
                      <div className="col-4">
                        <button
                          type="button"
                          disabled={tableData.length >= 6 ? true : false}
                          className="parameter-click p-2 m-2 att-w"
                          onClick={() =>
                            setTableData([...tableData, data.name])
                          }
                        >
                          {data.name}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="js">
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                    type="submit"
                    onClick={handleValidation}
                  >
                    Save
                  </Button>

                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </form>
    </div>
  );
};

export default ParameterSets;
