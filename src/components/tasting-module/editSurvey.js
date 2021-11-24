import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
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
const EditSurvey = ({ reference_type, sample_type, sampleRef_type }) => {
  const history = useHistory();
  const classes = useStyles();
  const [plm_code1, setPlm_code1] = useState([]);
  const [plm_code2, setPlm_code2] = useState([]);
  const [plm_code3, setPlm_code3] = useState([]);
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const [sampleLength, setSampleLength] = useState();
  const [dialog, setDialog] = useState(false);
  const [snackDel, setSnackDel] = useState(false);
  const [tastingsample_set, setTastingsample_set] = useState([
    {
      code: "",
      sample_description: "",
      specification: "",
    },
  ]);

  const handleOpen = () => {
    setDialog(true);
  };

  const handleClose = () => {
    setDialog(false);
  };

  const handleToClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setOpen(false);
  };

  const handleDelete = async () => {
    await axios.delete(
      `${process.env.REACT_APP_SERVER_PATH}/api/v1/tastings/${id}`
    );
    setSnackDel(true);
    setTimeout(() => {
      history.push("/tasting");
    }, 1500);
  };

  const handleChangeInput = (index, e) => {
    const values = [...tastingsample_set];
    values[index][e.target.name] = e.target.value;
    setTastingsample_set(values);
  };
  const handleChangeCode = (index, e) => {
    const values_code = [...tastingsample_set];
    values_code[index][e.target.name] = e.target.value;
    setTastingsample_set(values_code);
  };
  const handleChangeSampleDescription = (index, e) => {
    const values_sampledesc = [...tastingsample_set];
    values_sampledesc[index][e.target.name] = e.target.value;
    setTastingsample_set(values_sampledesc);
  };
  const handleChangeSpecification = (index, e) => {
    const values_spec = [...tastingsample_set];
    values_spec[index][e.target.name] = e.target.value;
    setTastingsample_set(values_spec);
  };
  const handleChangeReferences = (e) => {
    const ref_value = [...tastingsample_set];
    ref_value[0][e.target.name] = e.target.value;
    ref_value[1][e.target.name] = e.target.value;
    ref_value[2][e.target.name] = e.target.value;
    ref_value[3][e.target.name] = e.target.value;
    ref_value[4][e.target.name] = e.target.value;
    ref_value[5][e.target.name] = e.target.value;
    setTastingsample_set(ref_value);
  };
  const handleChangeInputSet1_1 = (e) => {
    const set1_1_value = [...tastingsample_set];
    set1_1_value[0][e.target.name] = e.target.value;
    setTastingsample_set(set1_1_value);
  };
  const handleChangeInputSet2_1 = (e) => {
    const set2_1_value = [...tastingsample_set];
    set2_1_value[1][e.target.name] = e.target.value;
    setTastingsample_set(set2_1_value);
  };
  const handleChangeInputSet3_1 = (e) => {
    const set3_1_value = [...tastingsample_set];
    set3_1_value[2][e.target.name] = e.target.value;
    setTastingsample_set(set3_1_value);
  };
  const handleChangeInputSet4_1 = (e) => {
    const set4_1_value = [...tastingsample_set];
    set4_1_value[3][e.target.name] = e.target.value;
    setTastingsample_set(set4_1_value);
  };
  const handleChangeInputSet5_1 = (e) => {
    const set5_1_value = [...tastingsample_set];
    set5_1_value[4][e.target.name] = e.target.value;
    setTastingsample_set(set5_1_value);
  };
  const handleChangeInputSet6_1 = (e) => {
    const set6_1_value = [...tastingsample_set];
    set6_1_value[5][e.target.name] = e.target.value;
    setTastingsample_set(set6_1_value);
  };
  const handleChangeInputSet1_2 = (e) => {
    const set1_2_value = [...tastingsample_set];
    set1_2_value[0][e.target.name] = e.target.value;
    setTastingsample_set(set1_2_value);
  };
  const handleChangeInputSet2_2 = (e) => {
    const set2_2_value = [...tastingsample_set];
    set2_2_value[1][e.target.name] = e.target.value;
    setTastingsample_set(set2_2_value);
  };
  const handleChangeInputSet3_2 = (e) => {
    const set3_2_value = [...tastingsample_set];
    set3_2_value[2][e.target.name] = e.target.value;
    setTastingsample_set(set3_2_value);
  };
  const handleChangeInputSet4_2 = (e) => {
    const set4_2_value = [...tastingsample_set];
    set4_2_value[3][e.target.name] = e.target.value;
    setTastingsample_set(set4_2_value);
  };
  const handleChangeInputSet5_2 = (e) => {
    const set5_2_value = [...tastingsample_set];
    set5_2_value[4][e.target.name] = e.target.value;
    setTastingsample_set(set5_2_value);
  };
  const handleChangeInputSet6_2 = (e) => {
    const set6_2_value = [...tastingsample_set];
    set6_2_value[5][e.target.name] = e.target.value;
    setTastingsample_set(set6_2_value);
  };
  const handleAddFields = () => {
    setTastingsample_set([
      ...tastingsample_set,
      { code: "", sample_description: "", specification: "" },
    ]);
  };
  useEffect(() => {
    setSampleLength(tastingsample_set.length);
  }, [tastingsample_set]);
  const handleRemoveFields = (index) => {
    const values = [...tastingsample_set];
    values.splice(index, 1);
    setTastingsample_set(values);
  };
  const [data, setData] = useState(
    {
      tasting_type: "",
      category__name: "",
      region__name: "",
      description: "",
      survey_tasting_description: "",
      ipm_project: "",
      product_group: "",
      product_recipe_name: "",
      plm_code: "",
      application: "",
      objective: "",
      date_of_tasting: "",
      attribute_set__title: "",
      panel_view__name: "",
      status__name: "",
      tastingsample_set: [],
    },
    []
  );
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
    product_group,
    product_recipe_name,
    //attribute_set,
    application,
    objective,
    date_of_tasting,
    attribute_set__title,
    panel_view__name,
    status__name,
    attribute_set__description,
  } = data;
  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleChangeplm_code1 = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setPlm_code1(e.target.value);
      setData({
        ...data,
        [e.target.name]: `${e.target.value}/${plm_code2}/${plm_code3}`,
      });
    }
  };

  const handleChangeplm_code2 = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setPlm_code2(e.target.value);
      setData({
        ...data,
        [e.target.name]: `${plm_code1}/${e.target.value}/${plm_code3}`,
      });
    }
  };
  const handleChangeplm_code3 = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setPlm_code3(e.target.value);
      setData({
        ...data,
        [e.target.name]: `${plm_code1}/${plm_code2}/${e.target.value}`,
      });
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `${process.env.REACT_APP_SERVER_PATH}/api/v1/tastings/${id}/`,
      data
    );
    setOpen(true);
    setTimeout(() => {
      history.push("/tasting");
    }, 1500);
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
        set_TastingType(res.data.results);
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
        open={snackDel}
        autoHideDuration={1500}
        message="Tasting Deleted"
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
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="attribute-box-1 table-margin box-shadow">
            <div className="attribute-box-1-heading row">
              <div className="col-3 attribute-back-link">
                <Link to={"/tasting"}>
                  <i class="bi bi-arrow-left" component={Link}></i> Back
                </Link>
              </div>
              <h4 className="col-9">Edit tasting general data (#ID {id})</h4>
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
                onChange={(e) => onInputChange(e)}
              />
              <br />
              <br />
              <p className="col-md-5 col-sm-12 mt-3">
                Survey Tasting Description*{" "}
              </p>
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
                name="product_group"
                id="cars"
                value={product_group}
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
                  maxlength="12"
                  name="plm_code"
                  value={plm_code1}
                  onChange={(e) => handleChangeplm_code1(e)}
                />
                &nbsp;/ &nbsp;
                <input
                  className="col-3"
                  type="text"
                  maxlength="3"
                  name="plm_code"
                  value={plm_code2}
                  onChange={(e) => handleChangeplm_code2(e)}
                />
                &nbsp;/ &nbsp;
                <input
                  className="col-3"
                  type="text"
                  maxlength="3"
                  name="plm_code"
                  value={plm_code3}
                  onChange={(e) => handleChangeplm_code3(e)}
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
              <TextField
                className="col-md-7 col-sm-12 mt-3 tasting-textfiled"
                id="outlined-multiline-static"
                multiline
                fullWidth
                rows={6}
                variant="outlined"
                name="objective"
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
                  variant="outlined"
                  defaultValue="2017-05-24"
                  name="date_of_tasting"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={date_of_tasting}
                  onChange={(e) => onInputChange(e)}
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
                <option class="optionGroup" selected>
                  {attribute_set__description}
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
                <option class="optionGroup" selected>
                  {status__name}
                </option>
                {_status.map((status) => (
                  <option value={status.id}>{status.name}</option>
                ))}
              </select>
              {data.tastingsample_set.length !== 0 &&
                (tasting_type === 1 || tasting_type === 5) && (
                  <>
                    <p className=" plm-p col-md-12 col-sm-12 col-lg-5 mt-3">
                      Sample Selection
                    </p>
                    <div className="col-md-12 col-sm-12 col-lg-7 mt-3 row table-input-m plm-p ">
                      {tastingsample_set.map((EditField, index) => (
                        <>
                          <p className="col-md-3 col-sm-12 col-lg-3  text-base bg-secondary text-white border-bottom">
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
                            onChange={(e) => handleChangeCode(index, e)}
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
                            onChange={(e) =>
                              handleChangeSampleDescription(index, e)
                            }
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
                            onChange={(e) =>
                              handleChangeSpecification(index, e)
                            }
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
                            <br />
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
                  <>
                    <p className=" plm-p col-md-12 col-lg-5 col-sm-12 mt-3">
                      Sample Selection
                    </p>
                    <div className="col-md-12 col-sm-12 col-lg-7 mt-3 row plm-p table-input-m">
                      {data &&
                        data.tastingsample_set.map((inputField, index) => (
                          <>
                            <p className="col-md-3 col-sm-12 col-lg-3  text-base bg-secondary text-white border-bottom">
                              {" "}
                              {index === 0 ? "Refereance" : `Sample Id #${index}`}
                            </p>

                            <input
                              className="col-md-2 col-sm-12 col-lg-2 border-bottom"
                              name="code"
                              placeholder="Code"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              variant="outlined"
                              value={inputField.code}
                              onChange={(e) => handleChangeInput(index, e)}
                            />
                            <input
                              className="col-md-4 col-sm-12 col-lg-3 border-bottom"
                              name="sample_description"
                              placeholder="Sample description"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              variant="outlined"
                              value={inputField.sample_description}
                              onChange={(e) => handleChangeInput(index, e)}
                            />
                            <input
                              className="col-md-3 col-sm-12 col-lg-3 border-bottom"
                              name="specification"
                              placeholder="Specification"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              variant="outlined"
                              value={inputField.specification}
                              onChange={(e) => handleChangeInput(index, e)}
                            />
                            <div className="d-flex col-lg-1">
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
                        ))}
                    </div>
                    <br />
                  </>
                )}
              {data.tastingsample_set.length !== 0 && tasting_type === 3 && (
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
                      <span className="lable-span">0</span>
                      <input
                        className="input-span text-center"
                        id="0"
                        type="text"
                        name="code"
                        value={
                          data.tastingsample_set.length &&
                          data.tastingsample_set[0].code
                        }
                        onChange={(e) => handleChangeReferences(e)}
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
                      <span className="lable-span">1</span>
                      <input
                        className="input-span text-center"
                        id="1"
                        type="text"
                        name="sample_description"
                        value={
                          data.tastingsample_set.length
                            ? data.tastingsample_set[0].sample_description
                            : null
                        }
                        onChange={(e) => handleChangeInputSet1_1(e)}
                      />

                      <span className="lable-span">1</span>
                      <input
                        className="input-span text-center"
                        id="1"
                        type="text"
                        name="sample_description"
                        value={
                          data.tastingsample_set.length > 1
                            ? data.tastingsample_set[1].sample_description
                            : null
                        }
                        onChange={(e) => handleChangeInputSet2_1(e)}
                      />
                      <span className="lable-span">1</span>
                      <input
                        className="input-span text-center"
                        id="1"
                        type="text"
                        name="sample_description"
                        value={
                          data.tastingsample_set.length > 2
                            ? data.tastingsample_set[2].sample_description
                            : null
                        }
                        onChange={(e) => handleChangeInputSet3_1(e)}
                      />

                      <span className="lable-span">1</span>
                      <input
                        className="input-span text-center"
                        id="1"
                        type="text"
                        name="sample_description"
                        value={
                          data.tastingsample_set.length > 3
                            ? data.tastingsample_set[3].sample_description
                            : null
                        }
                        onChange={(e) => handleChangeInputSet4_1(e)}
                      />
                      <span className="lable-span">1</span>
                      <input
                        className="input-span text-center"
                        id="1"
                        type="text"
                        name="sample_description"
                        value={
                          data.tastingsample_set.length > 4
                            ? data.tastingsample_set[4].sample_description
                            : null
                        }
                        onChange={(e) => handleChangeInputSet5_1(e)}
                      />
                      <span className="lable-span">1</span>
                      <input
                        className="input-span text-center"
                        id="1"
                        type="text"
                        name="sample_description"
                        value={
                          data.tastingsample_set.length > 5
                            ? data.tastingsample_set[5].sample_description
                            : null
                        }
                        onChange={(e) => handleChangeInputSet6_1(e)}
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
                      <span className="lable-span">2</span>
                      <input
                        className="input-span text-center"
                        id="2"
                        type="text"
                        name="specification"
                        value={
                          data.tastingsample_set.length
                            ? data.tastingsample_set[0].specification
                            : null
                        }
                        onChange={(e) => handleChangeInputSet1_2(e)}
                      />
                      <span className="lable-span">2</span>
                      <input
                        className="input-span text-center"
                        id="2"
                        type="text"
                        name="specification"
                        value={
                          data.tastingsample_set.length > 1
                            ? data.tastingsample_set[1].specification
                            : null
                        }
                        onChange={(e) => handleChangeInputSet2_2(e)}
                      />
                      <span className="lable-span">2</span>
                      <input
                        className="input-span text-center"
                        id="2"
                        type="text"
                        name="specification"
                        value={
                          data.tastingsample_set.length > 2
                            ? data.tastingsample_set[2].specification
                            : null
                        }
                        onChange={(e) => handleChangeInputSet3_2(e)}
                      />
                      <span className="lable-span">2</span>
                      <input
                        className="input-span text-center"
                        id="2"
                        type="text"
                        name="specification"
                        value={
                          data.tastingsample_set.length > 3
                            ? data.tastingsample_set[3].specification
                            : null
                        }
                        onChange={(e) => handleChangeInputSet4_2(e)}
                      />
                      <span className="lable-span">2</span>
                      <input
                        className="input-span text-center"
                        id="2"
                        type="text"
                        name="specification"
                        value={
                          data.tastingsample_set.length > 4
                            ? data.tastingsample_set[4].specification
                            : null
                        }
                        onChange={(e) => handleChangeInputSet5_2(e)}
                      />
                      <span className="lable-span">2</span>
                      <input
                        className="input-span text-center"
                        id="2"
                        type="text"
                        name="specification"
                        value={
                          data.tastingsample_set.length > 5
                            ? data.tastingsample_set[5].specification
                            : null
                        }
                        onChange={(e) => handleChangeInputSet6_2(e)}
                      />
                    </div>
                  </div>
                </>
              )}
              <Dialog
                open={dialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Delete tasting?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Are you sure you want to delete the tasting <br />
                    and all related data ?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleDelete} color="primary" autoFocus>
                    Delete
                  </Button>
                </DialogActions>
              </Dialog>
              <div className="d-flex js">
                <Button
                  className="btn-tasting btn-del"
                  variant="contained"
                  startIcon={<DeleteIcon />}
                  type="button"
                  onClick={handleOpen}
                >
                  Delete
                </Button>
                <Button
                  className="btn-tasting"
                  variant="contained"
                  color="primary"
                  startIcon={<SaveIcon />}
                  type="submit"
                  style={{ marginRight: 20 }}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Grid>
  );
};
export default EditSurvey;
