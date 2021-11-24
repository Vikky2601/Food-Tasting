import React from "react";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
const Descrimination = () => {
  return (
    <div className="description">
      <Typography>
        Please Click On Each Sample Set To Enter Your Evaluation
      </Typography>
      <table>
        <div style={{ textAlign: "center" }}>
          <Button variant="outlined" color="primary">
            Sample Set 1
          </Button>
          <p style={{ fontSize: 16, margin: 10 }}>
            Which Of The Two Coded Samples Is Same As Reference
          </p>
        </div>

        <tr>
          <th>Reference</th>
          <th>Sample 1</th>
          <th>Sample 2</th>
        </tr>
        <tr>
          <td style={{ background: "purple" }}>855</td>
          <td style={{ background: "purple" }}>351</td>
          <td style={{ background: "purple" }}>641</td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <input type="checkbox" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Descrimination;
