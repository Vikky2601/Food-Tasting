import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/Settings";
import VisibilityIcon from "@material-ui/icons/Visibility";
import BarChartIcon from "@material-ui/icons/BarChart";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import TablePagination from "@material-ui/core/TablePagination";
import axios from "axios";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import XLSX from "xlsx";
import "bootstrap/dist/css/bootstrap.min.css";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function SurveyDetails({ reference_type }) {
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  const [page, setPage] = React.useState(0);
  const [pageCount, setPageCount] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const [currentPageSize, setCurrentPageSize] = useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [loader, setLoader] = useState(true);
  const [search, setSearch] = useState("");
  const [released, setReleased] = useState(false);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [click, setClick] = useState(null);
  const [sameCheck, setSameCheck] = useState(false);
  const [checkboxClick, setCheckboxClick] = useState([]);
  
  const [checkboxData, setCheckboxData] = useState([
    {
      description: "",
      Impl: "",
      category: "",
      region: "",
      productGroup: "",
      recipeName: "",
      date: "",
      status: "",
      survey: "",
      type: "",
      owner: "",
    },
  ]);

  const handleCheckClose = () => {
    setSameCheck(false);
    setCheckboxClick(false);
  };
  const handleChangeCheckbox = (index, row, e) => {
    const updatedState = checkboxClick || {};
    updatedState[index] = e.target.checked;
    setCheckboxClick(updatedState);
    setCheckboxData([
      ...checkboxData,
      {
        description: row.description,
        Impl: row.ipm_project,
        category: row.category__name,
        region: row.region__name,
        productGroup: row.product_group__name,
        recipeName: row.product_recipe_name,
        date: row.date_of_tasting,
        status: row.status__name,
        survey: row.survey,
        type: row.tasting_type__description,
        owner: row.owner,
      },
    ]);
  };
  const handleClickOpen = (row) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openDialog2 = () => {
    setOpen(false);
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const onReleased = () => {
    const released = "released";
    axios
      .get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/tastings/?search=${released}`
      )
      .then((res) => {
        setRows(res.data.results);
      });

    setReleased(true);
  };

  const onUnReleased = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/v1/tastings/`)
      .then((res) => {
        setRows(res.data.results);
      });

    setReleased(false);
  };

  useEffect(() => {
    axios
      .get(
        `${
          process.env.REACT_APP_SERVER_PATH
        }/api/v1/tastings/?limit=5&offset=${parseInt(
          currentPage * currentPageSize
        )}`
      )
      .then((res) => {
        setRows(res.data.results);
        setPageCount(res.data.count);
        setLoader(false);
      });
  }, [currentPage, currentPageSize]);

  const handleChangePage = (event, newPage) => {
    setLoader(true);
    setCurrentPage(event.target.value);
    axios
      .get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/tastings/?limit=${
          currentPageSize * (newPage + 1)
        }`
      )
      .then((res) => {
        setRows(res.data.results);
        setLoader(false);
      });
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setLoader(true);

    setCurrentPageSize(event.target.value);
    axios
      .get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/tastings/?limit=${
          event.target.value
        }&offset=${parseInt(currentPage * event.target.value)}`
      )
      .then((res) => {
        setRows(res.data.results);
        setRowsPerPage(parseInt(event.target.value, 10));
        setLoader(false);
      });
    setPage(0);
  };

  const handleSearch = () => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/tastings/?search=${search}`
      )
      .then((res) => {
        setRows(res.data.results);
      });
  };

  const onDownloadClick = () => {
    if (checkboxData[2] && checkboxData[1].type !== checkboxData[2].type) {
      setSameCheck(true);
      setCheckboxData([
        {
          description: "",
          Impl: "",
          category: "",
          region: "",
          productGroup: "",
          recipeName: "",
          date: "",
          status: "",
          survey: "",
          type: "",
          owner: "",
        },
      ]);
    } else {
      const workSheet = XLSX.utils.json_to_sheet(checkboxData);
      const workBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workBook, workSheet, "Tasting");

      XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });
      XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
      XLSX.writeFile(workBook, "TastingData.xlsx");

      setCheckboxClick(false);
      setCheckboxData([
        {
          description: "",
          Impl: "",
          category: "",
          region: "",
          productGroup: "",
          recipeName: "",
          date: "",
          status: "",
          survey: "",
          type: "",
          owner: "",
        },
      ]);
    }
  };

  return (
    <div className="HOME">
      <div class="container-fluid">
        <div className="search-container">
          <div className="taste-btn-container">
            <Link
              to="/tasting/add-tasting"
              className="tasting-link my-auto add-btn"
            >
              Add a new tasting
            </Link>
            {!released ? (
              <>
                <button onClick={onReleased} className="tasting-link ">
                  Display released tastings
                </button>
              </>
            ) : (
              <>
                <button onClick={onUnReleased} className="tasting-link ">
                  Display all tastings
                </button>
              </>
            )}
          </div>
          <div class="wrap">
            <div class="search">
              <input
                type="text"
                class="searchTerm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
              />
              <button onClick={handleSearch} type="submit" class="searchButton">
                <i class="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {loader ? (
        <>
          <div className="loader">
            <CircularProgress />
          </div>
        </>
      ) : (
        <>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={pageCount}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <div className="box-shadow table-margin">
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead className="table-head">
                  <TableRow>
                    <TableCell className="table-head-text">ID</TableCell>
                    <TableCell className="table-head-text" align="center">
                      Descri
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Imp Project
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Category
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Region
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Product Group
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Product Recipe Name
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Date
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Status
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Survey
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Type
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Owner
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Action{" "}
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      <Tooltip title=" Download " placement="top-start">
                        <IconButton
                          aria-label="copy"
                          size="small"
                          onClick={onDownloadClick}
                        >
                          <CloudDownloadIcon fontSize="medium" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="table-body">
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                      <TableRow key={row.Id}>
                        <TableCell
                          className="table-body-text"
                          component="th"
                          scope="row"
                        >
                          {row.id}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.description}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.ipm_project}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.category__name}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.region__name}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.product_group__name}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.product_recipe_name}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.date_of_tasting}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.status__name}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.survey}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.tasting_type__description}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.owner}
                        </TableCell>
                        <TableCell align="center">
                          <Tooltip title="Edit Entry" placement="top-start">
                            <IconButton
                              component={Link}
                              to={`/survey/survey-details/edit/${row.id}`}
                              aria-label="file"
                              size="small"
                            >
                              <SettingsIcon fontSize="inherit" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Show Details" placement="top-start">
                            <IconButton
                              component={Link}
                              to={`/survey/survey-details/view/${row.id}`}
                              aria-label="save"
                              size="small"
                            >
                              <VisibilityIcon fontSize="inherit" />
                            </IconButton>
                          </Tooltip>
                          {row.tasting_type !== 1 && (
                            <Tooltip
                              title="Show Evaluation"
                              placement="top-start"
                            >
                              <IconButton
                                component={Link}
                                to={`/tasting/evolution/${row.id}`}
                                aria-label="chart"
                                className={classes.margin}
                                size="small"
                              >
                                <BarChartIcon fontSize="inherit" />
                              </IconButton>
                            </Tooltip>
                          )}
                          <Tooltip title="Copy Tasting" placement="top-start">
                            <IconButton
                              onClick={() => handleClickOpen(row)}
                              onMouseEnter={() => setClick(row.id)}
                              aria-label="copy"
                              size="small"
                            >
                              <FileCopyIcon fontSize="inherit" />
                            </IconButton>
                          </Tooltip>
                        </TableCell>

                        <TableCell align="center">
                          <input
                            type="checkbox"
                            id="checkbox"
                            checked={checkboxClick[index]}
                            onChange={(e) =>
                              handleChangeCheckbox(index, row, e)
                            }
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={pageCount}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}

      <Dialog
        open={sameCheck}
        onClose={handleCheckClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Error"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Due to the different templates, please only select reports of the
            same tasting type.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            onClick={handleCheckClose}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Copy Tasting"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to keep the reference target and / or the sample
            assignment for the copy ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={handleClose}
            color="secondary"
            autoFocus
            component={Link}
            to="/tasting/add-tasting"
          >
            No
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="outlined"
            onClick={openDialog2}
            color="primary"
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Please Select What To Copy"}
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Button
              component={Link}
              className="survey-btn"
              to={`/tasting/copy/${click}/reference`}
              variant="contained"
              color="primary"
              fullWidth
            >
              Keep Reference Targets Only
            </Button>

            <br />
            <br />
            <Button
              component={Link}
              className="survey-btn"
              to={`/tasting/copy/${click}/sample`}
              variant="contained"
              color="primary"
              fullWidth
            >
              Keep Samples Only
            </Button>
            <br />
            <br />
            <Button
              component={Link}
              to={`/tasting/copy/${click}/sampleref`}
              variant="contained"
              className="survey-btn"
              color="primary"
              fullWidth
            >
              Keep Reference Targets And Samples
            </Button>
            <br />
            <br />
            <Button onClick={handleClose1} variant="contained" fullWidth>
              Cancel
            </Button>
          </DialogContentText>
        </DialogContent>

        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
