import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

const CompDescriptive = () => {
  const [defRef, setDefRef] = useState(false);

  const openDefineRef = () => {
    setDefRef(!defRef);
  };

  return (
    <div>
      <div className="description">
        <Typography variant="h6"> Define Reference Attributes </Typography>
        <table>
          <tr>
            <th>Appearance (Unprepared)</th>
            <th>Aroma/Smell (Unprepared)</th>
            <th>Consistence (Unprepared)</th>
            <th>Appearance</th>
            <th>Aroma/Smell</th>
            <th>Flavor+Taste</th>
          </tr>
          <tr>
            <td style={{ color: "black" }}>Some Data</td>
            <td style={{ color: "black" }}>Some Data</td>
            <td style={{ color: "black" }}>Some Data</td>
            <td style={{ color: "black" }}>Some Data</td>
            <td style={{ color: "black" }}>Some Data</td>
            <td style={{ color: "black" }}>Some Data</td>
          </tr>
        </table>
      </div>
      <div>
        <Button variant="contained" color="primary">
          {" "}
          Reference: ref veg
        </Button>
        <Button
          onClick={openDefineRef}
          style={{ marginLeft: 20 }}
          variant="outlined"
          color="primary"
        >
          103
        </Button>
        <br />
        <br />

        {defRef && (
          <div>
            <div className="description">
              <table>
                <tr>
                  <th>Sample</th>
                  <th>Appearance(FAL)</th>
                  <th>Consistence(FAL)</th>
                  <th>Aroma/Smell(FAL)</th>
                  <th>Flavor Taste(FAL)</th>
                  <th>Mouth Fell(FAL)</th>
                  <th>After Taste(FAL)</th>
                </tr>
                <tr>
                  <td style={{ background: "#091118" }}>408</td>
                  <td>
                    <select>
                      <option class="optionGroup" selected disabled>
                        Please select a source
                      </option>

                      <option value="Extremely different">
                        Extremely different
                      </option>
                      <option value="Very much different">
                        Very much different
                      </option>
                      <option value="Distinctly different">
                        Distinctly different
                      </option>
                      <option value="Moderately different">
                        Moderately different
                      </option>
                      <option value="verallc descriptive">
                        Slightly different
                      </option>
                      <option value="Recipe approval (Very much different)">
                        Recipe approval (Very much different)
                      </option>
                    </select>
                    <TextField
                      placeholder="Enter a evaluation"
                      id="outlined-multiline-static"
                      multiline
                      fullWidth
                      rows={5}
                      variant="outlined"
                    />
                  </td>
                  <td>
                    <select>
                      <option class="optionGroup" selected disabled>
                        Please select a source
                      </option>

                      <option value="Extremely different">
                        Extremely different
                      </option>
                      <option value="Very much different">
                        Very much different
                      </option>
                      <option value="Distinctly different">
                        Distinctly different
                      </option>
                      <option value="Moderately different">
                        Moderately different
                      </option>
                      <option value="verallc descriptive">
                        Slightly different
                      </option>
                      <option value="Recipe approval (Very much different)">
                        Recipe approval (Very much different)
                      </option>
                    </select>
                    <TextField
                      placeholder="Enter a evaluation"
                      id="outlined-multiline-static"
                      multiline
                      fullWidth
                      rows={5}
                      variant="outlined"
                    />
                  </td>
                  <td>
                    <select>
                      <option class="optionGroup" selected disabled>
                        Please select a source
                      </option>

                      <option value="Extremely different">
                        Extremely different
                      </option>
                      <option value="Very much different">
                        Very much different
                      </option>
                      <option value="Distinctly different">
                        Distinctly different
                      </option>
                      <option value="Moderately different">
                        Moderately different
                      </option>
                      <option value="verallc descriptive">
                        Slightly different
                      </option>
                      <option value="Recipe approval (Very much different)">
                        Recipe approval (Very much different)
                      </option>
                    </select>
                    <TextField
                      placeholder="Enter a evaluation"
                      id="outlined-multiline-static"
                      multiline
                      fullWidth
                      rows={5}
                      variant="outlined"
                    />
                  </td>
                  <td>
                    <select>
                      <option class="optionGroup" selected disabled>
                        Please select a source
                      </option>

                      <option value="Extremely different">
                        Extremely different
                      </option>
                      <option value="Very much different">
                        Very much different
                      </option>
                      <option value="Distinctly different">
                        Distinctly different
                      </option>
                      <option value="Moderately different">
                        Moderately different
                      </option>
                      <option value="verallc descriptive">
                        Slightly different
                      </option>
                      <option value="Recipe approval (Very much different)">
                        Recipe approval (Very much different)
                      </option>
                    </select>
                    <TextField
                      placeholder="Enter a evaluation"
                      id="outlined-multiline-static"
                      multiline
                      fullWidth
                      rows={5}
                      variant="outlined"
                    />
                  </td>
                  <td>
                    <select>
                      <option class="optionGroup" selected disabled>
                        Please select a source
                      </option>

                      <option value="Extremely different">
                        Extremely different
                      </option>
                      <option value="Very much different">
                        Very much different
                      </option>
                      <option value="Distinctly different">
                        Distinctly different
                      </option>
                      <option value="Moderately different">
                        Moderately different
                      </option>
                      <option value="verallc descriptive">
                        Slightly different
                      </option>
                      <option value="Recipe approval (Very much different)">
                        Recipe approval (Very much different)
                      </option>
                    </select>
                    <TextField
                      placeholder="Enter a evaluation"
                      id="outlined-multiline-static"
                      multiline
                      fullWidth
                      rows={5}
                      variant="outlined"
                    />
                  </td>
                  <td>
                    <select>
                      <option class="optionGroup" selected disabled>
                        Please select a source
                      </option>

                      <option value="Extremely different">
                        Extremely different
                      </option>
                      <option value="Very much different">
                        Very much different
                      </option>
                      <option value="Distinctly different">
                        Distinctly different
                      </option>
                      <option value="Moderately different">
                        Moderately different
                      </option>
                      <option value="verallc descriptive">
                        Slightly different
                      </option>
                      <option value="Recipe approval (Very much different)">
                        Equaly reference
                      </option>
                    </select>
                    <TextField
                      placeholder="Enter a evaluation"
                      id="outlined-multiline-static"
                      multiline
                      fullWidth
                      rows={5}
                      variant="outlined"
                    />
                  </td>
                </tr>
              </table>
              <br />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompDescriptive;
