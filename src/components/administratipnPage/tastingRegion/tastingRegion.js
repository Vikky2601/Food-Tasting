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
import TablePagination from "@material-ui/core/TablePagination";
import axios from "axios";
import { Link } from "react-router-dom";
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

export default function TastingRegion() {
  const classes = useStyles();

  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState([]);
  const [currentPageSize, setCurrentPageSize] = useState([]);
  const [loader, setLoader] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `${
          process.env.REACT_APP_SERVER_PATH
        }/api/v1/regions/?limit=5&offset=${parseInt(
          currentPage * currentPageSize
        )}`
      )
      .then((res) => {
        setRows(res.data.results);

        setLoader(false);
      });
  }, [currentPage, currentPageSize]);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(event.target.value);
    axios
      .get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/regions/?limit=${
          currentPageSize * (newPage + 1)
        }`
      )
      .then((res) => {
        setRows(res.data.results);
      });
    setPage(newPage);
  };

  const handleSearch = () => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/regions/?search=${search}`
      )
      .then((res) => {
        setRows(res.data.results);
      });
  };

  const handleChangeRowsPerPage = (event) => {
    setCurrentPageSize(event.target.value);
    axios
      .get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/regions/?limit=${
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
              to="/administration/tasting-region/new-tasting-region"
              className="tasting-link my-auto add-btn"
            >
              Add new tasting region
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
            count={rows.length}
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
                      Tasing Region
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
                        <TableCell
                          className="table-body-text"
                          component="th"
                          scope="row"
                        >
                          {row.id}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          {row.name}
                        </TableCell>
                        <TableCell className="table-body-text" align="center">
                          <Tooltip title="Edit" placement="top-start">
                            <IconButton
                              component={Link}
                              to={`/administration/tasting-region/edit/${row.id}`}
                              aria-label="file"
                              className={classes.margin}
                              size="small"
                            >
                              <SettingsIcon fontSize="inherit" />
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
