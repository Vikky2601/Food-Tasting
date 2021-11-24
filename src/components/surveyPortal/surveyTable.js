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
import TablePagination from "@material-ui/core/TablePagination";
import axios from "axios";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
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

export default function SurveyTable() {
  const classes = useStyles();
  const [pageCount, setPageCount] = useState([]);
  const [rows, setRows] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [loader, setLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState([]);
  const [currentPageSize, setCurrentPageSize] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/tastings/?search=${search}`
      )
      .then((res) => {
        setRows(res.data.results);
      });
  };


  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_PATH
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
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/tastings/?limit=${currentPageSize * (newPage + 1)
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
        `${process.env.REACT_APP_SERVER_PATH}/api/v1/tastings/?limit=${event.target.value
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
          {/* <div className="taste-btn-container width-fill ">
            <Link to="#" className="tasting-link my-auto add-btn">
              Display released tastings
            </Link>
          </div> */}
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
                    <TableCell className="table-head-text">ID</TableCell>
                    <TableCell className="table-head-text" align="center">
                      Description
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Imp Project
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Category
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Tasting Region
                    </TableCell>

                    <TableCell className="table-head-text" align="center">
                      Date
                    </TableCell>
                    <TableCell className="table-head-text" align="center">
                      Tasting Status
                    </TableCell>

                    <TableCell className="table-head-text" align="center">
                      Type
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
                      <>
                        {
                          row.status__name === 'released' && (
                            <TableRow key={row.id}>
                              <TableCell
                                className="table-body-text"
                                component="th"
                                scope="row"
                              >
                                {row.id}
                              </TableCell>
                              <TableCell className="table-body-text" align="center">
                                {row.tasting_type__description}
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
                                {row.date_of_tasting}
                              </TableCell>
                              <TableCell className="table-body-text" align="center">
                                {row.status__name}
                              </TableCell>

                              <TableCell className="table-body-text" align="center">
                                {row.tasting_type__description}
                              </TableCell>

                              <TableCell className="table-body-text" align="center">
                                <Tooltip title=" Edit " placement="top-start">
                                  <IconButton
                                    component={Link}
                                    to={`/survey/surveys/description/${row.id}`}
                                    aria-label="file"
                                    className={classes.margin}
                                    size="small"
                                  >
                                    <PlayCircleFilledIcon fontSize="inherit" />
                                  </IconButton>
                                </Tooltip>
                              </TableCell>
                            </TableRow>
                          )
                        }
                      </>
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
