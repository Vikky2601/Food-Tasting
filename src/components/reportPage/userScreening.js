import React from "react";

import { useHistory } from "react-router";

const UserScreening = () => {
  const history = useHistory();

  const onLoginClick = () => {
    history.push("/report/user-screening/details");
  };
  return (
    <div className="HOME">
      <div class="container">
        <div class="row column-reverse">
          <div class="col-md-6 col-12 col-sm-12 mt-5">
            <div className="survey-box-1">
              <div className="mt-5">
                <h2 className="mt-4">Remark</h2>
                <p className="text-lg">
                  Please enter your <b>Individual ID (participant ID)</b> that
                  you created during the screening. E.g if you are joining RAP
                  (recipe approval), just log in using your user name.
                </p>
              </div>
              <div>
                <h3 className="mt-4">
                  A common participant ID contains 5 digit.{" "}
                </h3>
                <div>
                  <p className="text-lg">
                    1st digit first letter of favourate color (e.g blue = b)
                    <br />
                    2nd and 3rd digit birth date of your mom (e.g 23rd of may =
                    23)
                    <br />
                    4th and 5th digit birth year of your dad (e.g 1941 = 41)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-12 col-sm-12">
            <div className="survey-box-2 card-box box-shadow mt-5">
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
                    <button
                      type="submit"
                      className="login-btn"
                      onClick={onLoginClick}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <hr />
              <div className="survey-box-2-head"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserScreening;
