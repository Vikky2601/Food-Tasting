import React from "react";
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
import TablePagination from "@material-ui/core/TablePagination";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Tooltip from "@material-ui/core/Tooltip";
import { CircularProgress } from "@material-ui/core";

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

export default function Sample() {
  const classes = useStyles();

  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/api/v1/samples/`)
      .then((res) => {
        setRows(res.data.results);
        setLoader(false);
      });
  }, []);

  const handleSearch = () => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/samples/?search=${search}`
      )
      .then((res) => {
        setRows(res.data.results);
      });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="HOME">
      <div class="container-fluid">
        <div className="search-container search-res-cont">
          <div className="taste-btn-container width-fill ">
            <Link
              to="/sample/new-sample"
              className="tasting-link my-auto add-btn"
            >
              New Sample
            </Link>
          </div>
          <div class="wrap width-fill ">
            <div class="search">
              <input
                class="searchTerm"
                type="text"
                placeholder="Search Sample"
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
            count={rows.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <div className="box-shadow table-margin">
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead className="table-head">
                  <TableRow className="table-text">
                    <TableCell className="table-head-text">ID</TableCell>
                    <TableCell className="table-head-text" align="center">
                      Category
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Code
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Description
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Recipe
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Actions{" "}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="table-body">
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.category}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.code}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.description}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.recipe}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          <Tooltip title="Edit Entry" placement="top-start">
                            <IconButton
                              component={Link}
                              to={`/sample/edit/${row.id}`}
                              aria-label="file"
                              className={classes.margin}
                              size="small"
                            >
                              <SettingsIcon fontSize="inherit" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Show Details" placement="top-start">
                            <IconButton
                              component={Link}
                              to={`/sample/view/${row.id}`}
                              aria-label="save"
                              className={classes.margin}
                              size="small"
                            >
                              <VisibilityIcon fontSize="inherit" />
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
            count={rows.length}
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
