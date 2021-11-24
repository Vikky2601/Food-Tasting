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
import { Link } from "react-router-dom";
import TablePagination from "@material-ui/core/TablePagination";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

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

export default function Users() {
  const classes = useStyles();

  const [rows, setRows] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [pageCount, setPageCount] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState([]);
  const [currentPageSize, setCurrentPageSize] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get(
        `${
          process.env.REACT_APP_SERVER_PATH
        }/api/v1/users/?limit=5&offset=${parseInt(
          currentPage * currentPageSize
        )}`
      )
      .then((res) => {
        setRows(res.data.results);
        setPageCount(res.data.count);
        setLoader(false);
      });
  }, [currentPage, currentPageSize]);

  const handleSearch = () => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/users/?search=${search}`
      )
      .then((res) => {
        setRows(res.data.results);
      });
  };

  const handleChangePage = (event, newPage) => {
    setLoader(true);
    setCurrentPage(event.target.value);
    axios
      .get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/users/?limit=${
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
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/users/?limit=${
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

  return (
    <div className="HOME">
      <div class="container-fluid">
        <div className="search-container search-res-cont">
          <div className="taste-btn-container width-fill ">
            <Link
              to="/administration/users/new-user"
              className="tasting-link my-auto add-btn"
            >
              Add new User
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
              <buttonon
                onClick={handleSearch}
                type="submit"
                class="searchButton"
              >
                <i class="bi bi-arrow-right"></i>
              </buttonon>
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
          <div className="box-shadow clear-both table-margin">
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead className="table-head">
                  <TableRow>
                    <TableCell className="table-head-text">ID</TableCell>
                    <TableCell className="table-head-text" align="center">
                      User Window Account
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Survey Id
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Mail
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Verified
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Archieved
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="table-body">
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <TableRow
                        key={row.id}
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
                          {row.user_window_account}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.survey_id}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.mail}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.verified_taster === true ? "yes" : "no"}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.archieved === true ? "archived" : "no"}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          <IconButton
                            component={Link}
                            to={`/administration/users/edit/${row.id}`}
                            aria-label="file"
                            className={classes.margin}
                            size="small"
                          >
                            <SettingsIcon fontSize="inherit" />
                          </IconButton>
                          <IconButton
                            component={Link}
                            to={`/administration/users/view/${row.id}`}
                            aria-label="save"
                            className={classes.margin}
                            size="small"
                          >
                            <VisibilityIcon fontSize="inherit" />
                          </IconButton>
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
    </div>
  );
}
