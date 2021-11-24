import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import { Button } from "@material-ui/core";

import FileCopyIcon from "@material-ui/icons/FileCopy";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const TastingCopy = ({ reference_type, sample_type }) => {
  const history = useHistory();

  const [sampleLength, setSampleLength] = useState();

  const { id } = useParams();

  const [tastingsample_set, setTastingsample_set] = useState([
    {
      code: "",
      sample_description: "",
      specification: "",
    },
  ]);

  useEffect(() => {
    setSampleLength(tastingsample_set.length);
  }, [tastingsample_set]);

  const handleAddFields = () => {
    setTastingsample_set([
      ...tastingsample_set,
      { code: "", sample_description: "", specification: "" },
    ]);
  };

  const handleRemoveFields = (index) => {
    const values = [...tastingsample_set];
    values.splice(index, 1);
    setTastingsample_set(values);
  };

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
    tasting_type__description: "",
  });

  useEffect(() => {
    const loadUser = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/tastings/${id}`
      );
      setData(response.data);
      const reverse_data = response.data.tastingsample_set.reverse();
      setTastingsample_set(reverse_data);

      const original_data = response.data.tastingsample_set;
      response.data.tasting_type === 3 && setTastingsample_set(original_data);
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
    plm_code,
    application,
    objective,
    date_of_tasting,
    attribute_set__title,
    panel_view__name,
    status__name,
    tasting_type__description,
  } = data;

  const plm1 = plm_code.split("/");
  const plm2 = plm_code.split("/");
  const plm3 = plm_code.split("/");
  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleDescription = () => {
    console.log("Ref", tasting_type__description);
    const ref = tasting_type__description.concat("-copy");
    setData({ ...data, tasting_type__description: ref });
    setData({ ...data, description: `${description}-copy` });
  };
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
  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      `${process.env.REACT_APP_SERVER_PATH}/api/v1/tastings/`,
      data
    );

    history.push("/tasting");
  };

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
        console.log(res.data.results.reverse());
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
      <div className="HOME">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="attribute-box-1 table-margin box-shadow">
            <div className="attribute-box-1-heading row">
              <div className="col-3 attribute-back-link">
                <Link to={"/tasting"}>
                  <i class="bi bi-arrow-left" component={Link}></i> Back
                </Link>
              </div>
              <div className="col-9"></div>
            </div>
            <div className="attribute-box-1-editBox row ">
              <p className="col-md-5 col-sm-12 mt-3">Tasting Type* </p>
              <select
                className="col-md-7 col-sm-12 mt-3"
                required
                name="tasting_type"
                id="tasting"
                value={tasting_type}
                onChange={(e) => onInputChange(e)}
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
                name="category__name"
                id="cars"
                value={category__name}
                onChange={(e) => onInputChange(e)}
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
                onChange={(e) => onInputChange(e)}
              >
                <option class="optionGroup" selected disabled>
                  Choose Tasting Region
                </option>
                {_tastingRegion.map((tastR) => (
                  <option value={tastR.id}>{tastR.name}</option>
                ))}
              </select>
              <p className="col-md-5 col-sm-12 mt-3">Tasting Description </p>
              <br />
              <TextField
                className="col-md-7 col-sm-12 mt-3 tasting-textfiled"
                id="outlined-multiline-static"
                multiline
                fullWidth
                rows={6}
                variant="outlined"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
              <br />
              <br />
              <p className="col-md-5 col-sm-12 mt-3">
                Survey Tasting Description{" "}
              </p>
              <br />
              <TextField
                className="col-md-7 col-sm-12 mt-3 tasting-textfiled"
                id="outlined-multiline-static"
                multiline
                fullWidth
                rows={6}
                variant="outlined"
                name="survey_tasting_description"
                value={survey_tasting_description}
                onChange={(e) => onInputChange(e)}
              />
              <br />
              <br />
              <p className="col-md-5 col-sm-12 mt-3">IMP Project </p>
              <input
                className="col-md-7 col-sm-12 mt-3"
                type="text"
                name="ipm_project"
                value={ipm_project}
                onChange={(e) => onInputChange(e)}
              />
              <p className="col-md-5 col-sm-12 mt-3">Product Group </p>
              <select
                className="col-md-7 col-sm-12 mt-3"
                name="product_group__name"
                id="cars"
                value={product_group__name}
                onChange={(e) => onInputChange(e)}
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
                onChange={(e) => onInputChange(e)}
              />
              <p className="col-md-5 col-sm-12 mt-3">PLM Code</p>
              <div className="col-md-7 col-sm-12 mt-3 pl-0 plm-p ">
                <input
                  className="col-3"
                  type="text"
                  maxlength="1"
                  name=""
                  value={plm1[0]}
                />
                &nbsp;/ &nbsp;
                <input
                  className="col-3"
                  type="text"
                  maxlength="1"
                  name=""
                  value={plm2[1]}
                />
                &nbsp;/ &nbsp;
                <input
                  className="col-3"
                  type="text"
                  maxlength="1"
                  name=""
                  value={plm3[2]}
                />
              </div>
              <p className="col-md-5 col-sm-12 mt-3">Application </p>
              <input
                className="col-md-7 col-sm-12 mt-3"
                type="text"
                name="application"
                value={application}
                onChange={(e) => onInputChange(e)}
              />
              <p className="col-md-5 col-sm-12 mt-3">Objective </p>
              <br />
              <TextField
                className="col-md-7 col-sm-12 mt-3 tasting-textfiled"
                id="outlined-multiline-static"
                multiline
                fullWidth
                rows={6}
                variant="outlined"
                name={objective}
                value={objective}
                onChange={(e) => onInputChange(e)}
              />
              <br />
              <br />
              <p className="col-md-5 col-sm-12 mt-3">Date Of Tasting</p>
              <div className="col-md-7 col-sm-12 mt-3 plm-p input-date">
                <input
                  id="Date of Tasting"
                  type="date"
                  value={date_of_tasting}
                  onChange={(e) => onInputChange(e)}
                  defaultValue="2017-05-24"
                  name="date_of_tasting"
                />
              </div>
              <br />
              <br />
              <p className="col-md-5 col-sm-12 mt-3">
                Attribute set (prepared)*
              </p>
              <select
                className="col-md-7 col-sm-12 mt-3"
                name="attribute_set__title"
                id="attribute_set__title"
                value={attribute_set__title}
                onChange={(e) => onInputChange(e)}
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
                onChange={(e) => onInputChange(e)}
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
                onChange={(e) => onInputChange(e)}
              >
                <option class="optionGroup" selected disabled>
                  Choose Status
                </option>
                {_status.map((status) => (
                  <option value={status.id}>{status.name}</option>
                ))}
              </select>{" "}
              {!reference_type && (tasting_type === 1 || tasting_type === 5) && (
                <>
                  {tastingsample_set.map((copyField, index) => (
                    <>
                      <div className="col-md-7 offset-md-5 col-sm-12 mt-3 row plm-p ">
                        <p className="col-md-3 col-sm-12  bg-secondary text-white border-bottom">
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
                          value={copyField.code}
                        />
                        <input
                          className="col-md-3 col-sm-12 border-bottom"
                          name="sample_description"
                          placeholder="Sample description"
                          id="outlined-multiline-static"
                          multiline
                          fullWidth
                          variant="outlined"
                          value={copyField.sample_description}
                        />
                        <input
                          className="col-md-3 col-sm-12 border-bottom"
                          name="specification"
                          placeholder="Specification"
                          id="outlined-multiline-static"
                          multiline
                          fullWidth
                          variant="outlined"
                          value={copyField.specification}
                        />

                        <div className="col-1 d-flex">
                          <IconButton
                            className="p-1"
                            disabled={sampleLength === 0 || sampleLength === 1}
                            onClick={() => handleRemoveFields(index)}
                            color="secondary"
                            aria-label="add to shopping cart"
                          >
                            <DeleteOutlineIcon />
                          </IconButton>

                          <IconButton
                            className="p-1"
                            onClick={handleAddFields}
                            color="primary"
                            aria-label="add to shopping cart"
                          >
                            <AddCircleIcon />
                          </IconButton>
                        </div>
                      </div>
                    </>
                  ))}
                </>
              )}
              {(tasting_type === 2 ||
                tasting_type === 4 ||
                tasting_type === 6 ||
                tasting_type === 7) && (
                <>
                  <p className=" plm-p col-lg-5 col-md-12 col-sm-12 mt-3">
                    Sample Selection
                  </p>

                  <div className="col-lg-7 col-md-12 col-sm-12 mt-3 row table-input-m plm-p ">
                    {data &&
                      data.tastingsample_set.map((copyField, index) => (
                        <>
                          {data && !sample_type && index === 0 && (
                            <p className="col-md-3 col-sm-12  text-base bg-secondary text-white border-bottom b-btm ">
                              {index === 0 && "Refereance"}
                            </p>
                          )}
                          {data && !reference_type && index !== 0 && (
                            <p className="col-md-3 col-sm-12  text-base bg-secondary text-white border-bottom b-btm ">
                              {index !== 0 && `Sample Id #${index}`}
                            </p>
                          )}
                          {data &&
                            !reference_type &&
                            !sample_type &&
                            index === 0 &&
                            index !== 0 && (
                              <p className="col-md-3 col-sm-12  text-base bg-secondary text-white border-bottom b-btm ">
                                {index === 0
                                  ? "Refereance"
                                  : `Sample Id #${index}`}
                              </p>
                            )}
                          {!sample_type && index === 0 ? (
                            <>
                              <input
                                className="col-md-2 col-sm-12 border-bottom"
                                name="code"
                                placeholder="Code"
                                id="outlined-multiline-static"
                                multiline
                                fullWidth
                                variant="outlined"
                                value={copyField.code}
                              />

                              <input
                                className="col-md-3 col-sm-12 border-bottom"
                                name="sample_description"
                                placeholder="Sample description"
                                id="outlined-multiline-static"
                                multiline
                                fullWidth
                                variant="outlined"
                                value={copyField.sample_description}
                              />
                              <input
                                className="col-md-3 col-sm-12 border-bottom"
                                name="sample_description"
                                placeholder="Sample description"
                                id="outlined-multiline-static"
                                multiline
                                fullWidth
                                variant="outlined"
                                value={copyField.sample_description}
                              />
                              <div className="col-1 d-flex">
                                <IconButton
                                  disabled={
                                    sampleLength === 0 || sampleLength === 1
                                  }
                                  onClick={() => handleRemoveFields(index)}
                                  color="secondary"
                                  aria-label="add to shopping cart"
                                  className="p-1"
                                >
                                  <DeleteOutlineIcon />
                                </IconButton>
                                <IconButton
                                  onClick={handleAddFields}
                                  color="primary"
                                  aria-label="add to shopping cart"
                                  className="p-1"
                                >
                                  <AddCircleIcon />
                                </IconButton>
                              </div>
                            </>
                          ) : !reference_type && index !== 0 ? (
                            <>
                              <input
                                className="col-md-2 col-sm-12 border-bottom"
                                name="code"
                                placeholder="Code"
                                id="outlined-multiline-static"
                                multiline
                                fullWidth
                                variant="outlined"
                                value={copyField.code}
                              />

                              <input
                                className="col-md-3 col-sm-12 border-bottom"
                                name="sample_description"
                                placeholder="Sample description"
                                id="outlined-multiline-static"
                                multiline
                                fullWidth
                                variant="outlined"
                                value={copyField.sample_description}
                              />
                              <input
                                className="col-md-3 col-sm-12 border-bottom"
                                name="sample_description"
                                placeholder="Sample description"
                                id="outlined-multiline-static"
                                multiline
                                fullWidth
                                variant="outlined"
                                value={copyField.sample_description}
                              />
                              <div className="col-1 d-flex">
                                <IconButton
                                  disabled={
                                    sampleLength === 0 || sampleLength === 1
                                  }
                                  onClick={() => handleRemoveFields(index)}
                                  color="secondary"
                                  aria-label="add to shopping cart"
                                  className="p-1"
                                >
                                  <DeleteOutlineIcon />
                                </IconButton>
                                <IconButton
                                  onClick={handleAddFields}
                                  color="primary"
                                  aria-label="add to shopping cart"
                                  className="p-1"
                                >
                                  <AddCircleIcon />
                                </IconButton>
                              </div>
                            </>
                          ) : (
                            !reference_type &&
                            !sample_type &&
                            index === 0 &&
                            index !== 0 && (
                              <>
                                <input
                                  className="col-md-2 col-sm-12 border-bottom"
                                  name="code"
                                  placeholder="Code"
                                  id="outlined-multiline-static"
                                  multiline
                                  fullWidth
                                  variant="outlined"
                                  value={copyField.code}
                                />

                                <input
                                  className="col-md-3 col-sm-12 border-bottom"
                                  name="sample_description"
                                  placeholder="Sample description"
                                  id="outlined-multiline-static"
                                  multiline
                                  fullWidth
                                  variant="outlined"
                                  value={copyField.sample_description}
                                />
                                <input
                                  className="col-md-3 col-sm-12 border-bottom"
                                  name="sample_description"
                                  placeholder="Sample description"
                                  id="outlined-multiline-static"
                                  multiline
                                  fullWidth
                                  variant="outlined"
                                  value={copyField.sample_description}
                                />
                                <div className="col-1 d-flex">
                                  <IconButton
                                    disabled={
                                      sampleLength === 0 || sampleLength === 1
                                    }
                                    onClick={() => handleRemoveFields(index)}
                                    color="secondary"
                                    aria-label="add to shopping cart"
                                    className="p-1"
                                  >
                                    <DeleteOutlineIcon />
                                  </IconButton>
                                  <IconButton
                                    onClick={handleAddFields}
                                    color="primary"
                                    aria-label="add to shopping cart"
                                    className="p-1"
                                  >
                                    <AddCircleIcon />
                                  </IconButton>
                                </div>
                              </>
                            )
                          )}
                        </>
                      ))}
                  </div>
                </>
              )}
              {!sample_type && tasting_type === 3 && (
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
                          data.tastingsample_set === 6
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
                          data.tastingsample_set === 6
                            ? data.tastingsample_set[1].specification
                            : null
                        }
                      />
                      <input
                        className="col-2"
                        id="2"
                        type="text"
                        value={
                          data.tastingsample_set === 6
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
              {tasting_type === 2 && (
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
            <div className="d-flex js">
              <Button
                className="btn-tasting"
                variant="contained"
                color="primary"
                startIcon={<FileCopyIcon />}
                type="submit"
                style={{ marginRight: 20 }}
                onClick={handleDescription}
              >
                Copy
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Grid>
  );
};
export default TastingCopy;