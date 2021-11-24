import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import BackupIcon from "@material-ui/icons/Backup";
import { Grid } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

function AddTastingEvolution() {
  const history = useHistory();
  const { id } = useParams();
  const [state, setState] = useState([]);
  const classes = useStyles();

  const [tasting_survey_result, setTasting_survey_result] = useState();

  const [
    consolidated_survey_result_overall_summary,
    setConsolidated_survey_result_overall_summary,
  ] = useState("");
  const [conclusion, setConclusion] = useState();
  const [status, setStatus] = useState();

  const [_status, set_Status] = useState([]);

  const changeHandler = (e) => {
    setTasting_survey_result(e.target.files[0]);
  };

  var formdata = new FormData();

  const onFormSubmit = async (e) => {
    e.preventDefault();

    formdata.append(
      "tasting_survey_result",
      tasting_survey_result,
      tasting_survey_result.name
    );

    formdata.append(
      "consolidated_survey_result_overall_summary",
      consolidated_survey_result_overall_summary
    );
    formdata.append("conclusion", conclusion);
    formdata.append("status", status);

    axios({
      method: "post",
      url: `${process.env.REACT_APP_SERVER_PATH}/api/v1/evolution/`,
      data: formdata,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        console.log("successss", response);
      })
      .catch(function (response) {
        console.log("errorrr", response);
      });

    history.push("/tasting");
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/v1/statuses/`)
      .then((res) => {
        set_Status(res.data.results);
      });

    async function fetchData() {
      const request = await axios.get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/tastings/${id}/`
      );
      setState(request.data);
      return request;
    }
    fetchData();
  }, [id]);
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
                <Link to={"/tasting"}>
                  <i class="bi bi-arrow-left" component={Link}></i> Back
                </Link>
              </div>
              <h4 className="col-9">Tasting Survey Result (#ID {state.id})</h4>
            </div>
            <div className="attribute-box-1-editBox row ">
              <p className="col-md-5 col-sm-12 mt-3">Tasting type </p>
              <input
                className="col-md-7 col-sm-12 mt-3"
                type="text"
                name="product_recipe_name"
                value={state.tasting_type}
              />
              <p className="col-md-5 col-sm-12 mt-3">Tasting Description </p>
              <input
                className="col-md-7 col-sm-12 mt-3"
                type="text"
                name="product_recipe_name"
                value={state.description}
              />
              <p className="col-md-5 col-sm-12 mt-3">IPM Project </p>
              <input
                className="col-md-7 col-sm-12 mt-3"
                type="text"
                name="product_recipe_name"
                value={state.ipm_project}
              />
              <p className="col-md-5 col-sm-12 mt-3">Product group </p>
              <input
                className="col-md-7 col-sm-12 mt-3"
                type="text"
                name="product_recipe_name"
                value={state.product_group}
              />
              <p className="col-md-5 col-sm-12 mt-3">Product recipe name </p>
              <input
                className="col-md-7 col-sm-12 mt-3"
                type="text"
                name="product_recipe_name"
                value={state.product_recipe_name}
              />
              <p className="col-md-5 col-sm-12 mt-3">PLM Code </p>
              <input
                className="col-md-7 col-sm-12 mt-3"
                type="text"
                name="product_recipe_name"
                value={state.plm_code === "//" ? "" : state.plm_code}
              />
              <p className="col-md-5 col-sm-12 mt-3">Application</p>
              <input
                className="col-md-7 col-sm-12 mt-3"
                type="text"
                name="product_recipe_name"
                value={state.application}
              />
              <p className="col-md-5 col-sm-12 mt-3">Objective</p>
              <input
                className="col-md-7 col-sm-12 mt-3"
                type="text"
                name="product_recipe_name"
                value={state.objective}
              />
              <p className="col-md-5 col-sm-12 mt-3">Date Of Tasting</p>

              <div className="col-md-7 col-sm-12 mt-3 plm-p input-date">
                <input
                  type="text"
                  name="product_recipe_name"
                  value={state.date_of_tasting}
                />
              </div>

              <p className="col-md-5 col-sm-12 mt-3">Tasting participants</p>
              <div className="col-md-7 col-sm-12 mt-3 ml-0 plm-p">
                <input
                  accept="file"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={changeHandler}
                />
                <label htmlFor="contained-button-file">
                  <Button className="btn upload-btn" variant="contained" component="span">
                    <p className="text-sm"> Upload </p>
                    <BackupIcon />
                  </Button>
                </label>
                {tasting_survey_result && <p className="d-inline text-muted">{tasting_survey_result.name}</p>}

              </div>

              <p className="col-md-5 col-sm-12 mt-3">
                Consolidated survey result
              </p>
              <div className="col-md-7 col-sm-12 mt-3 text-col-grey b">
                <p>No feedback data available</p>
              </div>

              <p className="col-md-5 col-sm-12 mt-3">
                Consolidated survey result/Overall Summary
              </p>
              <TextField
                className="col-md-7 col-sm-12 mt-3 tasting-textfiled"
                name="consolidated_survey_result_overall_summary"
                placeholder="Consolidated survey result"
                id="outlined-multiline-static"
                multiline
                fullWidth
                rows={6}
                variant="outlined"
                value={consolidated_survey_result_overall_summary}
                onChange={(e) =>
                  setConsolidated_survey_result_overall_summary(e.target.value)
                }
              />

              {state.tasting_type !== 2 &&
                state.tasting_type !== 5 &&
                (
                  <>
                    <p className="col-md-5 col-sm-12 mt-3">Conclusion</p>
                    <select
                      className="col-md-7 col-sm-12 mt-3"
                      name="Conclusion"
                      id="Conclusion"
                      value={conclusion}
                      onChange={(e) => setConclusion(e.target.value)}
                    >
                      <option selected disabled>
                        Conclusion
                      </option>
                      <option value="Borderline acceptable">
                        Borderline acceptable
                      </option>
                      <option value="Can't accept now but continue">
                        Can't accept now but continue
                      </option>
                      <option value="Stop Testing">Stop Testing</option>
                    </select>{" "}
                    <br />
                    <br />
                    <p className="col-md-5 col-sm-12 mt-3">Status*</p>
                    <select
                      className="col-md-7 col-sm-12 mt-3"
                      name="Status"
                      id="Status"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option class="optionGroup" selected disabled>
                        Choose Status
                      </option>
                      {_status.map((status) => (
                        <option value={status.id}>{status.name}</option>
                      ))}
                    </select>
                  </>
                )}
              {state.tasting_type === 6 && (
                <>
                  <div className="mt-3">
                    <div class="table-responsive-lg">
                      <table class="table m-0 evol-table">
                        <thead class="thead-light">
                          <tr>
                            <th scope="col">Value</th>
                            <th scope="col">Standard</th>
                            <th scope="col">New product</th>
                            <th scope="col">Delta</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Sodium[mg/100g]</th>
                            <td>
                              {" "}
                              <input />
                            </td>
                            <td>
                              {" "}
                              <input />
                            </td>
                            <td>
                              {" "}
                              <input />
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Cost</th>
                            <td>
                              {" "}
                              <input />
                            </td>
                            <td>
                              {" "}
                              <input />
                            </td>
                            <td>
                              {" "}
                              <input />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              )}

              <div className="js">
                <Button
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
}

export default AddTastingEvolution;
