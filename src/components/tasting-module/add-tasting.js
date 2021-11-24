import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  snackbarStyleViaContentProps: {
    backgroundColor: "#FF544F",
  },
  snackbarStyleViaNestedContent: {
    backgroundColor: "#4BB543",
  },
}));

const AddTasting = () => {
  const history = useHistory();
  const classes = useStyles();
  const [details, setDetails] = useState([]);
  const [references, setReferences] = useState("");
  const [rows, setRows] = useState([]);
  const [set1_1, setSet1_1] = useState("");
  const [set1_2, setSet1_2] = useState("");
  const [set2_1, setSet2_1] = useState("");
  const [set2_2, setSet2_2] = useState("");
  const [set3_1, setSet3_1] = useState("");
  const [set3_2, setSet3_2] = useState("");
  const [set4_1, setSet4_1] = useState("");
  const [set4_2, setSet4_2] = useState("");
  const [set5_1, setSet5_1] = useState("");
  const [set5_2, setSet5_2] = useState("");
  const [set6_1, setSet6_1] = useState("");
  const [set6_2, setSet6_2] = useState("");
  const [tasting_type, setTastingType] = useState("");
  const [category, setCategory] = useState("");
  const [region, setTastingRegion] = useState("");
  const [description, setDescription] = useState("");
  const [survey_tasting_description, setSurveyTastingDescription] =
    useState("");
  const [ipm_project, setImpProject] = useState("");
  const [product_group, setProductGroup] = useState(null);
  const [product_recipe_name, setProductRecipeName] = useState("");
  const [plmCodeOne, setPlmCodeOne] = useState("");
  const [plmCodeTwo, setPlmCodeTwo] = useState("");
  const [plmCodeThree, setPlmCodeThree] = useState("");
  const [application, setApplication] = useState("");
  const [objective, setObjective] = useState("");
  const [date_of_tasting, setDate] = useState();
  const [attribute_set, setAttributeSet] = useState("");
  const [panel_view, setPanelView] = useState("");
  const [status, setStatus] = useState("");

  const plm_code = plmCodeOne + "/" + plmCodeTwo + "/" + plmCodeThree;

  const [_tastingType, set_TastingType] = useState([]);
  const [_category, set_Category] = useState([]);
  const [_tastingRegion, set_TastingRegion] = useState([]);
  const [_attributeSet, set_AttributeSet] = useState([]);
  const [_panelView, set_panelView] = useState([]);
  const [_status, set_Status] = useState([]);
  const [_productGroup, set_ProductGroup] = useState([]);
  const [sampleLength, setSampleLength] = useState();
  const [open, setOpen] = useState(false);

  const [success, setSuccess] = useState(false);
  const [fillTastingType, setFillTastingType] = useState(false);
  const [fillCategory, setFillCategory] = useState(false);
  const [fillTastingRegion, setFillTastingRegion] = useState(false);
  const [fillTastingDescription, setFillTastingDescription] = useState(false);
  const [fillAttributeSet, setFillAttributeSet] = useState(false);
  const [fillPanelView, setFillPanelView] = useState(false);
  const [fillStatus, setFillStatus] = useState(false);
  const [attributeId, setAttributeId] = useState();

  const [attribute1, setAttribute1] = useState("");
  const [attribute2, setAttribute2] = useState("");
  const [attribute3, setAttribute3] = useState("");
  const [attribute4, setAttribute4] = useState("");
  const [attribute5, setAttribute5] = useState("");
  const [attribute6, setAttribute6] = useState("");

  const handleToClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setOpen(false);
  };
  const handleValidation = () => {
    !tasting_type && setFillTastingType(true);
    !category && setFillCategory(true);
    !region && setFillTastingRegion(true);
    !description && setFillTastingDescription(true);
    !attribute_set && setFillAttributeSet(true);
    !panel_view && setFillPanelView(true);
    !status && setFillStatus(true);
  };

  const handleAttributeSet = async (e) => {
    await setAttributeSet(e.target.value);
    await axios
      .get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/attribute_set/${e.target.value}/`
      )
      .then(async (res) => {
        await setAttributeId(res.data);
      });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/v1/samples/`)
      .then((res) => {
        setRows(res.data.results);
      });

    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/v1/samples/`)
      .then((res) => {
        setRows(res.data.results);
      });

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
        set_TastingRegion(res.data.results.reverse());
      });

    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/v1/product_groups/`)
      .then((res) => {
        set_ProductGroup(res.data.results.reverse());
      });

    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/v1/attribute_set/`)
      .then((res) => {
        set_AttributeSet(res.data.results.reverse());
      });

    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/v1/panel_views/`)
      .then((res) => {
        set_panelView(res.data.results.reverse());
      });

    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/v1/statuses/`)
      .then((res) => {
        set_Status(res.data.results);
      });
  }, []);

  const [tastingsample_set, setTastingsample_set] = useState([
    {
      code: "",
      sample_description: "",
      specification: "",
    },
  ]);
  useEffect(() => {
    tasting_type === "3" &&
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
    (tasting_type === "1" ||
      tasting_type === "2" ||
      tasting_type === "4" ||
      tasting_type === "5" ||
      tasting_type === "6" ||
      tasting_type === "7") &&
      setTastingsample_set([
        { code: "", sample_description: "", specification: "" },
        { code: "", sample_description: "", specification: "" },
      ]);
  }, [setTastingsample_set, tasting_type]);

  useEffect(() => {
    setSampleLength(tastingsample_set.length);
  }, [tastingsample_set]);

  const handleChangeInput = (index, e) => {
    const values = [...tastingsample_set];
    values[index][e.target.name] = e.target.value;
    setTastingsample_set(values);
  };
  const handleChangeReferences = (event) => {
    setReferences(event.target.value);
  };
  const handleChangeInputSet1_1 = (event) => {
    setSet1_1(event.target.value);
  };
  const handleChangeInputSet1_2 = (event) => {
    setSet1_2(event.target.value);
  };
  const handleChangeInputSet2_1 = (event) => {
    setSet2_1(event.target.value);
  };
  const handleChangeInputSet2_2 = (event) => {
    setSet2_2(event.target.value);
  };
  const handleChangeInputSet3_1 = (event) => {
    setSet3_1(event.target.value);
  };
  const handleChangeInputSet3_2 = (event) => {
    setSet3_2(event.target.value);
  };
  const handleChangeInputSet4_1 = (event) => {
    setSet4_1(event.target.value);
  };
  const handleChangeInputSet4_2 = (event) => {
    setSet4_2(event.target.value);
  };
  const handleChangeInputSet5_1 = (event) => {
    setSet5_1(event.target.value);
  };
  const handleChangeInputSet5_2 = (event) => {
    setSet5_2(event.target.value);
  };
  const handleChangeInputSet6_1 = (event) => {
    setSet6_1(event.target.value);
  };
  const handleChangeInputSet6_2 = (event) => {
    setSet6_2(event.target.value);
  };
  const onDragOverReference = (e) => {
    e.preventDefault();
  };
  const onDragOverInputSet1_1 = (e) => {
    e.preventDefault();
  };
  const onDragOverInputSet1_2 = (e) => {
    e.preventDefault();
  };
  const onDragOverInputSet2_1 = (e) => {
    e.preventDefault();
  };
  const onDragOverInputSet2_2 = (e) => {
    e.preventDefault();
  };
  const onDragOverInputSet3_1 = (e) => {
    e.preventDefault();
  };
  const onDragOverInputSet3_2 = (e) => {
    e.preventDefault();
  };
  const onDragOverInputSet4_1 = (e) => {
    e.preventDefault();
  };
  const onDragOverInputSet4_2 = (e) => {
    e.preventDefault();
  };
  const onDragOverInputSet5_1 = (e) => {
    e.preventDefault();
  };
  const onDragOverInputSet5_2 = (e) => {
    e.preventDefault();
  };
  const onDragOverInputSet6_1 = (e) => {
    e.preventDefault();
  };
  const onDragOverInputSet6_2 = (e) => {
    e.preventDefault();
  };
  const handleDrag = (e, row) => {
    e.dataTransfer.setData("Code", row.code);
  };
  const onDropReference = (e) => {
    let code = e.dataTransfer.getData("Code");
    tasting_type === "3" &&
      setTastingsample_set([
        {
          code: code,
          sample_description: tastingsample_set[0].sample_description,
          specification: tastingsample_set[0].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[1].sample_description,
          specification: tastingsample_set[1].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[2].sample_description,
          specification: tastingsample_set[2].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[3].sample_description,
          specification: tastingsample_set[3].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[4].sample_description,
          specification: tastingsample_set[4].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[5].sample_description,
          specification: tastingsample_set[5].specification,
        },
      ]);
  };
  const onDropInputSet1_1 = (e) => {
    let code = e.dataTransfer.getData("Code");
    tasting_type === "3" &&
      setTastingsample_set([
        {
          code: tastingsample_set[0].code,
          sample_description: code,
          specification: tastingsample_set[0].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[1].sample_description,
          specification: tastingsample_set[1].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[2].sample_description,
          specification: tastingsample_set[2].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[3].sample_description,
          specification: tastingsample_set[3].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[4].sample_description,
          specification: tastingsample_set[4].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[5].sample_description,
          specification: tastingsample_set[5].specification,
        },
      ]);
  };
  const onDropInputSet1_2 = (e) => {
    let code = e.dataTransfer.getData("Code");
    tasting_type === "3" &&
      setTastingsample_set([
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[0].sample_description,
          specification: code,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[1].sample_description,
          specification: tastingsample_set[1].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[2].sample_description,
          specification: tastingsample_set[2].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[3].sample_description,
          specification: tastingsample_set[3].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[4].sample_description,
          specification: tastingsample_set[4].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[5].sample_description,
          specification: tastingsample_set[5].specification,
        },
      ]);
  };
  const onDropInputSet2_1 = (e) => {
    let code = e.dataTransfer.getData("Code");
    tasting_type === "3" &&
      setTastingsample_set([
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[0].sample_description,
          specification: tastingsample_set[0].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: code,
          specification: tastingsample_set[1].specification,
        },

        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[2].sample_description,
          specification: tastingsample_set[2].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[3].sample_description,
          specification: tastingsample_set[3].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[4].sample_description,
          specification: tastingsample_set[4].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[5].sample_description,
          specification: tastingsample_set[5].specification,
        },
      ]);
  };
  const onDropInputSet2_2 = (e) => {
    let code = e.dataTransfer.getData("Code");
    tasting_type === "3" &&
      setTastingsample_set([
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[0].sample_description,
          specification: tastingsample_set[0].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[1].sample_description,
          specification: code,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[2].sample_description,
          specification: tastingsample_set[2].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[3].sample_description,
          specification: tastingsample_set[3].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[4].sample_description,
          specification: tastingsample_set[4].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[5].sample_description,
          specification: tastingsample_set[5].specification,
        },
      ]);
  };
  const onDropInputSet3_1 = (e) => {
    let code = e.dataTransfer.getData("Code");
    tasting_type === "3" &&
      setTastingsample_set([
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[0].sample_description,
          specification: tastingsample_set[0].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[1].sample_description,
          specification: tastingsample_set[1].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: code,
          specification: tastingsample_set[2].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[3].sample_description,
          specification: tastingsample_set[3].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[4].sample_description,
          specification: tastingsample_set[4].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[5].sample_description,
          specification: tastingsample_set[5].specification,
        },
      ]);
  };
  const onDropInputSet3_2 = (e) => {
    let code = e.dataTransfer.getData("Code");
    tasting_type === "3" &&
      setTastingsample_set([
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[0].sample_description,
          specification: tastingsample_set[0].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[1].sample_description,
          specification: tastingsample_set[1].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[2].sample_description,
          specification: code,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[3].sample_description,
          specification: tastingsample_set[3].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[4].sample_description,
          specification: tastingsample_set[4].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[5].sample_description,
          specification: tastingsample_set[5].specification,
        },
      ]);
  };
  const onDropInputSet4_1 = (e) => {
    let code = e.dataTransfer.getData("Code");
    tasting_type === "3" &&
      setTastingsample_set([
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[0].sample_description,
          specification: tastingsample_set[0].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[1].sample_description,
          specification: tastingsample_set[1].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[2].sample_description,
          specification: tastingsample_set[2].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: code,
          specification: tastingsample_set[3].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[4].sample_description,
          specification: tastingsample_set[4].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[5].sample_description,
          specification: tastingsample_set[5].specification,
        },
      ]);
  };
  const onDropInputSet4_2 = (e) => {
    let code = e.dataTransfer.getData("Code");
    tasting_type === "3" &&
      setTastingsample_set([
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[0].sample_description,
          specification: tastingsample_set[0].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[1].sample_description,
          specification: tastingsample_set[1].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[2].sample_description,
          specification: tastingsample_set[2].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[3].sample_description,
          specification: code,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[4].sample_description,
          specification: tastingsample_set[4].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[5].sample_description,
          specification: tastingsample_set[5].specification,
        },
      ]);
  };
  const onDropInputSet5_1 = (e) => {
    let code = e.dataTransfer.getData("Code");
    tasting_type === "3" &&
      setTastingsample_set([
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[0].sample_description,
          specification: tastingsample_set[0].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[1].sample_description,
          specification: tastingsample_set[1].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[2].sample_description,
          specification: tastingsample_set[2].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[3].sample_description,
          specification: tastingsample_set[3].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: code,
          specification: tastingsample_set[4].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[5].sample_description,
          specification: tastingsample_set[5].specification,
        },
      ]);
  };
  const onDropInputSet5_2 = (e) => {
    let code = e.dataTransfer.getData("Code");
    tasting_type === "3" &&
      setTastingsample_set([
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[0].sample_description,
          specification: tastingsample_set[0].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[1].sample_description,
          specification: tastingsample_set[1].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[2].sample_description,
          specification: tastingsample_set[2].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[3].sample_description,
          specification: tastingsample_set[3].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[4].sample_description,
          specification: code,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[5].sample_description,
          specification: tastingsample_set[5].specification,
        },
      ]);
  };
  const onDropInputSet6_1 = (e) => {
    let code = e.dataTransfer.getData("Code");
    tasting_type === "3" &&
      setTastingsample_set([
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[0].sample_description,
          specification: tastingsample_set[0].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[1].sample_description,
          specification: tastingsample_set[1].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[2].sample_description,
          specification: tastingsample_set[2].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[3].sample_description,
          specification: tastingsample_set[3].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[4].sample_description,
          specification: tastingsample_set[4].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: code,
          specification: tastingsample_set[5].specification,
        },
      ]);
  };
  const onDropInputSet6_2 = (e) => {
    let code = e.dataTransfer.getData("Code");
    tasting_type === "3" &&
      setTastingsample_set([
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[0].sample_description,
          specification: tastingsample_set[0].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[1].sample_description,
          specification: tastingsample_set[1].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[2].sample_description,
          specification: tastingsample_set[2].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[3].sample_description,
          specification: tastingsample_set[3].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[4].sample_description,
          specification: tastingsample_set[4].specification,
        },
        {
          code: tastingsample_set[0].code,
          sample_description: tastingsample_set[5].sample_description,
          specification: code,
        },
      ]);
  };
  const handleAddFields = () => {
    setTastingsample_set([
      { code: "", sample_description: "", specification: "" },
    ]);
  };

  const handleRemoveFields = (index) => {
    const values = [...tastingsample_set];
    values.splice(index, 1);
    setTastingsample_set(values);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (
      !tasting_type ||
      !category ||
      !region ||
      !description ||
      !attribute_set ||
      !panel_view
    ) {
      setOpen(true);
    }
    tasting_type === "3" &&
      setTastingsample_set([
        {
          code: references,
          sample_description: set1_1,
          specification: set1_2,
        },
        {
          code: references,
          sample_description: set2_1,
          specificaton: set2_2,
        },

        {
          code: references,
          sample_description: set3_1,
          specification: set3_2,
        },
        {
          code: references,
          sample_description: set4_1,
          specification: set4_2,
        },
        {
          code: references,
          sample_description: set5_1,
          specification: set5_2,
        },
        {
          code: references,
          sample_description: set6_1,
          specification: set6_2,
        },
      ]);

    setDetails([
      ...details,
      {
        tasting_type,
        category,
        region,
        description,
        survey_tasting_description,
        ipm_project,
        product_group,
        product_recipe_name,
        plm_code,
        application,
        objective,
        date_of_tasting,
        attribute_set,
        panel_view,
        status,
        attribute1,
        attribute2,
        attribute3,
        attribute4,
        attribute5,
        attribute6,
        tastingsample_set: tastingsample_set,
      },
    ]);

    try {
      var payload = {
        tasting_type: tasting_type,
        category: category,
        region: region,
        description: description,
        survey_tasting_description: survey_tasting_description,
        ipm_project: ipm_project,
        product_group: product_group,
        product_recipe_name: product_recipe_name,
        plm_code: plm_code,
        application: application,
        objective: objective,
        date_of_tasting: date_of_tasting,
        attribute_set: attribute_set,
        panel_view: panel_view,
        status: status,
        attribute1: attribute1,
        attribute2: attribute2,
        attribute3: attribute3,
        attribute4: attribute4,
        attribute5: attribute5,
        attribute6: attribute6,
        tastingsample_set: tastingsample_set,
      };

      await axios.post(
        process.env.REACT_APP_SERVER_PATH + "/api/v1/tastings/",
        payload
      );

      setSuccess(true);

      setTimeout(() => {
        history.push("/tasting");
      }, 1500);
    } catch (e) {
      console.log("error in add tasting page");
    }
  };

  const handlePlmCodeOne = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setPlmCodeOne(e.target.value);
    }
  };

  const handlePlmCodeTwo = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setPlmCodeTwo(e.target.value);
    }
  };

  const handlePlmCodeThree = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setPlmCodeThree(e.target.value);
    }
  };
  return (
    <Grid
      container
      direction="row-reverse"
      justifyContent="center"
      alignItems="center"
    >
      <div className="add-testing box-shadow">
        <Snackbar
          anchorOrigin={{
            horizontal: "center",
            vertical: "bottom",
          }}
          ContentProps={{
            "aria-describedby": "message-id",
            className: classes.snackbarStyleViaContentProps,
          }}
          open={open}
          autoHideDuration={1500}
          message="Please Fill The Required Fields"
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
          anchorOrigin={{
            horizontal: "center",
            vertical: "bottom",
          }}
          ContentProps={{
            "aria-describedby": "message-id",
            className: classes.snackbarStyleViaNestedContent,
          }}
          open={success}
          autoHideDuration={1500}
          message="Added New Tasting"
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
          <form onSubmit={onFormSubmit}>
            <div className="attribute-box-1 table-margin box-shadow">
              <div className="attribute-box-1-heading  row ">
                <div className="col-3 attribute-back-link">
                  <Link to={"/tasting"}>
                    <i class="bi bi-arrow-left" component={Link}></i> Back
                  </Link>
                </div>
                <div className="col-9"></div>
              </div>
              <div className="attribute-box-1-editBox row">
                <p className="col-md-5 col-sm-12 mt-3">Tasting Type* </p>
                <select
                  className="col-md-7 col-sm-12 mt-3"
                  required="required"
                  name="tasting"
                  id="tasting"
                  onChange={(e) => setTastingType(e.target.value)}
                >
                  <option class="optionGroup" selected disabled>
                    Choose Tasting Type
                  </option>

                  {_tastingType.map((tast) => (
                    <option value={tast.id}>{tast.description}</option>
                  ))}
                </select>
                {!tasting_type && fillTastingType && (
                  <p className="required_field_tastingType">
                    Please choose the tasting type*
                  </p>
                )}
                <p className="col-md-5 col-sm-12 mt-3">Category*</p>
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
                {!category && fillCategory && (
                  <p className="required_field_category">
                    Please choose the category*
                  </p>
                )}
                <p className="col-md-5 col-sm-12 mt-3">Tasting Region*</p>
                <select
                  className="col-md-7 col-sm-12 mt-3"
                  required
                  name="Category"
                  id="category"
                  onChange={(e) => setTastingRegion(e.target.value)}
                >
                  <option class="optionGroup" selected disabled>
                    Choose Tasting Region
                  </option>
                  {_tastingRegion.map((tastR) => (
                    <option value={tastR.id}>{tastR.name}</option>
                  ))}
                </select>
                {!region && fillTastingRegion && (
                  <p className="required_field_tastingRegion">
                    Please choose the tasting region*
                  </p>
                )}
                <p className="col-md-5 col-sm-12 mt-3">Tasting Description* </p>
                <TextField
                  className="col-md-7 col-sm-12 mt-3 tasting-textfiled"
                  id="outlined-multiline-static"
                  placeholder="Enter a tasting description"
                  required
                  multiline
                  fullWidth
                  rows={6}
                  variant="outlined"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                {!description && fillTastingDescription && (
                  <p className="required_field_tastingDescription">
                    Please fill the tasting description*
                  </p>
                )}
                <br />
                <br />
                <p className="col-md-5 col-sm-12 mt-3">
                  Survey Tasting Description{" "}
                </p>
                <TextField
                  className="col-md-7 col-sm-12 mt-3 tasting-textfiled"
                  id="outlined-multiline-static"
                  placeholder="Optional: enter an alternative tasting description shown to participants"
                  multiline
                  fullWidth
                  rows={6}
                  variant="outlined"
                  value={survey_tasting_description}
                  onChange={(e) => setSurveyTastingDescription(e.target.value)}
                />
                <br />
                <br />
                <p className="col-md-5 col-sm-12 mt-3">IMP Project </p>
                <input
                  className="col-md-7 col-sm-12 mt-3"
                  placeholder="Enter the project name"
                  type="text"
                  value={ipm_project}
                  onChange={(e) => setImpProject(e.target.value)}
                />
                <p className="col-md-5 col-sm-12 mt-3">Product Group </p>
                <select
                  className="col-md-7 col-sm-12 mt-3"
                  name="Category"
                  id="cars"
                  onChange={(e) => setProductGroup(e.target.value)}
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
                  placeholder="Enter a product description"
                  type="text"
                  value={product_recipe_name}
                  onChange={(e) => setProductRecipeName(e.target.value)}
                />
                <p className="col-md-5 col-sm-12 mt-3">PLM Code</p>
                <div className="col-md-7 col-sm-12 mt-3 pl-0 plm-p ">
                  <input
                    className="col-3"
                    type="text"
                    value={plmCodeOne}
                    maxlength="12"
                    onChange={handlePlmCodeOne}
                  />
                  &nbsp; / &nbsp;
                  <input
                    className="col-3"
                    type="text"
                    maxlength="3"
                    value={plmCodeTwo}
                    onChange={handlePlmCodeTwo}
                  />
                  &nbsp; / &nbsp;
                  <input
                    className="col-3"
                    type="text"
                    maxlength="3"
                    value={plmCodeThree}
                    onChange={handlePlmCodeThree}
                  />
                </div>
                <p className="col-md-5 col-sm-12 mt-3">Application </p>
                <input
                  className="col-md-7 col-sm-12 mt-3"
                  placeholder="Enter the application"
                  type="text"
                  value={application}
                  onChange={(e) => setApplication(e.target.value)}
                />
                <p className="col-md-5 col-sm-12 mt-3">Objective </p>
                <br />
                <TextField
                  className="col-md-7 col-sm-12 mt-3 tasting-textfiled "
                  id="outlined-multiline-static"
                  placeholder="Enter a tasting objective"
                  multiline
                  fullWidth
                  rows={6}
                  variant="outlined"
                  value={objective}
                  onChange={(e) => setObjective(e.target.value)}
                />
                <br />
                <br />
                <p className="col-md-5 col-sm-12 mt-3">Date Of Tasting</p>
                <div className="col-md-7 col-sm-12 mt-3 plm-p input-date">
                  <input
                    id="Date of Tasting"
                    type="date"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={date_of_tasting}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <br />
                <br />
                {
                  tasting_type === "7" && (
                    <>
                      <p className="col-md-5 col-sm-12 mt-3">End Date Shelf Life</p>
                      <div className="col-md-7 col-sm-12 mt-3 plm-p input-date">
                        <input
                          id="Date of Tasting"
                          type="date"
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          value={date_of_tasting}
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                    </>
                  )
                }
                <br />
                <br />
                {
                  tasting_type === "7" && (
                    <>
                      <p className="col-md-5 col-sm-12 mt-3">
                        Attribute set (unprepared)
                      </p>
                      <select
                        className="col-md-7 col-sm-12 mt-3"
                        name="Category"
                        id="cars"
                        onChange={handleAttributeSet}
                      >
                        <option class="optionGroup" selected disabled>
                          Choose Attribute Set Unprepared
                        </option>
                        {_attributeSet.map((att) => (
                          <option value={att.id}>
                            {att.description +
                              " | " +
                              att.attribute1 +
                              " | " +
                              att.attribute2 +
                              " | " +
                              att.attribute3 +
                              " | " +
                              att.attribute4 +
                              " | " +
                              att.attribute5 +
                              " | " +
                              att.attribute6}
                          </option>
                        ))}
                      </select>
                    </>
                  )
                }
                <br />
                <br />
                <p className="col-md-5 col-sm-12 mt-3">
                  Attribute set (prepared)*
                </p>
                <select
                  className="col-md-7 col-sm-12 mt-3"
                  name="Category"
                  id="cars"
                  onChange={handleAttributeSet}
                >
                  <option class="optionGroup" selected disabled>
                    Choose Attribute Set
                  </option>
                  {_attributeSet.map((att) => (
                    <option value={att.id}>
                      {att.description +
                        " | " +
                        att.attribute1 +
                        " | " +
                        att.attribute2 +
                        " | " +
                        att.attribute3 +
                        " | " +
                        att.attribute4 +
                        " | " +
                        att.attribute5 +
                        " | " +
                        att.attribute6}
                    </option>
                  ))}
                </select>
                {!attribute_set && fillAttributeSet && (
                  <p className="required_field_attributeSet">
                    Please choose the attribute set*
                  </p>
                )}
                <br />
                <br />
                {
                  tasting_type === "7" && (
                    <>
                      <p className="col-md-5 col-sm-12 mt-3">Shelf Life Condition</p>
                      <select
                        className="col-md-7 col-sm-12 mt-3"
                        name="Category"
                        id="cars"
                      //onChange={(e) => setPanelView(e.target.value)}
                      >
                        <option class="optionGroup" selected disabled>
                          Choose Shelf Life Condition
                        </option>
                        <option value="accelerated">
                          Accelerated
                        </option>
                        <option value="ambient">
                          Ambient
                        </option>
                        <option value="light">Light</option>

                      </select>
                    </>
                  )
                }
                <p className="col-md-5 col-sm-12 mt-3">Panel View*</p>
                <select
                  className="col-md-7 col-sm-12 mt-3"
                  name="Category"
                  id="cars"
                  onChange={(e) => setPanelView(e.target.value)}
                >
                  <option class="optionGroup" selected disabled>
                    Choose Panel View
                  </option>
                  {_panelView.map((pan) => (
                    <option value={pan.id}>{pan.name}</option>
                  ))}
                </select>
                {!panel_view && fillPanelView && (
                  <p className="required_field_panelView">
                    Please choose the panel view*
                  </p>
                )}
                <p className="col-md-5 col-sm-12 mt-3">Status*</p>
                <select
                  className="col-md-7 col-sm-12 mt-3"
                  name="Category"
                  id="cars"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option class="optionGroup" selected disabled>
                    Choose Status
                  </option>
                  {_status.map((status) => (
                    <option value={status.id}>{status.name}</option>
                  ))}
                </select>
                {!status && fillStatus && (
                  <p className="required_field_status">
                    Please choose the status*
                  </p>
                )}{" "}
                {(tasting_type === "1" || tasting_type === "5") && (
                  <>
                    <p className=" plm-p col-lg-5 col-md-12 col-sm-12 mt-3">
                      Sample Selection
                    </p>
                    <div className="col-lg-7 col-md-12 col-sm-12 mt-3 row plm-p table-input-m">
                      {tastingsample_set.map((inputField, index) => (
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
                            value={inputField.code}
                            onChange={(e) => handleChangeInput(index, e)}
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
                            onChange={(e) => handleChangeInput(index, e)}
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
                            onChange={(e) => handleChangeInput(index, e)}
                          />
                          <div className="col-1 d-flex">
                            <IconButton
                              disabled={
                                sampleLength === 0 ||
                                sampleLength === 1 ||
                                sampleLength === 2
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
                  </>
                )}
                {tasting_type === "3" && (
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
                          iid="0"
                          type="text"
                          value={tastingsample_set[0].code}
                          onDragOver={(e) => onDragOverReference(e)}
                          onDrop={(e) => onDropReference(e)}
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
                          value={tastingsample_set[0].sample_description}
                          onDragOver={(e) => onDragOverInputSet1_1(e)}
                          onDrop={(e) => onDropInputSet1_1(e)}
                          onChange={handleChangeInputSet1_1}
                        />
                        <span className="lable-span">1</span>
                        <input
                          className="input-span text-center"
                          id="1"
                          type="text"
                          value={
                            tastingsample_set.length > 1
                              ? tastingsample_set[1].sample_description
                              : null
                          }
                          onDragOver={(e) => onDragOverInputSet2_1(e)}
                          onDrop={(e) => onDropInputSet2_1(e)}
                          onChange={handleChangeInputSet2_1}
                        />
                        <span className="lable-span">1</span>
                        <input
                          className="input-span text-center"
                          id="1"
                          type="text"
                          value={
                            tastingsample_set.length > 2
                              ? tastingsample_set[2].sample_description
                              : null
                          }
                          onDragOver={(e) => onDragOverInputSet3_1(e)}
                          onDrop={(e) => onDropInputSet3_1(e)}
                          onChange={handleChangeInputSet3_1}
                        />
                        <span className="lable-span">1</span>
                        <input
                          className="input-span text-center"
                          id="1"
                          type="text"
                          value={
                            tastingsample_set.length > 3
                              ? tastingsample_set[3].sample_description
                              : null
                          }
                          onDragOver={(e) => onDragOverInputSet4_1(e)}
                          onDrop={(e) => onDropInputSet4_1(e)}
                          onChange={handleChangeInputSet4_1}
                        />
                        <span className="lable-span">1</span>
                        <input
                          className="input-span text-center"
                          id="1"
                          type="text"
                          value={
                            tastingsample_set.length > 4
                              ? tastingsample_set[4].sample_description
                              : null
                          }
                          onDragOver={(e) => onDragOverInputSet5_1(e)}
                          onDrop={(e) => onDropInputSet5_1(e)}
                          onChange={handleChangeInputSet5_1}
                        />
                        <span className="lable-span">1</span>
                        <input
                          className="input-span text-center"
                          id="1"
                          type="text"
                          value={
                            tastingsample_set.length > 5
                              ? tastingsample_set[5].sample_description
                              : null
                          }
                          onDragOver={(e) => onDragOverInputSet6_1(e)}
                          onDrop={(e) => onDropInputSet6_1(e)}
                          onChange={handleChangeInputSet6_1}
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
                          value={tastingsample_set[0].specification}
                          onDragOver={(e) => onDragOverInputSet1_2(e)}
                          onDrop={(e) => onDropInputSet1_2(e)}
                          onChange={handleChangeInputSet1_2}
                        />
                        <span className="lable-span">2</span>
                        <input
                          className="input-span text-center"
                          id="2"
                          type="text"
                          value={
                            tastingsample_set.length > 1
                              ? tastingsample_set[1].specification
                              : null
                          }
                          onDragOver={(e) => onDragOverInputSet2_2(e)}
                          onDrop={(e) => onDropInputSet2_2(e)}
                          onChange={handleChangeInputSet2_2}
                        />
                        <span className="lable-span">2</span>
                        <input
                          className="input-span text-center"
                          id="2"
                          type="text"
                          value={
                            tastingsample_set.length > 2
                              ? tastingsample_set[2].specification
                              : null
                          }
                          onDragOver={(e) => onDragOverInputSet3_2(e)}
                          onDrop={(e) => onDropInputSet3_2(e)}
                          onChange={handleChangeInputSet3_2}
                        />
                        <span className="lable-span">2</span>
                        <input
                          className="input-span text-center"
                          id="2"
                          type="text"
                          value={
                            tastingsample_set.length > 3
                              ? tastingsample_set[3].specification
                              : null
                          }
                          onDragOver={(e) => onDragOverInputSet4_2(e)}
                          onDrop={(e) => onDropInputSet4_2(e)}
                          onChange={handleChangeInputSet4_2}
                        />
                        <span className="lable-span">2</span>
                        <input
                          className="input-span text-center"
                          id="2"
                          type="text"
                          value={
                            tastingsample_set.length > 4
                              ? tastingsample_set[4].specification
                              : null
                          }
                          onDragOver={(e) => onDragOverInputSet5_2(e)}
                          onDrop={(e) => onDropInputSet5_2(e)}
                          onChange={handleChangeInputSet5_2}
                        />
                        <span className="lable-span">2</span>
                        <input
                          className="input-span text-center"
                          id="2"
                          type="text"
                          value={
                            tastingsample_set.length > 5
                              ? tastingsample_set[5].specification
                              : null
                          }
                          onDragOver={(e) => onDragOverInputSet6_2(e)}
                          onDrop={(e) => onDropInputSet6_2(e)}
                          onChange={handleChangeInputSet6_2}
                        />
                      </div>
                    </div>
                    <div className="description"></div>
                  </>
                )}
                {(tasting_type === "2" ||
                  tasting_type === "4" ||
                  tasting_type === "6" ||
                  tasting_type === "7") && (
                    <>
                      <p className=" plm-p col-lg-5 col-md-12 col-sm-12 mt-3">
                        Sample Selection
                      </p>
                      <div className="col-lg-7 col-md-12 col-sm-12 mt-3 row plm-p table-input-m">
                        {tastingsample_set.map((inputField, index) => (
                          <>
                            <p className="col-md-3 col-sm-12  text-base bg-secondary text-white border-bottom">
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
                              onChange={(e) => handleChangeInput(index, e)}
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
                              onChange={(e) => handleChangeInput(index, e)}
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
                              onChange={(e) => handleChangeInput(index, e)}
                            />
                            <div className="col-1 d-flex">
                              <IconButton
                                className="p-1"
                                disabled={
                                  sampleLength === 0 ||
                                  sampleLength === 1 ||
                                  sampleLength === 2
                                }
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
                          </>
                        ))}

                        <br />
                      </div>
                    </>
                  )}
                <br />
              </div>
              {(tasting_type === "2" || tasting_type === "6") && (
                <>
                  <div className="survey-ref-container margin-rl-5 mt-3 plm-p ">
                    <div className="survey-ref-cont-2 plm-p mt-3 p-3 ">
                      <h5 className="plm-p">
                        Descriptive target attributes prepared{" "}
                      </h5>
                      <div className="row">
                        {attributeId && (
                          <>
                            {attributeId.attribute1 && (
                              <div class="col-sm-6 col-md-4 col-lg-2 cont-inp">
                                <h6>{attributeId.attribute1}</h6>
                                <textarea
                                  row="6"
                                  type="text"
                                  value={attribute1}
                                  onChange={(e) =>
                                    setAttribute1(e.target.value)
                                  }
                                />
                              </div>
                            )}

                            {attributeId.attribute2 && (
                              <div class="col-sm-6 col-md-4 col-lg-2 cont-inp">
                                <h6>{attributeId.attribute2}</h6>
                                <textarea
                                  row="7"
                                  type="text"
                                  value={attribute2}
                                  onChange={(e) =>
                                    setAttribute2(e.target.value)
                                  }
                                />
                              </div>
                            )}

                            {attributeId.attribute3 && (
                              <div class="col-sm-6 col-md-4 col-lg-2 cont-inp">
                                <h6>{attributeId.attribute3}</h6>
                                <textarea
                                  row="7"
                                  type="text"
                                  value={attribute3}
                                  onChange={(e) =>
                                    setAttribute3(e.target.value)
                                  }
                                />
                              </div>
                            )}

                            {attributeId.attribute4 && (
                              <div class="col-sm-6 col-md-4 col-lg-2 cont-inp">
                                <h6>{attributeId.attribute4}</h6>
                                <textarea
                                  row="7"
                                  type="text"
                                  value={attribute4}
                                  onChange={(e) =>
                                    setAttribute4(e.target.value)
                                  }
                                />
                              </div>
                            )}

                            {attributeId.attribute5 && (
                              <div class="col-sm-6 col-md-4 col-lg-2 cont-inp">
                                <h6>{attributeId.attribute5}</h6>
                                <textarea
                                  row="7"
                                  type="text"
                                  value={attribute5}
                                  onChange={(e) =>
                                    setAttribute5(e.target.value)
                                  }
                                />
                              </div>
                            )}

                            {attributeId.attribute6 && (
                              <div class="col-sm-6 col-md-4 col-lg-2 cont-inp">
                                <h6>{attributeId.attribute6}</h6>
                                <textarea
                                  row="7"
                                  type="text"
                                  value={attribute6}
                                  onChange={(e) =>
                                    setAttribute6(e.target.value)
                                  }
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
              {tasting_type && (
                <>
                  <div class="table-responsive-sm m-3 p-4">
                    <table class="table m-0 text-center">
                      <thead class="t-head">
                        <tr>
                          <th scope="col ">Id</th>
                          <th scope="col"> Product name</th>
                          <th scope="col"> Product description</th>
                          <th scope="col"> Product description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((row) => (
                          <tr
                            key={row.id}
                            draggable
                            onDragStart={(e) => handleDrag(e, row)}
                            onClick={() =>
                              (tasting_type === "1" ||
                                tasting_type === "2" ||
                                tasting_type === "4" ||
                                tasting_type === "5" ||
                                tasting_type === "6" ||
                                tasting_type === "7") &&
                                tastingsample_set[0].code === ""
                                ? setTastingsample_set([
                                  {
                                    code: row.code,
                                    sample_description: row.description,
                                    specification: row.recipe,
                                  },
                                  {
                                    code: tastingsample_set[1].code,
                                    sample_description:
                                      tastingsample_set[1].sample_description,
                                    specification:
                                      tastingsample_set[1].specification,
                                  },
                                ])
                                : tastingsample_set[1].code === ""
                                  ? setTastingsample_set([
                                    {
                                      code: tastingsample_set[0].code,
                                      sample_description:
                                        tastingsample_set[0].sample_description,
                                      specification:
                                        tastingsample_set[0].specification,
                                    },
                                    {
                                      code: row.code,
                                      sample_description: row.description,
                                      specification: row.recipe,
                                    },
                                  ])
                                  : setTastingsample_set([
                                    ...tastingsample_set,
                                    {
                                      code: row.code,
                                      sample_description: row.description,
                                      specification: row.recipe,
                                    },
                                  ])
                            }
                          >
                            <th scope="row">{row.id}</th>
                            <td>
                              <p className="tablebtn">{row.code}</p>
                            </td>
                            <td>{row.description}</td>
                            <td>{row.recipe}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
              <br />

              <div className="js">
                <Button
                  className="btn-tasting"
                  variant="contained"
                  color="primary"
                  startIcon={<SaveIcon />}
                  type="submit"
                  onClick={handleValidation}
                >
                  Save
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Grid>
  );
};

export default AddTasting;
