import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const ParticipantId = () => {
  let history = useHistory();

  const [details, setDetails] = useState([]);
  const [surveyId, setSurveyId] = useState("");
  const [category, setCategory] = useState("");
  const [region, setRegion] = useState("");

  const onSaveClick = () => {
    history.push("/survey/surveys");
  };

  const onBackClick = () => {
    history.push("/survey");
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    setDetails([
      ...details,
      {
        surveyId,
        category,
        region,
      },
    ]);

    try {
      var payload = {
        surveyId: surveyId,
        category: surveyId,
        region: region,
      };
      const response = await axios.post("", payload);
      const data = response.data;
      console.log("Create Participant Id", data);
    } catch (error) {
      console.log("Create Participant Id Error", error);
    }
  };

  console.log(details);

  return (
    <form onSubmit={onFormSubmit}>
      <div className="HOME">
        <div class="container">
          <div class="row column-reverse col-rev">
            <div class="col-md-6 col-12 col-sm-12 mt-3">
              <div className="survey-box-1">
                <div className="mt-5">
                  <h2 className="mt-4">Portal user details (#ID)</h2>
                  <p className="text-lg">
                    Please create your individual id (participant ID) before you
                    enter the screening session,
                    <br />
                    This will allow you to taste in a anonymous way, Remember
                    this code to join future tasting session <br />
                    Also select the Category and Region you are working for and
                    click on the save icon.
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
                      2nd and 3rd digit birth date of your mom (e.g 23rd of may
                      = 23)
                      <br />
                      4t and 5th digit birth year of your dad (e.g 1941 = 41)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-12 col-sm-12">
              <div className="survey-box-2 card-box box-shadow mt-5 mb-3">
                <div className="survey-box-2-head l-spacing-2 mt-3 ">
                  <div className="survey-box-2-text text-left">
                    <br />
                    <h4>Survey ID</h4>
                    <input
                      className="search-input-box home-search-input"
                      placeholder="Enter a survey short name or full window user name"
                      type="text"
                      value={surveyId}
                      onChange={(e) => setSurveyId(e.target.value)}
                    />
                    <br />
                    <br />
                    <h4>Category</h4>
                    <select
                      className="search-input-box home-search-input"
                      name="Category"
                      id="cars"
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option class="optionGroup" selected disabled>
                        Choose Category
                      </option>
                      <option value="BVG">BVG</option>
                      <option value="ICR">ICR</option>
                      <option value="SND">SND</option>
                      <option value="SVR">SVR</option>
                    </select>
                    <br />
                    <br />

                    <h4>Region</h4>
                    <select
                      className="search-input-box home-search-input"
                      name="Region"
                      id="cars"
                      onChange={(e) => setRegion(e.target.value)}
                    >
                      <br />
                      <option class="optionGroup" selected disabled>
                        Choose Region
                      </option>
                      <option value="AMET">AMET</option>
                      <option value="EU">EU</option>
                      <option value="GCEA">GCEA</option>
                      <option value="LATAM">LATAM</option>
                      <option value="SA">SA</option>
                    </select>
                  </div>
                </div>
                <br />
                <br />
                <div className="survey-box-2-head d-flex justify-content-between mb-4">
                  <Button
                    className="btn  btn-width"
                    variant="contained"
                    type="text"
                    onClick={onBackClick}
                  >
                    Back
                  </Button>

                  <Button
                    className="btn  btn-width survey-btn"
                    variant="contained"
                    color="primary"
                    onClick={onSaveClick}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ParticipantId;
