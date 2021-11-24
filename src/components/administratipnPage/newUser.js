import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

const NewUser = () => {
  const history = useHistory();
  const [details, setDetails] = useState([]);
  const [user_window_account, setWindowAccount] = useState("");
  const [survey_id, setSurverId] = useState("");
  const [mail, setMail] = useState("");
  const [verified_taster, setTaster] = useState(false);
  const [archieved, setArchived] = useState(false);
  const [add_role, setRole] = useState("");
  const [category, setCategory] = useState("");
  const [tasting_region, setTastingRegion] = useState("");

  const [_category, set_Category] = useState([]);
  const [_tastingRegion, set_TastingRegion] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/v1/categories/`)
      .then((res) => {
        set_Category(res.data.results);
      });

    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/v1/regions/`)
      .then((res) => {
        set_TastingRegion(res.data.results.reverse());
      });
  }, []);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    setDetails([
      ...details,
      {
        user_window_account,
        survey_id,
        mail,
        verified_taster,
        archieved,
        add_role,
        category,
        tasting_region,
      },
    ]);

    try {
      var payload = {
        user_window_account: user_window_account,
        survey_id: survey_id,
        mail: mail,
        verified_taster: verified_taster,
        archieved: archieved,
        add_role: add_role,
        category: category,
        tasting_region: tasting_region,
      };

      await axios.post(
        process.env.REACT_APP_SERVER_PATH + "/api/v1/users/",
        payload
      );

      history.push("/administration/users");
    } catch (error) {
      console.log("New User Error", error);
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
                <Link to={"/administration/users"}>
                  <i class="bi bi-arrow-left" component={Link}></i> Back
                </Link>
              </div>
              <h4 className="col-9">Add a new User</h4>
            </div>
            <div className="attribute-box-1-editBox row ">
              <p className="col-md-5 col-sm-12 mt-3">User Window Account</p>
              <input
                className="col-md-7 col-sm-12"
                maxLength="20"
                required
                placeholder="Enter a window account name (max 20  character)"
                type="text"
                value={user_window_account}
                onChange={(e) => setWindowAccount(e.target.value)}
              />
              <br />
              <br />

              <p className="col-md-5 col-sm-12 mt-3">Survey ID</p>
              <input
                className="col-md-7 col-sm-12"
                required
                placeholder="Enter a survey short name or full window user name"
                type="text"
                value={survey_id}
                onChange={(e) => setSurverId(e.target.value)}
              />
              <br />
              <br />

              <p className="col-md-5 col-sm-12 mt-3">Mail</p>
              <input
                className="col-md-7 col-sm-12"
                required
                placeholder="Enter a mail address"
                type="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
              <br />
              <br />

              <p className="col-md-5 col-sm-12 mt-3">Add Role</p>
              <select
                className="col-md-7 col-sm-12 mt-3"
                required
                name="Category"
                id="cars"
                onChange={(e) => setRole(e.target.value)}
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
                required
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

              <p className="col-md-5 col-sm-12 mt-3">Tasting Region*</p>
              <select
                className="col-md-7 col-sm-12 mt-3"
                required
                name="Category"
                id="cars"
                onChange={(e) => setTastingRegion(e.target.value)}
              >
                {_tastingRegion.map((tastR) => (
                  <option value={tastR.id}>{tastR.name}</option>
                ))}
              </select>

              <p className="mt-3 d-inline">Verified Taster</p>
              <input
                type="checkbox"
                value={verified_taster}
                onChange={(e) => setTaster(!verified_taster)}
              />

              <p className="mt-0 d-inline">Archieved</p>
              <input
                type="checkbox"
                value={archieved}
                onChange={(e) => setArchived(!archieved)}
              />
            </div>

            <div className="js">
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
      </Grid>
    </form>
  );
};

export default NewUser;
