import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Survey = () => {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="HOME">
      <div class="container">
        <div class="row column-reverse">
          <div class="col-md-6 col-12 col-sm-12 mt-2">
            <div className="survey-box-1">
              <div className="mt-5">
                <h2 className="mt-4">Remark</h2>
                <p className="text-lg">
                  Please enter your <b>Individual ID (participant ID)</b> that
                  you created during the screening. E.g, If you are joining RAP
                  (recipe approval), just log in using your user name.
                </p>
              </div>
              <div>
                <h3 className="mt-4">
                  A common participant ID contains 5 digit.{" "}
                </h3>
                <div>
                  <p className="text-lg">
                    1st digit first letter of favourate color (e.g blue = b).
                    <br />
                    2nd and 3rd digit birth date of your mom (e.g 23rd of may =
                    23).
                    <br />
                    4th and 5th digit birth year of your dad (e.g 1941 = 41).
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-12 col-sm-12 mt-3">
            <div className="survey-box-2 card-box box-shadow mt-2">
              <div className="survey-box-2-head l-spacing-2 mt-3">
                <h4 className="mt-2">
                  Please enter the given participant ID
                  <br /> or <br />
                  user name to login
                </h4>
                <br />
                <form>
                  <div className="login-box">
                    <input
                      className="login-input "
                      placeholder="Login"
                      type="text"
                    />
                    <button type="submit" className="login-btn">
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <hr />
              <div className="survey-box-2-head mb-2">
                <p className="">
                  In case you have not been scanned yet.
                  <br /> Click on login as guest
                </p>
                <Button
                  variant="contained"
                  className="btn btn-width-100 text-sm l-spacing-1 d-block"
                  type="text"
                  onClick={handleLoginOpen}
                >
                  Login as guest
                </Button>
                <Button
                  variant="contained"
                  className="btn btn-width-100 text-sm l-spacing-1 d-block mt-3 survey-btn"
                  type="text"
                  onClick={handleClickOpen}
                >
                  Create participant ID
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Generate Participant ID"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you really want to generate new participant ID ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            component={Link}
            to={"/survey/create-participant-id"}
            onClick={handleClose}
            color="primary"
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={loginOpen}
        onClose={handleLoginClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Generate guest ID"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you really want to generate a guest ID <br />
            to attend a tasting session ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLoginClose} color="primary">
            Cancel
          </Button>
          <Button
            component={Link}
            to={"/survey/surveys"}
            onClick={handleLoginClose}
            color="primary"
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Survey;
