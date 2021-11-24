import React, { useEffect, useState } from "react";
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
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { Link } from "react-router-dom";
import TablePagination from "@material-ui/core/TablePagination";
import axios from "axios";
import Tooltip from "@material-ui/core/Tooltip";
import { CircularProgress } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function AttributeSet() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [pageCount, setPageCount] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const [currentPageSize, setCurrentPageSize] = useState([]);
  const [loader, setLoader] = useState(true);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const handleSearch = () => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/attribute_set/?search=${search}`
      )
      .then((res) => {
        setRows(res.data.results);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCopy = async (row) => {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_PATH}/api/v1/attribute_set/${row.id}`
    );

    const {
      description,
      attribute_set_type,
      category,
      archieved,
      attribute1,
      attribute2,
      attribute3,
      attribute4,
      attribute5,
      attribute6,
    } = response.data;
    var payload = {
      description: description,
      attribute_set_type: attribute_set_type,
      category: category,
      archieved: archieved,
      attribute1: attribute1,
      attribute2: attribute2,
      attribute3: attribute3,
      attribute4: attribute4,
      attribute5: attribute5,
      attribute6: attribute6,
    };

    await axios.post(
      `${process.env.REACT_APP_SERVER_PATH}/api/v1/attribute_set/`,
      payload
    );

    axios
      .get(
        `${
          process.env.REACT_APP_SERVER_PATH
        }/api/v1/attribute_set/?limit=5&offset=${parseInt(
          currentPage * currentPageSize
        )}`
      )
      .then((res) => {
        console.log("Response", res.data.results);
        setRows(res.data.results);
        setPageCount(res.data.count);
        setLoader(false);
      });

    setOpen(true);
  };

  useEffect(() => {
    axios
      .get(
        `${
          process.env.REACT_APP_SERVER_PATH
        }/api/v1/attribute_set/?limit=5&offset=${parseInt(
          currentPage * currentPageSize
        )}`
      )
      .then((res) => {
        console.log("Response", res.data.results);
        setRows(res.data.results);
        setPageCount(res.data.count);
        setLoader(false);
      });
  }, [currentPage, currentPageSize]);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(event.target.value);
    axios
      .get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/attribute_set/?limit=${
          currentPageSize * (newPage + 1)
        }`
      )
      .then((res) => {
        setRows(res.data.results);
      });
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setCurrentPageSize(event.target.value);
    axios
      .get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/attribute_set/?limit=${
          event.target.value
        }&offset=${parseInt(currentPage * event.target.value)}`
      )
      .then((res) => {
        setRows(res.data.results);
        setRowsPerPage(parseInt(event.target.value, 10));
      });
    setPage(0);
  };

  return (
    <div className="HOME">
      <div class="container-fluid">
        <div className="search-container search-res-cont">
          <div className="taste-btn-container width-fill ">
            <Link
              to="/administration/parameter-sets"
              className="tasting-link my-auto add-btn"
            >
              Add a new parameter set
            </Link>
          </div>
          <div class="wrap width-fill ">
            <div class="search">
              <input
                class="searchTerm"
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
          <div className="box-shadow clear-both table-margin table-margin">
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead className="table-head">
                  <TableRow>
                    <TableCell className="table-head-text">SETID/STD</TableCell>
                    <TableCell className="table-head-text" align="center">
                      Category
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Set Description
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Status
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Attribute-#1
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Attribute-#2
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Attribute-#3
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Attribute-#4
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Attribute-#5
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Attribute-#6
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Action{" "}
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody className="table-body">
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <TableRow
                        key={row.Std}
                        className={row.archieved === true ? "bgdisable" : null}
                      >
                        <TableCell
                          className="table-body-text"
                          component="th"
                          scope="row"
                        >
                          {row.id}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.category}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.description}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.archieved === true ? "archived" : "active"}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.attribute1}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.attribute2}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.attribute3}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.attribute4}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.attribute5}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.attribute6}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          <Tooltip title="Edit" placement="top-start">
                            <IconButton
                              component={Link}
                              to={`/administration/attribute-set/edit/${row.id}`}
                              aria-label="file"
                              className={classes.margin}
                              size="small"
                            >
                              <SettingsIcon fontSize="inherit" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="View" placement="top-start">
                            <IconButton
                              component={Link}
                              to={`/administration/attribute-set/view/${row.id}`}
                              aria-label="save"
                              className={classes.margin}
                              size="small"
                            >
                              <VisibilityIcon fontSize="inherit" />
                            </IconButton>
                          </Tooltip>

                          <Tooltip title="Copy" placement="top-start">
                            <IconButton
                              aria-label="copy"
                              className={classes.margin}
                              size="small"
                              onClick={() => handleCopy(row)}
                            >
                              <FileCopyIcon fontSize="inherit" />
                            </IconButton>
                          </Tooltip>
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
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Already Copied Attribute set"}
        </DialogTitle>

        <DialogActions>
          <Button
            variant="contained"
            fullWidth
            onClick={handleClose}
            color="primary"
            autoFocus
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
