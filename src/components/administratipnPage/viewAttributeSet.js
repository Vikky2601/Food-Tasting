import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";

const ViewAttributeSet = () => {
  const { id } = useParams();
  const [view, setView] = useState([]);

  useEffect(() => {
    const loadView = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/attribute_set/${id}/`
      );
      setView(result.data);
    };
    loadView();
  }, [id]);

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
              <Link to={"/administration/attribute-set"}>
                <i class="bi bi-arrow-left" component={Link}></i> Back
              </Link>
            </div>
            <h4 className="col-9">Attribute Result (#ID {view.id})</h4>
          </div>
          <div className="attribute-box-1-editBox row ">
            <p className="col-md-5 col-sm-12 ">SetId</p>
            <input
              className="col-md-7 col-sm-12 mt-3"
              type="text"
              value={view.id}
            />
            <br />

            <p className="mt-3 col-md-5 col-sm-12">Category</p>
            <input
              className="col-md-7 col-sm-12 mt-3"
              value={view.category}
              type="text"
            />
            <p className="mt-3 col-md-5 col-sm-12">Description</p>
            <input
              className="col-md-7 col-sm-12 mt-3"
              value={view.description}
              type="text"
            />
            <p className="mt-3 col-md-5 col-sm-12">Status</p>
            <input
              className="col-md-7 col-sm-12 mt-3"
              value={view.status}
              type="text"
            />
            <p className="mt-3 col-md-5 col-sm-12">Attribute 1</p>
            <input
              className="col-md-7 col-sm-12 mt-3"
              value={view.attribute2}
              type="text"
            />
            <p className="mt-3 col-md-5 col-sm-12">Attribute 2</p>
            <input
              className="col-md-7 col-sm-12 mt-3"
              value={view.attribute2}
              type="text"
            />
            <p className="mt-3 col-md-5 col-sm-12">Attribute 3</p>
            <input
              className="col-md-7 col-sm-12 mt-3"
              value={view.attribute3}
              type="text"
            />
            <p className="mt-3 col-md-5 col-sm-12">Attribute 4</p>
            <input
              className="col-md-7 col-sm-12 mt-3"
              value={view.attribute4}
              type="text"
            />
            <p className="mt-3 col-md-5 col-sm-12">Attribute 5</p>
            <input
              className="col-md-7 col-sm-12 mt-3"
              value={view.attribute5}
              type="text"
            />
            <p className="mt-3 col-md-5 col-sm-12">Attribute 6</p>
            <input
              className="col-md-7 col-sm-12 mt-3"
              value={view.attribute6}
              type="text"
            />
          </div>
          <br />
          <br />
        </div>
      </div>
    </Grid>
  );
};

export default ViewAttributeSet;
