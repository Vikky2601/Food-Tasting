import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

const ViewAttribute = () => {
  const history = useHistory();
  const { id } = useParams();

  const [details, setDetails] = useState([]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/attributes/${id}/`
      );
      setDescription(result.data);
    };
    loadUser();
  }, [id]);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    setDetails([
      ...details,
      {
        description,
      },
    ]);
    try {
      var payload = {
        description: description,
      };
      await axios.put(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/attributes/${id}/`,
        payload
      );

      history.push("/administration/attribute");
    } catch (error) {
      console.log("description Error", error);
    }
  };

  return (
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
                <Link to={"/administration/attribute"}>
                  <i class="bi bi-arrow-left" component={Link}></i> Back
                </Link>
              </div>
              <h4 className="col-9">
                Attribute details (#ID {description.id} )
              </h4>
              <br />
            </div>

            <div className="attribute-box-1-editBox row ">
              <p className="col-md-5 col-sm-12">Description</p>
              <br />
              <input
                className="col-md-7 col-sm-12"
                type="text"
                value={description.description}
              />
            </div>
            <br />
          </div>
        </div>
      </Grid>
    </form>
  );
};

export default ViewAttribute;
