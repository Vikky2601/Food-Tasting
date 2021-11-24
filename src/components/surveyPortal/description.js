import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import LockIcon from "@material-ui/icons/Lock";
import SaveIcon from "@material-ui/icons/Save";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    border: "none",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Description() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [defRef, setDefRef] = useState(false);
  const [attributeSets, setAttributeSets] = useState([]);
  const [details, setDetails] = useState([]);
  const [evaluation, setEvaluation] = useState();
  const score = useState();
  const tasting = data.id;
  const tasting_sample = useState();
  const history = useHistory();
  const [checkboxData, setCheckboxData] = useState([]);
  const [checkboxData2, setCheckboxData2] = useState([]);
  const [radioGroup, setRadioGroup] = useState([]);
  const [description, setDescription] = useState([]);
  const [description2, setDescription2] = useState([]);
  const [description3, setDescription3] = useState([]);
  const [description4, setDescription4] = useState([]);
  const [description5, setDescription5] = useState([]);
  const [description6, setDescription6] = useState([]);
  const [description7, setDescription7] = useState([]);
  const [description8, setDescription8] = useState([]);
  const [description9, setDescription9] = useState([]);
  const [description10, setDescription10] = useState([]);
  const openDefineRef = () => {
    setDefRef(!defRef);
  };

  useEffect(() => {
    const loadAttributeSets = async (attId) => {
      const attributeSet = await axios.get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/attribute_set/${attId}/`
      );
      setAttributeSets(attributeSet.data);
      console.log("UUUUU", attributeSet.data);
    };
    const loadData = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/tastings/${id}/`
      );
      await setData(result.data);
      console.log(result.data);
      await loadAttributeSets(result.data.attribute_set);
    };
    loadData();
  }, [id]);

  const handleInputChange = (code, i, e) => {
    let datum = description || {};
    datum[code + "-" + i] = e.target.value;
    setDescription(datum);
  };
  const handleInputChangeonRecipie = (code, i, e) => {
    let datum = description5 || {};
    datum[code + "-" + i] = e.target.value;
    setDescription5(datum);
  };
  const handleInputChangeonShelfLife = (code, i, e) => {
    let datum = description8 || {};
    datum[code + "-" + i] = e.target.value;
    setDescription8(datum);
  };
  const handleInputChangeonIngredient = (code, i, e) => {
    let datum = description10 || {};
    datum[code + "-" + i] = e.target.value;
    setDescription10(datum);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleEvaluation = (code, i, e) => {
    let datum = description2 || {};
    datum[code + "-" + i] = e.target.value;
    setDescription2(datum);
    console.log("OOOOO", datum);
  };
  const handleEvaluation2 = (code, i, e) => {
    let datum = description3 || {};
    datum[code + "-" + i] = e.target.value;
    setDescription3(datum);
    console.log("PPPP", datum);
  };
  const handleEvaluation3 = (code, i, e) => {
    let datum = description6 || {};
    datum[code + "-" + i] = e.target.value;
    setDescription6(datum);
    console.log("PPPP", datum);
  };
  const handleEvaluation4 = (code, i, e) => {
    let datum = description7 || {};
    datum[code + "-" + i] = e.target.value;
    setDescription7(datum);
    console.log("PPPP", datum);
  };
  const handleEvaluation5 = (code, i, e) => {
    let datum = description9 || {};
    datum[code + "-" + i] = e.target.value;
    setDescription9(datum);
    console.log("PPPP", datum);
  };
  const handleCheckboxData = (e, index) => {
    let datum = checkboxData || {};
    datum["Sample Set" + (index + 1)] = e.target.value;
    setCheckboxData(datum);
    console.log("YYYYY", datum);
  };
  const handleCheckboxData2 = (e, index) => {
    let datum = checkboxData2 || {};
    datum["Sample Set" + (index + 1)] = e.target.value;
    setCheckboxData2(datum);
    console.log("LLLL", datum);
  };
  const handleRadioGroup = (e, index) => {
    let datum = radioGroup || {};
    datum["Sample Set" + (index + 1)] = e.target.value;
    setRadioGroup(datum);
    console.log("MMMMM", datum);
  };
  const handleDescription4 = (e, index) => {
    let datum = description4 || {};
    datum["Sample Set" + (index + 1)] = e.target.value;
    setDescription4(datum);
    console.log("VVVVV", datum);
  };
  const setEvaluationOption = (datum, value, name) => {
    setEvaluation(datum);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let array_eval = JSON.stringify(evaluation);
    let desc_value = Object.values(description);
    let desc_value3 = Object.values(description3);
    let desc_value4 = Object.values(description2);
    let desc_key3 = Object.keys(description3, description2);
    let final_desc2 = [];
    final_desc2.push(desc_key3, desc_value3, desc_value4);
    let final_desc3 = JSON.stringify(final_desc2);
    let desc_key = Object.keys(description);
    let final_desc = [];
    final_desc.push(desc_key, desc_value);
    let desc_value2 = JSON.stringify(final_desc);
    let key_discrimination = Object.keys(radioGroup);
    let arr_checkbox_data = Object.values(checkboxData);
    let arr_checkbox_data2 = Object.values(checkboxData2);
    let arr_radio_group = Object.values(radioGroup);
    let arr_description4 = Object.values(description4);
    let arr_final = [];
    arr_final.push(
      key_discrimination,
      arr_checkbox_data,
      arr_checkbox_data2,
      arr_radio_group,
      arr_description4
    );
    console.log("FINAL", arr_final);
    let string_final_2AFCR = JSON.stringify(arr_final);
    let desc_value5 = Object.values(description5);
    let desc_value6 = Object.values(description6);
    let desc_key4 = Object.keys(description6, description5);
    let arr_final_recipie = [];
    arr_final_recipie.push(desc_key4, desc_value6, desc_value5);
    let string_final_recipie = JSON.stringify(arr_final_recipie);
    console.log("FINAL RECIPIE", string_final_recipie);
    let desc_value7 = Object.values(description7);
    let desc_value8 = Object.values(description8);
    let desc_key5 = Object.keys(description7, description8);
    let arr_final_shelflife = [];
    arr_final_shelflife.push(desc_key5, desc_value7, desc_value8);
    let string_final_shelflife = JSON.stringify(arr_final_shelflife);
    console.log("FINAL SHELF LIFE", string_final_shelflife);
    let desc_value9 = Object.values(description9);
    let desc_value10 = Object.values(description10);
    let desc_key6 = Object.keys(description9, description10);
    let arr_final_ingredient = [];
    arr_final_ingredient.push(desc_key6, desc_value9, desc_value10);
    let string_final_ingredient = JSON.stringify(arr_final_ingredient);
    console.log("FINAL INGREDIENT", string_final_ingredient);
    setDetails([
      ...details,
      {
        evaluation,
        score,
        tasting,
        tasting_sample,
      },
    ]);

    try {
      var payload = {
        evaluation: array_eval,
        // score: ,
        tasting: tasting,
        // tasting_sample: tasting_sample,
      };
      var payload2 = {
        evaluation: desc_value2,
        // score: desc_key,
        tasting: tasting,
        // tasting_sample: tasting_sample,
      };
      var payload3 = {
        evaluation: final_desc3,
        // score: desc_key,
        tasting: tasting,
        // tasting_sample: tasting_sample,
      };
      var payload4 = {
        evaluation: string_final_2AFCR,
        // score: desc_key,
        tasting: tasting,
        // tasting_sample: tasting_sample,
      };
      var payload5 = {
        evaluation: string_final_recipie,
        // score: desc_key,
        tasting: tasting,
        // tasting_sample: tasting_sample,
      };
      var payload6 = {
        evaluation: string_final_shelflife,
        // score: desc_key,
        tasting: tasting,
        // tasting_sample: tasting_sample,
      };
      var payload7 = {
        evaluation: string_final_ingredient,
        // score: desc_key,
        tasting: tasting,
        // tasting_sample: tasting_sample,
      };
      data.tasting_type__description === "Basic taste screening" &&
        (await axios.post(
          process.env.REACT_APP_SERVER_PATH + "/api/v1/tasting_surveys/",
          payload
        ));
      data.tasting_type__description === "Overall descriptive" &&
        (await axios.post(
          process.env.REACT_APP_SERVER_PATH + "/api/v1/tasting_surveys/",
          payload2
        ));
      data.tasting_type__description === "Comp. descriptive" &&
        (await axios.post(
          process.env.REACT_APP_SERVER_PATH + "/api/v1/tasting_surveys/",
          payload3
        ));
      data.tasting_type__description === "Discrimination 2AFCR" &&
        (await axios.post(
          process.env.REACT_APP_SERVER_PATH + "/api/v1/tasting_surveys/",
          payload4
        ));
      data.tasting_type__description ===
        "Recipe approval (comp. descriptive)" &&
        (await axios.post(
          process.env.REACT_APP_SERVER_PATH + "/api/v1/tasting_surveys/",
          payload5
        ));
      data.tasting_type__description === "Shelf life (comp. descriptive)" &&
        (await axios.post(
          process.env.REACT_APP_SERVER_PATH + "/api/v1/tasting_surveys/",
          payload6
        ));
      data.tasting_type__description ===
        "Ingredient evaluation (comp. descriptive)" &&
        (await axios.post(
          process.env.REACT_APP_SERVER_PATH + "/api/v1/tasting_surveys/",
          payload7
        ));
      history.push("/survey/surveys");
    } catch (error) {
      console.log("error in add survet tasting");
    }
  };

  return (
    <div className="HOME">
      <div className="attribute-box-1 table-margin box-shadow">
        <div className="attribute-box-1-heading  row ">
          <div className="col-3 attribute-back-link">
            <Button
              className="desc-back-btn"
              startIcon={<ArrowBackIcon />}
              variant="contained"
              onClick={handleClickOpen}
            >
              Back
            </Button>
          </div>
          <div className="col-9"></div>
        </div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Please Click To Show Tasting Details And Innstructions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="attribute-box-1-editBox row mt-0 ">
              <p className="mt-3 col-md-5 col-sm-12">Please Select a source</p>
              <input
                className="col-md-7 col-sm-12 mt-3"
                value={data.tasting_type__title}
                type="text"
              />
              <p className="mt-3 col-md-5 col-sm-12">Tasting Description</p>
              <input
                className="col-md-7 col-sm-12 mt-3"
                value={data.tasting_type__description}
                type="text"
              />
              <p className="mt-3 col-md-5 col-sm-12">Category</p>
              <input
                className="col-md-7 col-sm-12 mt-3"
                value={data.category__name}
                type="text"
              />
              <p className="mt-3 col-md-5 col-sm-12">Region</p>
              <input
                className="col-md-7 col-sm-12 mt-3"
                value={data.region__name}
                type="text"
              />
              <p className="mt-3 col-md-5 col-sm-12">Product Group</p>
              <input
                className="col-md-7 col-sm-12 mt-3"
                value={data.product_group__name}
                type="text"
              />
              <p className="mt-3 col-md-5 col-sm-12">Product Recipe Name</p>
              <input
                className="col-md-7 col-sm-12 mt-3"
                value={data.product_recipe_name}
                type="text"
              />
              <p className="mt-3 col-md-5 col-sm-12">Application</p>
              <input
                className="col-md-7 col-sm-12 mt-3"
                value={data.application}
                type="text"
              />
              <p className="mt-3 col-md-5 col-sm-12">Date Of Tasting</p>
              <input
                className="col-md-7 col-sm-12 mt-3"
                value={data.date_of_tasting}
                type="text"
              />
            </div>
          </AccordionDetails>
          <div className="survey-desc">
            <h4>Instructions</h4>
            <ul>
              <li>
                <p>
                  1 .Please taste coded sample in the order shown below and
                  describe its sensory characteristics using the attribute list
                  below. <br />
                  2 .Cleanse your plate water/cracker everytime you finished the
                  evalution of one sample. <br />
                  3 .Continue with the next sample in the same way until you
                  have all samples characterised. <br />4 .Click the save button
                  to submit your evaluation.
                </p>
              </li>
            </ul>
          </div>
        </Accordion>
        <form onSubmit={handleSubmit} id="survey-form">
          {data.tasting_type__description === "Overall descriptive" && (
            <div className="survey-ref-container">
              <div className="survey-ref-cont-1">
                <div class="table-responsive-lg mt-0">
                  <table class="table m-0 mt-1 text-center">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">Sample</th>
                        <th scope="col">{attributeSets.attribute1}</th>
                        <th scope="col">{attributeSets.attribute2}</th>
                        <th scope="col">{attributeSets.attribute3}</th>
                        <th scope="col">{attributeSets.attribute4}</th>
                        <th scope="col">{attributeSets.attribute5}</th>
                        <th scope="col">{attributeSets.attribute6}</th>
                      </tr>
                    </thead>{" "}
                    <tbody>
                      {data.tastingsample_set.map((data, i) => (
                        <tr className="">
                          <td className="overall-desc-thead">{data.code}</td>
                          <td>
                            <TextField
                              placeholder="Enter a evaluation"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              rows={5}
                              variant="outlined"
                              value={description.evel}
                              onChange={(e) =>
                                handleInputChange(data.code, 1, e)
                              }
                            />
                          </td>
                          <td>
                            <TextField
                              placeholder="Enter a evaluation"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              rows={5}
                              variant="outlined"
                              value={description.evel}
                              onChange={(e) =>
                                handleInputChange(data.code, 2, e)
                              }
                            />
                          </td>
                          <td>
                            <TextField
                              placeholder="Enter a evaluation"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              rows={5}
                              variant="outlined"
                              value={description.evel}
                              onChange={(e) =>
                                handleInputChange(data.code, 3, e)
                              }
                            />
                          </td>
                          <td>
                            <TextField
                              placeholder="Enter a evaluation"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              rows={5}
                              variant="outlined"
                              value={description.evel}
                              onChange={(e) =>
                                handleInputChange(data.code, 4, e)
                              }
                            />
                          </td>
                          <td>
                            <TextField
                              placeholder="Enter a evaluation"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              rows={5}
                              variant="outlined"
                              value={description.evel}
                              onChange={(e) =>
                                handleInputChange(data.code, 5, e)
                              }
                            />
                          </td>
                          <td>
                            <TextField
                              placeholder="Enter a evaluation"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              rows={5}
                              variant="outlined"
                              value={description.evel}
                              onChange={(e) =>
                                handleInputChange(data.code, 6, e)
                              }
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {data.tasting_type__description === "Basic taste screening" && (
            <div className="attribute-box-1-editBox row ">
              <p className="col-md-5 col-sm-12 mt-3 text-base ">
                Please Enter Your Evaluation For The Pre Define Attributes
              </p>
              <div className="col-md-7 col-sm-12 mt-3 table-responsive-sm ">
                <table class="table m-0">
                  <thead class="thead-dark text-center">
                    <tr>
                      <th scope="col">Sample</th>
                      <th scope="col">{attributeSets.attribute1}</th>
                      <th scope="col">{attributeSets.attribute2}</th>
                      <th scope="col">{attributeSets.attribute3}</th>
                      <th scope="col">{attributeSets.attribute4}</th>
                      <th scope="col">{attributeSets.attribute5}</th>
                      <th scope="col">{attributeSets.attribute6}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.tastingsample_set.map((tastId, i) => {
                      let _evaluation;
                      if (typeof evaluation !== typeof {}) {
                        let temp_eval = {};
                        temp_eval[tastId.code] = attributeSets.attribute1;
                        _evaluation = temp_eval;
                      } else if (evaluation[tastId.code] === undefined) {
                        let temp_eval = evaluation;
                        temp_eval[tastId.code] = attributeSets.attribute1;
                        _evaluation = temp_eval;
                      } else {
                        _evaluation = evaluation[tastId.code];
                      }

                      return (
                        <tr>
                          <th className="text-center">{tastId.code}</th>

                          <td className="text-center">
                            <input
                              type="radio"
                              value={attributeSets.attribute1}
                              name={"radio-button-demo-" + i}
                              onChange={(e) => {
                                let temp_eval = evaluation;
                                if (typeof evaluation !== typeof {}) {
                                  temp_eval = {};
                                }
                                temp_eval[tastId.code] = e.target.value;
                                setEvaluationOption(
                                  temp_eval,
                                  e.target.value,
                                  "radio-button-demo-" + i
                                );
                                document.forms[0][
                                  "radio-button-demo-" + i
                                ].value = e.target.value;
                              }}
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="radio"
                              value={attributeSets.attribute2}
                              name={"radio-button-demo-" + i}
                              onChange={(e) => {
                                let temp_eval = evaluation;
                                if (typeof evaluation !== typeof {}) {
                                  temp_eval = {};
                                }
                                temp_eval[tastId.code] = e.target.value;
                                setEvaluationOption(
                                  temp_eval,
                                  e.target.value,
                                  "radio-button-demo-" + i
                                );
                                document.forms[0][
                                  "radio-button-demo-" + i
                                ].value = e.target.value;
                                console.log(
                                  "temp_eval",
                                  temp_eval,
                                  evaluation,
                                  _evaluation
                                );
                              }}
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="radio"
                              value={attributeSets.attribute3}
                              name={"radio-button-demo-" + i}
                              onChange={(e) => {
                                let temp_eval = evaluation;
                                if (typeof evaluation !== typeof {}) {
                                  temp_eval = {};
                                }
                                temp_eval[tastId.code] = e.target.value;
                                setEvaluationOption(
                                  temp_eval,
                                  e.target.value,
                                  "radio-button-demo-" + i
                                );
                                document.forms[0][
                                  "radio-button-demo-" + i
                                ].value = e.target.value;
                              }}
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="radio"
                              value={attributeSets.attribute4}
                              name={"radio-button-demo-" + i}
                              onChange={(e) => {
                                let temp_eval = evaluation;
                                if (typeof evaluation !== typeof {}) {
                                  temp_eval = {};
                                }
                                temp_eval[tastId.code] = e.target.value;
                                setEvaluationOption(
                                  temp_eval,
                                  e.target.value,
                                  "radio-button-demo-" + i
                                );
                                document.forms[0][
                                  "radio-button-demo-" + i
                                ].value = e.target.value;
                              }}
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="radio"
                              value={attributeSets.attribute5}
                              name={"radio-button-demo-" + i}
                              onChange={(e) => {
                                let temp_eval = evaluation;
                                if (typeof evaluation !== typeof {}) {
                                  temp_eval = {};
                                }
                                temp_eval[tastId.code] = e.target.value;
                                setEvaluationOption(
                                  temp_eval,
                                  e.target.value,
                                  "radio-button-demo-" + i
                                );
                                document.forms[0][
                                  "radio-button-demo-" + i
                                ].value = e.target.value;
                              }}
                            />
                          </td>
                          <td className="text-center">
                            <input
                              type="radio"
                              value={attributeSets.attribute6}
                              name={"radio-button-demo-" + i}
                              onChange={(e) => {
                                let temp_eval = evaluation;
                                if (typeof evaluation !== typeof {}) {
                                  temp_eval = {};
                                }
                                temp_eval[tastId.code] = e.target.value;
                                setEvaluationOption(
                                  temp_eval,
                                  e.target.value,
                                  "radio-button-demo-" + i
                                );
                                document.forms[0][
                                  "radio-button-demo-" + i
                                ].value = e.target.value;
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {data.tasting_type__description ===
            "Recipe approval (comp. descriptive)" && (
            <div className="survey-ref-container">
              <div className="survey-ref-cont-1">
                <h4>
                  Please enter your evaluation for the pre-defined attributes
                </h4>
                <div class="table-responsive-lg mt-0">
                  <table class="table m-0 mt-1 text-center">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">Sample</th>
                        <th scope="col">{attributeSets.attribute1}</th>
                        <th scope="col">{attributeSets.attribute2}</th>
                        <th scope="col">{attributeSets.attribute3}</th>
                        <th scope="col">{attributeSets.attribute4}</th>
                        <th scope="col">{attributeSets.attribute5}</th>
                        <th scope="col">{attributeSets.attribute6}</th>
                      </tr>
                    </thead>{" "}
                    <tbody>
                      {data.tastingsample_set.map((data, i) => (
                        <tr className="">
                          <td className="overall-desc-thead">{data.code}</td>
                          <td>
                            <select
                              value={description6.evel}
                              onChange={(e) =>
                                handleEvaluation3(data.code, 1, e)
                              }
                            >
                              <option class="optionGroup" selected disabled>
                                Please select a source
                              </option>

                              <option value="Extremely different">
                                Extremely different
                              </option>
                              <option value="Very much different">
                                Very much different
                              </option>
                              <option value="Distinctly different">
                                Distinctly different
                              </option>
                              <option value="Moderately different">
                                Moderately different
                              </option>
                              <option value="verallc descriptive">
                                Slightly different
                              </option>
                              <option value="Recipe approval (Very much different)">
                                Recipe approval (Very much different)
                              </option>
                            </select>
                            <TextField
                              placeholder="Enter a evaluation"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              rows={5}
                              variant="outlined"
                              value={description5.evel}
                              onChange={(e) =>
                                handleInputChangeonRecipie(data.code, 1, e)
                              }
                            />
                          </td>
                          <td>
                            <select
                              value={description6.evel}
                              onChange={(e) =>
                                handleEvaluation3(data.code, 2, e)
                              }
                            >
                              <option class="optionGroup" selected disabled>
                                Please select a source
                              </option>

                              <option value="Extremely different">
                                Extremely different
                              </option>
                              <option value="Very much different">
                                Very much different
                              </option>
                              <option value="Distinctly different">
                                Distinctly different
                              </option>
                              <option value="Moderately different">
                                Moderately different
                              </option>
                              <option value="verallc descriptive">
                                Slightly different
                              </option>
                              <option value="Recipe approval (Very much different)">
                                Recipe approval (Very much different)
                              </option>
                            </select>
                            <TextField
                              placeholder="Enter a evaluation"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              rows={5}
                              variant="outlined"
                              value={description5.evel}
                              onChange={(e) =>
                                handleInputChangeonRecipie(data.code, 2, e)
                              }
                            />
                          </td>
                          <td>
                            <select
                              value={description6.evel}
                              onChange={(e) =>
                                handleEvaluation3(data.code, 3, e)
                              }
                            >
                              <option class="optionGroup" selected disabled>
                                Please select a source
                              </option>

                              <option value="Extremely different">
                                Extremely different
                              </option>
                              <option value="Very much different">
                                Very much different
                              </option>
                              <option value="Distinctly different">
                                Distinctly different
                              </option>
                              <option value="Moderately different">
                                Moderately different
                              </option>
                              <option value="verallc descriptive">
                                Slightly different
                              </option>
                              <option value="Recipe approval (Very much different)">
                                Recipe approval (Very much different)
                              </option>
                            </select>
                            <TextField
                              placeholder="Enter a evaluation"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              rows={5}
                              variant="outlined"
                              value={description5.evel}
                              onChange={(e) =>
                                handleInputChangeonRecipie(data.code, 3, e)
                              }
                            />
                          </td>
                          <td>
                            <select
                              value={description6.evel}
                              onChange={(e) =>
                                handleEvaluation3(data.code, 4, e)
                              }
                            >
                              <option class="optionGroup" selected disabled>
                                Please select a source
                              </option>

                              <option value="Extremely different">
                                Extremely different
                              </option>
                              <option value="Very much different">
                                Very much different
                              </option>
                              <option value="Distinctly different">
                                Distinctly different
                              </option>
                              <option value="Moderately different">
                                Moderately different
                              </option>
                              <option value="verallc descriptive">
                                Slightly different
                              </option>
                              <option value="Recipe approval (Very much different)">
                                Recipe approval (Very much different)
                              </option>
                            </select>
                            <TextField
                              placeholder="Enter a evaluation"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              rows={5}
                              variant="outlined"
                              value={description5.evel}
                              onChange={(e) =>
                                handleInputChangeonRecipie(data.code, 4, e)
                              }
                            />
                          </td>
                          <td>
                            <select
                              value={description6.evel}
                              onChange={(e) =>
                                handleEvaluation3(data.code, 5, e)
                              }
                            >
                              <option class="optionGroup" selected disabled>
                                Please select a source
                              </option>

                              <option value="Extremely different">
                                Extremely different
                              </option>
                              <option value="Very much different">
                                Very much different
                              </option>
                              <option value="Distinctly different">
                                Distinctly different
                              </option>
                              <option value="Moderately different">
                                Moderately different
                              </option>
                              <option value="verallc descriptive">
                                Slightly different
                              </option>
                              <option value="Recipe approval (Very much different)">
                                Recipe approval (Very much different)
                              </option>
                            </select>
                            <TextField
                              placeholder="Enter a evaluation"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              rows={5}
                              variant="outlined"
                              value={description5.evel}
                              onChange={(e) =>
                                handleInputChangeonRecipie(data.code, 5, e)
                              }
                            />
                          </td>
                          <td>
                            <select
                              value={description6.evel}
                              onChange={(e) =>
                                handleEvaluation3(data.code, 6, e)
                              }
                            >
                              <option class="optionGroup" selected disabled>
                                Please select a source
                              </option>

                              <option value="Extremely different">
                                Extremely different
                              </option>
                              <option value="Very much different">
                                Very much different
                              </option>
                              <option value="Distinctly different">
                                Distinctly different
                              </option>
                              <option value="Moderately different">
                                Moderately different
                              </option>
                              <option value="verallc descriptive">
                                Slightly different
                              </option>
                              <option value="Recipe approval (Very much different)">
                                Recipe approval (Very much different)
                              </option>
                            </select>
                            <TextField
                              placeholder="Enter a evaluation"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              rows={5}
                              variant="outlined"
                              value={description5.evel}
                              onChange={(e) =>
                                handleInputChangeonRecipie(data.code, 6, e)
                              }
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          {data.tasting_type__description ===
            "Shelf life (comp. descriptive)" && (
            <div className="survey-ref-container">
              <div className="survey-ref-cont-1">
                <h4>
                  Please enter your evaluation for the pre-defined attributes
                </h4>
                <div class="table-responsive-lg mt-0">
                  <table class="table m-0 mt-1 text-center">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">Sample</th>
                        <th scope="col">{attributeSets.attribute1}</th>
                        <th scope="col">{attributeSets.attribute2}</th>
                        <th scope="col">{attributeSets.attribute3}</th>
                        <th scope="col">{attributeSets.attribute4}</th>
                        <th scope="col">{attributeSets.attribute5}</th>
                        <th scope="col">{attributeSets.attribute6}</th>
                      </tr>
                      <tr></tr>
                    </thead>{" "}
                    <tbody>
                      {data.tastingsample_set.map((data, i) => (
                        <tr className="">
                          <td className="overall-desc-thead">{data.code}</td>
                          <td>
                            <select
                              value={description7.evel}
                              onChange={(e) =>
                                handleEvaluation4(data.code, 1, e)
                              }
                            >
                              <option class="optionGroup" selected disabled>
                                Please select a source
                              </option>

                              <option value="Extremely different">
                                Extremely different
                              </option>
                              <option value="Very much different">
                                Very much different
                              </option>
                              <option value="Distinctly different">
                                Distinctly different
                              </option>
                              <option value="Moderately different">
                                Moderately different
                              </option>
                              <option value="verallc descriptive">
                                Slightly different
                              </option>
                              <option value="Recipe approval (Very much different)">
                                Recipe approval (Very much different)
                              </option>
                            </select>
                            <TextField
                              placeholder="Enter a evaluation"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              rows={5}
                              variant="outlined"
                              value={description8.evel}
                              onChange={(e) =>
                                handleInputChangeonShelfLife(data.code, 1, e)
                              }
                            />
                          </td>
                          <td>
                            <select
                              value={description7.evel}
                              onChange={(e) =>
                                handleEvaluation4(data.code, 2, e)
                              }
                            >
                              <option class="optionGroup" selected disabled>
                                Please select a source
                              </option>

                              <option value="Extremely different">
                                Extremely different
                              </option>
                              <option value="Very much different">
                                Very much different
                              </option>
                              <option value="Distinctly different">
                                Distinctly different
                              </option>
                              <option value="Moderately different">
                                Moderately different
                              </option>
                              <option value="verallc descriptive">
                                Slightly different
                              </option>
                              <option value="Recipe approval (Very much different)">
                                Recipe approval (Very much different)
                              </option>
                            </select>
                            <TextField
                              placeholder="Enter a evaluation"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              rows={5}
                              variant="outlined"
                              value={description8.evel}
                              onChange={(e) =>
                                handleInputChangeonShelfLife(data.code, 2, e)
                              }
                            />
                          </td>
                          <td>
                            <select
                              value={description7.evel}
                              onChange={(e) =>
                                handleEvaluation4(data.code, 3, e)
                              }
                            >
                              <option class="optionGroup" selected disabled>
                                Please select a source
                              </option>

                              <option value="Extremely different">
                                Extremely different
                              </option>
                              <option value="Very much different">
                                Very much different
                              </option>
                              <option value="Distinctly different">
                                Distinctly different
                              </option>
                              <option value="Moderately different">
                                Moderately different
                              </option>
                              <option value="verallc descriptive">
                                Slightly different
                              </option>
                              <option value="Recipe approval (Very much different)">
                                Recipe approval (Very much different)
                              </option>
                            </select>
                            <TextField
                              placeholder="Enter a evaluation"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              rows={5}
                              variant="outlined"
                              value={description8.evel}
                              onChange={(e) =>
                                handleInputChangeonShelfLife(data.code, 3, e)
                              }
                            />
                          </td>
                          <td>
                            <select
                              value={description7.evel}
                              onChange={(e) =>
                                handleEvaluation4(data.code, 4, e)
                              }
                            >
                              <option class="optionGroup" selected disabled>
                                Please select a source
                              </option>

                              <option value="Extremely different">
                                Extremely different
                              </option>
                              <option value="Very much different">
                                Very much different
                              </option>
                              <option value="Distinctly different">
                                Distinctly different
                              </option>
                              <option value="Moderately different">
                                Moderately different
                              </option>
                              <option value="verallc descriptive">
                                Slightly different
                              </option>
                              <option value="Recipe approval (Very much different)">
                                Recipe approval (Very much different)
                              </option>
                            </select>
                            <TextField
                              placeholder="Enter a evaluation"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              rows={5}
                              variant="outlined"
                              value={description8.evel}
                              onChange={(e) =>
                                handleInputChangeonShelfLife(data.code, 4, e)
                              }
                            />
                          </td>
                          <td>
                            <select
                              value={description7.evel}
                              onChange={(e) =>
                                handleEvaluation4(data.code, 5, e)
                              }
                            >
                              <option class="optionGroup" selected disabled>
                                Please select a source
                              </option>

                              <option value="Extremely different">
                                Extremely different
                              </option>
                              <option value="Very much different">
                                Very much different
                              </option>
                              <option value="Distinctly different">
                                Distinctly different
                              </option>
                              <option value="Moderately different">
                                Moderately different
                              </option>
                              <option value="verallc descriptive">
                                Slightly different
                              </option>
                              <option value="Recipe approval (Very much different)">
                                Recipe approval (Very much different)
                              </option>
                            </select>
                            <TextField
                              placeholder="Enter a evaluation"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              rows={5}
                              variant="outlined"
                              value={description8.evel}
                              onChange={(e) =>
                                handleInputChangeonShelfLife(data.code, 5, e)
                              }
                            />
                          </td>
                          <td>
                            <select
                              value={description7.evel}
                              onChange={(e) =>
                                handleEvaluation4(data.code, 6, e)
                              }
                            >
                              <option class="optionGroup" selected disabled>
                                Please select a source
                              </option>

                              <option value="Extremely different">
                                Extremely different
                              </option>
                              <option value="Very much different">
                                Very much different
                              </option>
                              <option value="Distinctly different">
                                Distinctly different
                              </option>
                              <option value="Moderately different">
                                Moderately different
                              </option>
                              <option value="verallc descriptive">
                                Slightly different
                              </option>
                              <option value="Recipe approval (Very much different)">
                                Recipe approval (Very much different)
                              </option>
                            </select>
                            <TextField
                              placeholder="Enter a evaluation"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              rows={5}
                              variant="outlined"
                              value={description8.evel}
                              onChange={(e) =>
                                handleInputChangeonShelfLife(data.code, 6, e)
                              }
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          {data.tasting_type__description ===
            "Ingredient evaluation (comp. descriptive)" && (
            <div className="survey-ref-container">
              <div className="survey-ref-cont-1">
                <h4>
                  Please enter your evaluation for the pre-defined attributes
                </h4>
                <div class="table-responsive-lg mt-0">
                  <table class="table m-0 mt-1 text-center">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">Sample</th>
                        <th scope="col">{attributeSets.attribute1}</th>
                        <th scope="col">{attributeSets.attribute2}</th>
                        <th scope="col">{attributeSets.attribute3}</th>
                        <th scope="col">{attributeSets.attribute4}</th>
                        <th scope="col">{attributeSets.attribute5}</th>
                        <th scope="col">{attributeSets.attribute6}</th>
                      </tr>
                      <tr></tr>
                    </thead>{" "}
                    <tbody>
                      {data.tastingsample_set.map((data, i) => (
                        <tr className="">
                          <td className="overall-desc-thead">{data.code}</td>
                          <td>
                            <select
                              value={description9.evel}
                              onChange={(e) =>
                                handleEvaluation5(data.code, 1, e)
                              }
                            >
                              <option class="optionGroup" selected disabled>
                                Please select a source
                              </option>

                              <option value="Extremely different">
                                Extremely different
                              </option>
                              <option value="Very much different">
                                Very much different
                              </option>
                              <option value="Distinctly different">
                                Distinctly different
                              </option>
                              <option value="Moderately different">
                                Moderately different
                              </option>
                              <option value="verallc descriptive">
                                Slightly different
                              </option>
                              <option value="Recipe approval (Very much different)">
                                Recipe approval (Very much different)
                              </option>
                            </select>
                            <TextField
                              placeholder="Enter a evaluation"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              rows={5}
                              variant="outlined"
                              value={description10.evel}
                              onChange={(e) =>
                                handleInputChangeonIngredient(data.code, 1, e)
                              }
                            />
                          </td>
                          <td>
                            <select
                              value={description9.evel}
                              onChange={(e) =>
                                handleEvaluation5(data.code, 2, e)
                              }
                            >
                              <option class="optionGroup" selected disabled>
                                Please select a source
                              </option>

                              <option value="Extremely different">
                                Extremely different
                              </option>
                              <option value="Very much different">
                                Very much different
                              </option>
                              <option value="Distinctly different">
                                Distinctly different
                              </option>
                              <option value="Moderately different">
                                Moderately different
                              </option>
                              <option value="verallc descriptive">
                                Slightly different
                              </option>
                              <option value="Recipe approval (Very much different)">
                                Recipe approval (Very much different)
                              </option>
                            </select>
                            <TextField
                              placeholder="Enter a evaluation"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              rows={5}
                              variant="outlined"
                              value={description10.evel}
                              onChange={(e) =>
                                handleInputChangeonIngredient(data.code, 2, e)
                              }
                            />
                          </td>
                          <td>
                            <select
                              value={description9.evel}
                              onChange={(e) =>
                                handleEvaluation5(data.code, 3, e)
                              }
                            >
                              <option class="optionGroup" selected disabled>
                                Please select a source
                              </option>

                              <option value="Extremely different">
                                Extremely different
                              </option>
                              <option value="Very much different">
                                Very much different
                              </option>
                              <option value="Distinctly different">
                                Distinctly different
                              </option>
                              <option value="Moderately different">
                                Moderately different
                              </option>
                              <option value="verallc descriptive">
                                Slightly different
                              </option>
                              <option value="Recipe approval (Very much different)">
                                Recipe approval (Very much different)
                              </option>
                            </select>
                            <TextField
                              placeholder="Enter a evaluation"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              rows={5}
                              variant="outlined"
                              value={description10.evel}
                              onChange={(e) =>
                                handleInputChangeonIngredient(data.code, 3, e)
                              }
                            />
                          </td>
                          <td>
                            <select
                              value={description9.evel}
                              onChange={(e) =>
                                handleEvaluation5(data.code, 4, e)
                              }
                            >
                              <option class="optionGroup" selected disabled>
                                Please select a source
                              </option>

                              <option value="Extremely different">
                                Extremely different
                              </option>
                              <option value="Very much different">
                                Very much different
                              </option>
                              <option value="Distinctly different">
                                Distinctly different
                              </option>
                              <option value="Moderately different">
                                Moderately different
                              </option>
                              <option value="verallc descriptive">
                                Slightly different
                              </option>
                              <option value="Recipe approval (Very much different)">
                                Recipe approval (Very much different)
                              </option>
                            </select>
                            <TextField
                              placeholder="Enter a evaluation"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              rows={5}
                              variant="outlined"
                              value={description10.evel}
                              onChange={(e) =>
                                handleInputChangeonIngredient(data.code, 4, e)
                              }
                            />
                          </td>
                          <td>
                            <select
                              value={description9.evel}
                              onChange={(e) =>
                                handleEvaluation5(data.code, 5, e)
                              }
                            >
                              <option class="optionGroup" selected disabled>
                                Please select a source
                              </option>

                              <option value="Extremely different">
                                Extremely different
                              </option>
                              <option value="Very much different">
                                Very much different
                              </option>
                              <option value="Distinctly different">
                                Distinctly different
                              </option>
                              <option value="Moderately different">
                                Moderately different
                              </option>
                              <option value="verallc descriptive">
                                Slightly different
                              </option>
                              <option value="Recipe approval (Very much different)">
                                Recipe approval (Very much different)
                              </option>
                            </select>
                            <TextField
                              placeholder="Enter a evaluation"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              rows={5}
                              variant="outlined"
                              value={description10.evel}
                              onChange={(e) =>
                                handleInputChangeonIngredient(data.code, 5, e)
                              }
                            />
                          </td>
                          <td>
                            <select
                              value={description9.evel}
                              onChange={(e) =>
                                handleEvaluation5(data.code, 6, e)
                              }
                            >
                              <option class="optionGroup" selected disabled>
                                Please select a source
                              </option>

                              <option value="Extremely different">
                                Extremely different
                              </option>
                              <option value="Very much different">
                                Very much different
                              </option>
                              <option value="Distinctly different">
                                Distinctly different
                              </option>
                              <option value="Moderately different">
                                Moderately different
                              </option>
                              <option value="verallc descriptive">
                                Slightly different
                              </option>
                              <option value="Recipe approval (Very much different)">
                                Recipe approval (Very much different)
                              </option>
                            </select>
                            <TextField
                              placeholder="Enter a evaluation"
                              id="outlined-multiline-static"
                              multiline
                              fullWidth
                              rows={5}
                              variant="outlined"
                              value={description10.evel}
                              onChange={(e) =>
                                handleInputChangeonIngredient(data.code, 6, e)
                              }
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          {data.tasting_type__description === "Comp. descriptive" && (
            <div className="survey-ref-container">
              <div className="survey-ref-cont-1">
                <h4>Define Reference Attributes</h4>

                <div class="table-responsive-sm mt-0">
                  <table class="table m-0 mt-1 text-center">
                    <thead class="thead-light">
                      <tr>
                        {data.attribute_set__attribute1 && (
                          <th scope="col">{data.attribute_set__attribute1}</th>
                        )}

                        {data.attribute_set__attribute1 && (
                          <th scope="col">{data.attribute_set__attribute2}</th>
                        )}

                        {data.attribute_set__attribute1 && (
                          <th scope="col">{data.attribute_set__attribute3}</th>
                        )}

                        {data.attribute_set__attribute1 && (
                          <th scope="col">{data.attribute_set__attribute4}</th>
                        )}

                        {data.attribute_set__attribute1 && (
                          <th scope="col">{data.attribute_set__attribute5}</th>
                        )}

                        {data.attribute_set__attribute1 && (
                          <th scope="col">{data.attribute_set__attribute6}</th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {data.attribute1 && (
                          <th scope="col">{data.attribute1}</th>
                        )}

                        {data.attribute2 && (
                          <th scope="col">{data.attribute2}</th>
                        )}

                        {data.attribute3 && (
                          <th scope="col">{data.attribute3}</th>
                        )}

                        {data.attribute4 && (
                          <th scope="col">{data.attribute4}</th>
                        )}
                        {data.attribute5 && (
                          <th scope="col">{data.attribute5}</th>
                        )}
                        {data.attribute6 && (
                          <th scope="col">{data.attribute6}</th>
                        )}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="survey-ref-cont-2">
                <div className="survey-ref-cont-2-btn">
                  <Button
                    className="col-sm-5 survey-ref-btn-1"
                    variant="contained"
                  >
                    {" "}
                    Reference: ref veg
                  </Button>
                  {data.tastingsample_set.map((tastId, i) => (
                    <>
                      <Button
                        className="col-1 mb-0"
                        onClick={openDefineRef}
                        variant="outlined"
                        color="primary"
                      >
                        {tastId.code}
                      </Button>

                      {defRef && (
                        <div className="mt-0 mb-2">
                          <div className="row">
                            <div className="col-sm-4 col-md-2">
                              <h6>{attributeSets.attribute1}</h6>
                              <td>
                                <select
                                  value={description3.evel}
                                  onChange={(e) =>
                                    handleEvaluation2(tastId.code, 1, e)
                                  }
                                >
                                  <option class="optionGroup" selected disabled>
                                    Please select a source
                                  </option>

                                  <option value="Extremely different">
                                    Extremely different
                                  </option>
                                  <option value="Very much different">
                                    Very much different
                                  </option>
                                  <option value="Distinctly different">
                                    Distinctly different
                                  </option>
                                  <option value="Moderately different">
                                    Moderately different
                                  </option>
                                  <option value="verallc descriptive">
                                    Slightly different
                                  </option>
                                  <option value="Recipe approval (Very much different)">
                                    Recipe approval (Very much different)
                                  </option>
                                </select>
                                <TextField
                                  placeholder="Enter a evaluation"
                                  id="outlined-multiline-static"
                                  multiline
                                  fullWidth
                                  rows={5}
                                  variant="outlined"
                                  value={description2.evel}
                                  onChange={(e) =>
                                    handleEvaluation(tastId.code, 1, e)
                                  }
                                />
                              </td>
                            </div>
                            <div className="col-sm-4 col-md-2">
                              <h6>{attributeSets.attribute2}</h6>
                              <select
                                value={description3.evel}
                                onChange={(e) =>
                                  handleEvaluation2(tastId.code, 2, e)
                                }
                              >
                                <option class="optionGroup" selected disabled>
                                  Please select a source
                                </option>

                                <option value="Extremely different">
                                  Extremely different
                                </option>
                                <option value="Very much different">
                                  Very much different
                                </option>
                                <option value="Distinctly different">
                                  Distinctly different
                                </option>
                                <option value="Moderately different">
                                  Moderately different
                                </option>
                                <option value="verallc descriptive">
                                  Slightly different
                                </option>
                                <option value="Recipe approval (Very much different)">
                                  Recipe approval (Very much different)
                                </option>
                              </select>
                              <TextField
                                placeholder="Enter a evaluation"
                                id="outlined-multiline-static"
                                multiline
                                fullWidth
                                rows={5}
                                variant="outlined"
                                value={description2.evel}
                                onChange={(e) =>
                                  handleEvaluation(tastId.code, 2, e)
                                }
                              />
                            </div>
                            <div className="col-sm-4 col-md-2">
                              <h6>{attributeSets.attribute3}</h6>
                              <select
                                value={description3.evel}
                                onChange={(e) =>
                                  handleEvaluation2(tastId.code, 3, e)
                                }
                              >
                                <option class="optionGroup" selected disabled>
                                  Please select a source
                                </option>

                                <option value="Extremely different">
                                  Extremely different
                                </option>
                                <option value="Very much different">
                                  Very much different
                                </option>
                                <option value="Distinctly different">
                                  Distinctly different
                                </option>
                                <option value="Moderately different">
                                  Moderately different
                                </option>
                                <option value="verallc descriptive">
                                  Slightly different
                                </option>
                                <option value="Recipe approval (Very much different)">
                                  Recipe approval (Very much different)
                                </option>
                              </select>
                              <TextField
                                placeholder="Enter a evaluation"
                                id="outlined-multiline-static"
                                multiline
                                fullWidth
                                rows={5}
                                variant="outlined"
                                value={description2.evel}
                                onChange={(e) =>
                                  handleEvaluation(tastId.code, 3, e)
                                }
                              />
                            </div>
                            <div className="col-sm-4 col-md-2">
                              <h6>{attributeSets.attribute4}</h6>
                              <select
                                value={description3.evel}
                                onChange={(e) =>
                                  handleEvaluation2(tastId.code, 4, e)
                                }
                              >
                                <option class="optionGroup" selected disabled>
                                  Please select a source
                                </option>

                                <option value="Extremely different">
                                  Extremely different
                                </option>
                                <option value="Very much different">
                                  Very much different
                                </option>
                                <option value="Distinctly different">
                                  Distinctly different
                                </option>
                                <option value="Moderately different">
                                  Moderately different
                                </option>
                                <option value="verallc descriptive">
                                  Slightly different
                                </option>
                                <option value="Recipe approval (Very much different)">
                                  Recipe approval (Very much different)
                                </option>
                              </select>
                              <TextField
                                placeholder="Enter a evaluation"
                                id="outlined-multiline-static"
                                multiline
                                fullWidth
                                rows={5}
                                variant="outlined"
                                value={description2.evel}
                                onChange={(e) =>
                                  handleEvaluation(tastId.code, 4, e)
                                }
                              />
                            </div>
                            <div className="col-sm-4 col-md-2">
                              <h6>{attributeSets.attribute5}</h6>
                              <select
                                value={description3.evel}
                                onChange={(e) =>
                                  handleEvaluation2(tastId.code, 5, e)
                                }
                              >
                                <option class="optionGroup" selected disabled>
                                  Please select a source
                                </option>

                                <option value="Extremely different">
                                  Extremely different
                                </option>
                                <option value="Very much different">
                                  Very much different
                                </option>
                                <option value="Distinctly different">
                                  Distinctly different
                                </option>
                                <option value="Moderately different">
                                  Moderately different
                                </option>
                                <option value="verallc descriptive">
                                  Slightly different
                                </option>
                                <option value="Recipe approval (Very much different)">
                                  Recipe approval (Very much different)
                                </option>
                              </select>
                              <TextField
                                placeholder="Enter a evaluation"
                                id="outlined-multiline-static"
                                multiline
                                fullWidth
                                rows={5}
                                variant="outlined"
                                value={description2.evel}
                                onChange={(e) =>
                                  handleEvaluation(tastId.code, 5, e)
                                }
                              />
                            </div>
                            <div className="col-sm-4 col-md-2">
                              <h6>{attributeSets.attribute6}</h6>
                              <select
                                value={description3.evel}
                                onChange={(e) =>
                                  handleEvaluation2(tastId.code, 6, e)
                                }
                              >
                                <option class="optionGroup" selected disabled>
                                  Please select a source
                                </option>

                                <option value="Extremely different">
                                  Extremely different
                                </option>
                                <option value="Very much different">
                                  Very much different
                                </option>
                                <option value="Distinctly different">
                                  Distinctly different
                                </option>
                                <option value="Moderately different">
                                  Moderately different
                                </option>
                                <option value="verallc descriptive">
                                  Slightly different
                                </option>
                                <option value="Recipe approval (Very much different)">
                                  Equaly reference
                                </option>
                              </select>
                              <TextField
                                placeholder="Enter a evaluation"
                                id="outlined-multiline-static"
                                multiline
                                fullWidth
                                rows={5}
                                variant="outlined"
                                value={description2.evel}
                                onChange={(e) =>
                                  handleEvaluation(tastId.code, 6, e)
                                }
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
          )}

          {data.tasting_type__description === "Discrimination 2AFCR" && (
            <div className="survey-ref-container">
              <h6>Please Click On Each Sample Set To Enter Your Evaluation</h6>
              {data.tastingsample_set.map((tast, index) => (
                <>
                  <div className="b mt-4 p-4 ">
                    <Button
                      className="mb-2 survey-discrimination-heading"
                      variant="outlined"
                    >
                      Sample Set {index + 1}
                    </Button>
                    <div className="survey-discrimination-cont">
                      <div className="b m-1">
                        <p className="survey-discrimination-cont-input-head">
                          Reference
                        </p>
                        <div className=" survey-discrimination-cont-input">
                          {tast.code && (
                            <p className="survey-discrimination-cont-input-text">
                              {tast.code}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="b m-1">
                        <p className="survey-discrimination-cont-input-head">
                          Sample 1
                        </p>
                        <div className=" survey-discrimination-cont-input">
                          <input
                            className=" survey-discrimination-cont-textbox"
                            type="checkbox"
                            value={tast.sample_description}
                            onChange={(e) => handleCheckboxData(e, index)}
                          />
                          <p className=" survey-discrimination-cont-input-text">
                            {tast.sample_description}
                          </p>
                        </div>
                      </div>
                      <div className="b m-1">
                        <p className="survey-discrimination-cont-input-head">
                          Sample 2
                        </p>
                        <div className=" survey-discrimination-cont-input">
                          <input
                            className=" survey-discrimination-cont-textbox"
                            type="checkbox"
                            value={tast.specification}
                            onChange={(e) => handleCheckboxData2(e, index)}
                          />
                          <p className="survey-discrimination-cont-input-text">
                            {tast.specification}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className=" mt-3">
                      <Typography className="text-base">
                        Sample Set #{index + 1} How Sure Are You Of This ?
                      </Typography>
                      <FormControl component="fieldset">
                        <RadioGroup
                          row
                          aria-label="position"
                          name="position"
                          defaultValue="top"
                          onChange={(e) => handleRadioGroup(e, index)}
                        >
                          <FormControlLabel
                            value="I'm sure"
                            control={<Radio color="primary" />}
                            label="I'm sure(1)"
                          />
                          <FormControlLabel
                            value="I'm not sure"
                            control={<Radio color="primary" />}
                            label="I'm not sure(2)"
                          />
                          <FormControlLabel
                            value="I guessed"
                            control={<Radio color="primary" />}
                            label="I guessed(3)"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div>
                      <label className="text-base">
                        Sample set {index + 1} How is the other sample different
                        from the reference(please mention if it is just
                        guessing)
                      </label>
                      <textarea
                        className="p-2 mt-2"
                        style={{ width: "100%" }}
                        type="text"
                        row="10"
                        value={description4.evel}
                        onChange={(e) => handleDescription4(e, index)}
                      />
                    </div>
                  </div>
                </>
              ))}
            </div>
          )}
          <div className="js">
            <Button
              className="survey-btn"
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
              type="submit"
            >
              Save
            </Button>
            <Button
              className="survey-btn"
              variant="contained"
              color="primary"
              startIcon={<LockIcon />}
              type="submit"
            >
              Save and lock changes
            </Button>
          </div>
        </form>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Input Saved ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please ensure you have saved your all entries!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            component={Link}
            to={"/survey/surveys"}
            onClick={handleClose}
            color="primary"
            autoFocus
          >
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
