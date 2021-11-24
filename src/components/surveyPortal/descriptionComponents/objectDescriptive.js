import React from "react";
import TextField from "@material-ui/core/TextField";

const ObjectDescriptive = () => {
  return (
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
  );
};

export default ObjectDescriptive;
