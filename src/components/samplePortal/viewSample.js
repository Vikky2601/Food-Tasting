import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewSample = () => {
  const { id } = useParams();
  const [_category, set_Category] = useState([]);
  const [data, setData] = useState({
    description: "",
    recipe: "",
    code: "",
    category: "",
  });

  useEffect(() => {
    const loadUser = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/samples/${id}`
      );
      setData(response.data);
    };
    loadUser();
    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/v1/categories/`)
      .then((res) => {
        set_Category(res.data.results.reverse());
      });
  }, [id]);

  const { description, recipe, code, category } = data;

  return (
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
            <h4 className="col-9">View Sample Details (#ID {id})</h4>
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
              placeholder="Enter a simple short name"
              type="text"
              name="code"
              value={code}
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
        </div>
      </div>
    </Grid>
  );
};

export default ViewSample;
