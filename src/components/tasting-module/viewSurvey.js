import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";
import { Link, useParams } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginRight: theme.spacing(1),
    width: 285,
  },
  root: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  primary: {
    background: "#025eef",
  },
  danger: {
    background: "#dc3545",
  },
  secondary: {
    background: "#6c757d",
  },
  snackbarStyleViaContentProps: {
    backgroundColor: "#FF544F",
  },
  snackbarStyleViaNestedContent: {
    backgroundColor: "#4BB543",
  },
}));

const ViewSurvey = () => {
  const classes = useStyles();
  const [plm_code1, setPlm_code1] = useState("");
  const [plm_code2, setPlm_code2] = useState("");
  const [plm_code3, setPlm_code3] = useState("");
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const [sampleLength, setSampleLength] = useState();
  const [tastingsample_set, setTastingsample_set] = useState([
    {
      code: "",
      sample_description: "",
      specification: "",
    },
  ]);

  const handleToClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setOpen(false);
  };

  useEffect(() => {
    setSampleLength(tastingsample_set.length);
  }, [tastingsample_set]);

  const [data, setData] = useState({
    tasting_type: "",
    category__name: "",
    region__name: "",
    description: "",
    survey_tasting_description: "",
    ipm_project: "",
    product_group__name: "",
    product_recipe_name: "",
    plm_code: "",
    application: "",
    objective: "",
    date_of_tasting: "",
    attribute_set__title: "",
    panel_view__name: "",
    status__name: "",
    attribute1: "",
    attribute2: "",
    attribute3: "",
    attribute4: "",
    attribute5: "",
    attribute6: "",
    attribute_set__attribute1: "",
    attribute_set__attribute2: "",
    attribute_set__attribute3: "",
    attribute_set__attribute4: "",
    attribute_set__attribute5: "",
    attribute_set__attribute6: "",
    id: "",
    tastingsample_set: [],
  });

  useEffect(() => {
    const loadUser = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/tastings/${id}`
      );
      setData(response.data);
      const plm_data = response.data.plm_code.split("/");
      setPlm_code1(plm_data[0]);
      setPlm_code2(plm_data[1]);
      setPlm_code3(plm_data[2]);
      const reverse_data = response.data.tastingsample_set.reverse();

      setTastingsample_set(reverse_data);
    };
    loadUser();
  }, [id]);

  const {
    tasting_type,
    category__name,
    region__name,
    description,
    survey_tasting_description,
    ipm_project,
    product_group__name,
    product_recipe_name,

    application,
    objective,
    date_of_tasting,
    attribute_set__title,
    panel_view__name,
    status__name,
  } = data;

  useEffect(() => {
    tasting_type === 3 &&
      setTastingsample_set([
        {
          code: "",
          sample_description: "",
          specification: "",
        },
        { code: "", sample_description: "", specification: "" },
        { code: "", sample_description: "", specification: "" },
        { code: "", sample_description: "", specification: "" },
        { code: "", sample_description: "", specification: "" },
        { code: "", sample_description: "", specification: "" },
      ]);
    (tasting_type === 1 ||
      tasting_type === 2 ||
      tasting_type === 4 ||
      tasting_type === 5 ||
      tasting_type === 6 ||
      tasting_type === 7) &&
      setTastingsample_set([
        { code: "", sample_description: "", specification: "" },
      ]);
  }, [setTastingsample_set, tasting_type]);
  const [_tastingType, set_TastingType] = useState([]);
  const [_category, set_Category] = useState([]);
  const [_tastingRegion, set_TastingRegion] = useState([]);
  const [_attributeSet, set_AttributeSet] = useState([]);
  const [_panelView, set_panelView] = useState([]);
  const [_status, set_Status] = useState([]);
  const [_productGroup, set_ProductGroup] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/v1/tasting_types/`)
      .then((res) => {
        set_TastingType(res.data.results.reverse());
      });

    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/v1/categories/`)
      .then((res) => {
        set_Category(res.data.results.reverse());
      });

    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/v1/regions/`)
      .then((res) => {
        set_TastingRegion(res.data.results);
      });

    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/v1/product_groups/`)
      .then((res) => {
        set_ProductGroup(res.data.results);
      });

    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/v1/attribute_set/`)
      .then((res) => {
        set_AttributeSet(res.data.results);
      });

    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/v1/panel_views/`)
      .then((res) => {
        set_panelView(res.data.results);
      });

    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/v1/statuses/`)
      .then((res) => {
        set_Status(res.data.results);
      });
  }, []);

  return (
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
        message="Edit Saved"
        onClose={handleToClose}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit">
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />

      <div className=" HOME attribute-box">
        <div className="attribute-box-1 table-margin box-shadow">
          <div className="attribute-box-1-heading row">
            <div className="col-3 attribute-back-link">
              <Link to={"/tasting"}>
                <i class="bi bi-arrow-left" component={Link}></i> Back
              </Link>
            </div>
            <h4 className="col-9">View tasting general data (#ID {id})</h4>
          </div>
          <div className="attribute-box-1-editBox row ">
            <p className="col-md-5 col-sm-12 mt-3">Tasting Type* </p>
            <select
              className="col-md-7 col-sm-12 mt-3"
              required
              name="tasting_type"
              id="tasting"
              value={tasting_type}
              disabled
            >
              <option class="optionGroup" selected disabled>
                Tasting Type
              </option>
              {_tastingType.map((tast) => (
                <option value={tast.id}>{tast.description}</option>
              ))}
            </select>
            <p className="col-md-5 col-sm-12 mt-3">Category*</p>
            <select
              className="col-md-7 col-sm-12 mt-3"
              required
              id="category"
              value={category__name}
              disabled
            >
              <option class="optionGroup" selected disabled>
                Choose Category
              </option>
              {_category.map((cat) => (
                <option value={cat.id}>{cat.name}</option>
              ))}
            </select>
            <p className="col-md-5 col-sm-12 mt-3">Tasting Region*</p>
            <select
              className="col-md-7 col-sm-12 mt-3"
              required
              name="region__name"
              id="cars"
              value={region__name}
              disabled
            >
              <option class="optionGroup" selected disabled>
                Choose Tasting Region
              </option>
              {_tastingRegion.map((tastR) => (
                <option value={tastR.id}>{tastR.name}</option>
              ))}
            </select>
            <p className="col-md-5 col-sm-12 mt-3">Tasting Description* </p>
            <TextField
              className="col-md-7 col-sm-12 mt-3 tasting-textfiled"
              id="outlined-multiline-static"
              multiline
              fullWidth
              rows={6}
              variant="outlined"
              name="description"
              value={description}
            />
            <p className="col-md-5 col-sm-12 mt-3">
              Survey Tasting Description*{" "}
            </p>
            <TextField
              className="col-md-7 col-sm-12 mt-3 tasting-textfiled"
              id="outlined-multiline-static"
              multiline
              fullWidth
              rows={6}
              value={survey_tasting_description}
              variant="outlined"
              name="survey_tasting_description"
            />
            <p className="col-md-5 col-sm-12 mt-3">IMP Project </p>
            <input
              className="col-md-7 col-sm-12 mt-3"
              type="text"
              name="ipm_project"
              value={ipm_project}
            />
            <p className="col-md-5 col-sm-12 mt-3">Product Group </p>
            <select
              className="col-md-7 col-sm-12 mt-3"
              name="product_group__name"
              id="cars"
              value={product_group__name}
              disabled
            >
              <option class="optionGroup" selected disabled>
                Choose Product Group
              </option>
              {_productGroup.map((product) => (
                <option value={product.id}>{product.name}</option>
              ))}
            </select>
            <p className="col-md-5 col-sm-12 mt-3">Product Recipe Name </p>
            <input
              className="col-md-7 col-sm-12 mt-3"
              type="text"
              name="product_recipe_name"
              value={product_recipe_name}
            />
            <p className="col-md-5 col-sm-12 mt-3">PLM Code</p>
            <div className="col-md-7 col-sm-12 mt-3 pl-0 plm-p ">
              <input
                className="col-3"
                type="text"
                maxlength="1"
                value={plm_code1}
              />
              &nbsp; / &nbsp;
              <input
                className="col-3"
                type="text"
                maxlength="1"
                value={plm_code2}
              />
              &nbsp; / &nbsp;
              <input
                className="col-3"
                type="text"
                maxlength="1"
                value={plm_code3}
              />
            </div>
            <p className="col-md-5 col-sm-12 mt-3">Application </p>
            <input
              className="col-md-7 col-sm-12 mt-3"
              name="application"
              value={application}
            />
            <p className="col-md-5 col-sm-12 mt-3">Objective </p>
            <TextField
              className="col-md-7 col-sm-12 mt-3 tasting-textfiled"
              id="outlined-multiline-static"
              multiline
              fullWidth
              rows={6}
              variant="outlined"
              name={objective}
              value={objective}
            />
            <br />
            <br />
            <p className="col-md-5 col-sm-12 mt-3">Date Of Tasting</p>
            <div className="col-md-7 col-sm-12 mt-3 plm-p input-date">
              <input
                id="Date of Tasting"
                type="date"
                variant="outlined"
                defaultValue="2017-05-24"
                name="date_of_tasting"
                disabled
                InputLabelProps={{
                  shrink: true,
                }}
                value={date_of_tasting}
              />
            </div>
            <p className="col-md-5 col-sm-12 mt-3">Attribute set (prepared)*</p>
            <select
              className="col-md-7 col-sm-12 mt-3"
              name="attribute_set__title"
              id="attribute_set__title"
              value={attribute_set__title}
              disabled
            >
              <option class="optionGroup" selected disabled>
                Choose Attribute Set
              </option>
              {_attributeSet.map((att) => (
                <option value={att.id}>{att.description}</option>
              ))}
            </select>
            <p className="col-md-5 col-sm-12 mt-3">Panel View*</p>
            <select
              className="col-md-7 col-sm-12 mt-3"
              name="panel_view__name"
              id="cars"
              value={panel_view__name}
              disabled
            >
              <option class="optionGroup" selected disabled>
                Choose Panel View
              </option>
              {_panelView.map((pan) => (
                <option value={pan.id}>{pan.name}</option>
              ))}
            </select>
            <p className="col-md-5 col-sm-12 mt-3">Status*</p>
            <select
              className="col-md-7 col-sm-12 mt-3"
              name="status__name"
              id="cars"
              value={status__name}
              disabled
            >
              <option class="optionGroup" selected disabled>
                Choose Status
              </option>
              {_status.map((status) => (
                <option value={status.id}>{status.name}</option>
              ))}
            </select>{" "}
            {(tasting_type === 1 || tasting_type === 5) && (
              <>
                <p className=" plm-p col-lg-5 col-md-12 col-sm-12 mt-3">
                  Sample Selection
                </p>

                <div className="col-lg-7 col-md-12 col-sm-12 mt-3 row plm-p table-input-m">
                  {tastingsample_set.map((EditField, index) => (
                    <>
                      <p className="col-md-3 col-sm-12  text-base bg-secondary text-white border-bottom">
                        {" "}
                        Sample Id #{index}
                      </p>
                      <input
                        className="col-md-2 col-sm-12 border-bottom"
                        name="code"
                        placeholder="Code"
                        id="outlined-multiline-static"
                        multiline
                        fullWidth
                        variant="outlined"
                        value={EditField.code}
                      />

                      <input
                        className="col-md-3 col-sm-12 border-bottom"
                        name="sample_description"
                        placeholder="Sample description"
                        id="outlined-multiline-static"
                        multiline
                        fullWidth
                        variant="outlined"
                        value={EditField.sample_description}
                      />
                      <input
                        className="col-md-3 col-sm-12 border-bottom"
                        name="specification"
                        placeholder="Specification"
                        id="outlined-multiline-static"
                        multiline
                        fullWidth
                        variant="outlined"
                        value={EditField.specification}
                      />
                      <div className="col-1 d-flex">
                        <IconButton
                          disabled={sampleLength === 0 || sampleLength === 1}
                          color="secondary"
                          className="p-1"
                          aria-label="add to shopping cart"
                        >
                          <DeleteOutlineIcon />
                        </IconButton>
                        <IconButton
                          color="primary"
                          className="p-1"
                          aria-label="add to shopping cart"
                        >
                          <AddCircleIcon />
                        </IconButton>
                      </div>
                    </>
                  ))}
                </div>
              </>
            )}
            {(tasting_type === 2 ||
              tasting_type === 4 ||
              tasting_type === 6 ||
              tasting_type === 7) && (
              <div className="row">
                {tastingsample_set.map((inputField, index) => (
                  <>
                    <p className="col-lg-5 col-md-12 col-sm-12 mt-3 plm-p">
                      Sample Selection
                    </p>
                    <div className="col-lg-7 col-md-12 col-sm-12 mt-3 row plm-p table-input-m">
                      <p className="col-md-3 col-sm-12  text-base bg-secondary text-white border-bottom">
                        {" "}
                        {index === 0 ? "Refereance" : `Sample Id #${index}`}
                      </p>

                      <input
                        className="col-md-2 col-sm-12 border-bottom"
                        name="code"
                        placeholder="Code"
                        id="outlined-multiline-static"
                        multiline
                        fullWidth
                        variant="outlined"
                        value={inputField.code}
                      />

                      <input
                        className="col-md-3 col-sm-12 border-bottom"
                        name="sample_description"
                        placeholder="Sample description"
                        id="outlined-multiline-static"
                        multiline
                        fullWidth
                        variant="outlined"
                        value={inputField.sample_description}
                      />

                      <input
                        className="col-md-3 col-sm-12 border-bottom"
                        name="specification"
                        placeholder="Specification"
                        id="outlined-multiline-static"
                        multiline
                        fullWidth
                        variant="outlined"
                        value={inputField.specification}
                      />
                      <div className="col-1 d-flex">
                        <IconButton
                          disabled={sampleLength === 0 || sampleLength === 1}
                          color="secondary"
                          className="p-1"
                          aria-label="add to shopping cart"
                        >
                          <DeleteOutlineIcon />
                        </IconButton>
                        <IconButton
                          color="primary"
                          className="p-1"
                          aria-label="add to shopping cart"
                        >
                          <AddCircleIcon />
                        </IconButton>
                      </div>
                    </div>
                  </>
                ))}
                <br />
              </div>
            )}
            {tasting_type === 3 && (
              <>
                <div className="col-md-7 col-sm-12 mt-3 offset-md-5 setTable">
                  <div className="row">
                    <p className="col-2 b">Set #1</p>
                    <p className="col-2 b">Set #2</p>
                    <p className="col-2 b">Set #3</p>
                    <p className="col-2 b">Set #4</p>
                    <p className="col-2 b">Set #5</p>
                    <p className="col-2 b">Set #6</p>
                  </div>
                </div>
                <p className="col-md-5 col-sm-12 mt-3">Reference</p>

                <div className="col-md-7 col-sm-12 mt-3 m-sm-none ">
                  <div className="row d-md-none ">
                    <p className="col-2 b">Set #1</p>
                    <p className="col-2 b">Set #2</p>
                    <p className="col-2 b">Set #3</p>
                    <p className="col-2 b">Set #4</p>
                    <p className="col-2 b">Set #5</p>
                    <p className="col-2 b">Set #6</p>
                  </div>
                  <div className="row">
                    <input
                      className="col-2"
                      placeholder="Reference"
                      id="0"
                      type="text"
                      value={
                        data.tastingsample_set.length === 6
                          ? data.tastingsample_set[0].code
                          : null
                      }
                    />
                  </div>
                </div>
                <p className="col-md-5 col-sm-12 mt-3">Reference (Coded)</p>
                <div className="col-md-7 col-sm-12 mt-3 m-sm-none ">
                  <div className="row d-md-none ">
                    <p className="col-2 b">Set #1</p>
                    <p className="col-2 b">Set #2</p>
                    <p className="col-2 b">Set #3</p>
                    <p className="col-2 b">Set #4</p>
                    <p className="col-2 b">Set #5</p>
                    <p className="col-2 b">Set #6</p>
                  </div>
                  <div className="row">
                    <input
                      className="col-2"
                      id="1"
                      type="text"
                      value={
                        data.tastingsample_set.length === 6
                          ? data.tastingsample_set[0].sample_description
                          : null
                      }
                    />
                    <input
                      className="col-2"
                      id="1"
                      type="text"
                      value={
                        data.tastingsample_set.length === 6
                          ? data.tastingsample_set[1].sample_description
                          : null
                      }
                    />
                    <input
                      className="col-2"
                      id="1"
                      type="text"
                      value={
                        data.tastingsample_set.length === 6
                          ? data.tastingsample_set[2].sample_description
                          : null
                      }
                    />
                    <input
                      className="col-2"
                      id="1"
                      type="text"
                      value={
                        data.tastingsample_set.length === 6
                          ? data.tastingsample_set[3].sample_description
                          : null
                      }
                    />

                    <input
                      className="col-2"
                      id="1"
                      type="text"
                      value={
                        data.tastingsample_set.length === 6
                          ? data.tastingsample_set[4].sample_description
                          : null
                      }
                    />
                    <input
                      className="col-2"
                      id="1"
                      type="text"
                      value={
                        data.tastingsample_set.length === 6
                          ? data.tastingsample_set[5].sample_description
                          : null
                      }
                    />
                  </div>
                </div>
                <p className="col-md-5 col-sm-12 mt-3">Prototype</p>
                <div className="col-md-7 col-sm-12 mt-3 m-sm-none ">
                  <div className="row d-md-none">
                    <p className="col-2 b">Set #1</p>
                    <p className="col-2 b">Set #2</p>
                    <p className="col-2 b">Set #3</p>
                    <p className="col-2 b">Set #4</p>
                    <p className="col-2 b">Set #5</p>
                    <p className="col-2 b">Set #6</p>
                  </div>
                  <div className="row">
                    <input
                      className="col-2"
                      id="2"
                      type="text"
                      value={
                        data.tastingsample_set.length === 6
                          ? data.tastingsample_set[0].specification
                          : null
                      }
                    />
                    <input
                      className="col-2"
                      id="2"
                      type="text"
                      value={
                        data.tastingsample_set.length === 6
                          ? data.tastingsample_set[1].specification
                          : null
                      }
                    />
                    <input
                      className="col-2"
                      id="2"
                      type="text"
                      value={
                        data.tastingsample_set.length === 6
                          ? data.tastingsample_set[2].specification
                          : null
                      }
                    />
                    <input
                      className="col-2"
                      id="2"
                      type="text"
                      value={
                        data.tastingsample_set.length === 6
                          ? data.tastingsample_set[3].specification
                          : null
                      }
                    />
                    <input
                      className="col-2"
                      id="2"
                      type="text"
                      value={
                        data.tastingsample_set.length === 6
                          ? data.tastingsample_set[4].specification
                          : null
                      }
                    />
                    <input
                      className="col-2"
                      id="2"
                      type="text"
                      value={
                        data.tastingsample_set.length === 6
                          ? data.tastingsample_set[5].specification
                          : null
                      }
                    />
                  </div>
                </div>
              </>
            )}
            {(tasting_type === 2 || tasting_type === 6) && (
              <>
                <div className="survey-ref-container margin-rl-5 mt-3 plm-p">
                  <div className="survey-ref-cont-2 plm-p mt-3 p-3">
                    <h5 className="plm-p">
                      Descriptive target attributes prepared{" "}
                    </h5>
                    <div className="row">
                      {data.id && (
                        <>
                          {data.attribute_set__attribute1 && (
                            <div class="col-sm-6 col-md-4 col-lg-2 cont-inp">
                              <h6>{data.attribute_set__attribute1}</h6>
                              <textarea
                                row="6"
                                name="attribute1"
                                type="text"
                                value={data.attribute1}
                              />
                            </div>
                          )}

                          {data.attribute_set__attribute2 && (
                            <div class="col-sm-6 col-md-4 col-lg-2 cont-inp">
                              <h6>{data.attribute_set__attribute2}</h6>
                              <textarea
                                row="7"
                                type="text"
                                name="attribute2"
                                value={data.attribute2}
                              />
                            </div>
                          )}

                          {data.attribute_set__attribute3 && (
                            <div class="col-sm-6 col-md-4 col-lg-2 cont-inp">
                              <h6>{data.attribute_set__attribute3}</h6>
                              <textarea
                                row="7"
                                type="text"
                                name="attribute3"
                                value={data.attribute3}
                              />
                            </div>
                          )}

                          {data.attribute_set__attribute4 && (
                            <div class="col-sm-6 col-md-4 col-lg-2 cont-inp">
                              <h6>{data.attribute_set__attribute4}</h6>
                              <textarea
                                row="7"
                                type="text"
                                name="attribute4"
                                value={data.attribute4}
                              />
                            </div>
                          )}

                          {data.attribute_set__attribute5 && (
                            <div class="col-sm-6 col-md-4 col-lg-2 cont-inp">
                              <h6>{data.attribute_set__attribute5}</h6>
                              <textarea
                                row="7"
                                type="text"
                                name="attribute5"
                                value={data.attribute5}
                              />
                            </div>
                          )}

                          {data.attribute_set__attribute6 && (
                            <div class="col-sm-6 col-md-4 col-lg-2 cont-inp">
                              <h6>{data.attribute_set__attribute6}</h6>
                              <textarea
                                row="7"
                                type="text"
                                name="attribute6"
                                value={data.attribute6}
                              />
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default ViewSurvey;
