import React from "react";
import "../../App.css";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import SentimentDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentDissatisfiedOutlined";

const UserScreeningDetails = () => {
  return (
    <div className="HOME">
      <div className="attribute-box-1 table-margin box-shadow">
        <div className="attribute-box-1-heading row">
          <h4 className="col-8">
            {" "}
            Sensory Screening Results (#ID - USER ID: P0340)
          </h4>
          <h4 className="col-4">July 2021 Screening</h4>
        </div>

        <div className="attribute-box-1-editBox row ">
          <p className="col-md-5 col-sm-12 mt-3">Tasting types</p>
          <p className="col-md-7 col-sm-12 mt-3 user-screening-box">
            Screening
          </p>
          <p className="col-md-5 col-sm-12 mt-3">Tasting Description</p>
          <p className="col-md-7 col-sm-12 mt-3 user-screening-box">
            July 2021 Screening
          </p>
          <p className="col-md-5 col-sm-12 mt-3">Date of Tasting</p>
          <p className="col-md-7 col-sm-12 mt-3 user-screening-box">
            08.07.2021
          </p>
          <div class="table-responsive-lg plm-p">
            <table class="table  table-bordered m-0 mt-3 user-screening-table">
              <thead>
                <tr>
                  <th scope="col">Sample</th>
                  <th scope="col">Bitter</th>
                  <th scope="col">Sour</th>
                  <th scope="col">Salty</th>
                  <th scope="col">Sweet</th>
                  <th scope="col">Umami</th>
                  <th scope="col">Water</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    {" "}
                    111
                    <br />
                    <span>Sour low</span>
                  </th>
                  <td>
                    <SentimentSatisfiedOutlinedIcon
                      style={{ fontSize: 40, color: "green" }}
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">
                    {" "}
                    802
                    <br />
                    <span>Sweet low</span>
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <SentimentDissatisfiedOutlinedIcon
                      color="secondary"
                      style={{ fontSize: 40 }}
                    />
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">
                    387
                    <br />
                    <span>Bitter high</span>
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <SentimentSatisfiedOutlinedIcon
                      style={{ fontSize: 40, color: "green" }}
                    />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">
                    {" "}
                    263
                    <br />
                    <span>Sweet high</span>
                  </th>
                  <td></td>
                  <td></td>
                  <td>
                    <SentimentDissatisfiedOutlinedIcon
                      color="secondary"
                      style={{ fontSize: 40 }}
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">
                    {" "}
                    591
                    <br />
                    <span>Bitter low</span>
                  </th>
                  <td>
                    <SentimentSatisfiedOutlinedIcon
                      style={{ fontSize: 40, color: "green" }}
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">
                    {" "}
                    452
                    <br />
                    <span>Umami high</span>
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <SentimentDissatisfiedOutlinedIcon
                      color="secondary"
                      style={{ fontSize: 40 }}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {" "}
                    750
                    <br />
                    <span>Salty low</span>
                  </th>
                  <td></td>
                  <td></td>
                  <td>
                    <SentimentDissatisfiedOutlinedIcon
                      color="secondary"
                      style={{ fontSize: 40 }}
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">
                    {" "}
                    345
                    <br />
                    <span>Sweet high</span>
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <SentimentSatisfiedOutlinedIcon
                      style={{ fontSize: 40, color: "green" }}
                    />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">
                    {" "}
                    908
                    <br />
                    <span>Salty high</span>
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <SentimentSatisfiedOutlinedIcon
                      style={{ fontSize: 40, color: "green" }}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {" "}
                    182
                    <br />
                    <span>Water</span>
                  </th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <SentimentDissatisfiedOutlinedIcon
                      color="secondary"
                      style={{ fontSize: 40 }}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    120
                    <br />
                    <span>Umami low</span>
                  </th>
                  <td></td>
                  <td>
                    <SentimentSatisfiedOutlinedIcon
                      style={{ fontSize: 40, color: "green" }}
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">
                    593
                    <br />
                    <span>Sour high</span>
                  </th>
                  <td></td>
                  <td>
                    <SentimentDissatisfiedOutlinedIcon
                      color="secondary"
                      style={{ fontSize: 40 }}
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserScreeningDetails;
