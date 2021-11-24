import React from "react";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";

const Screening = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="description">
      <Typography variant="h6">
        Please Enter Your Evaluation For The Pre Define Attributes
      </Typography>
      <table>
        <tr>
          <th>Sample</th>
          <th>Bitter</th>
          <th>Sour</th>
          <th>Salty</th>
          <th>Sweet</th>
          <th>Umami</th>
          <th>Water</th>
        </tr>
        <tr>
          <td style={{ width: 20, background: "#091118" }}>408</td>
          <td>
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              name="radio-button-demo"
              inputProps={{ "aria-label": "A" }}
            />
          </td>
          <td>
            <Radio
              checked={selectedValue === "b"}
              onChange={handleChange}
              value="b"
              name="radio-button-demo"
              inputProps={{ "aria-label": "B" }}
            />
          </td>
          <td>
            <Radio
              checked={selectedValue === "c"}
              onChange={handleChange}
              value="c"
              name="radio-button-demo"
              inputProps={{ "aria-label": "C" }}
            />
          </td>
          <td>
            <Radio
              checked={selectedValue === "d"}
              onChange={handleChange}
              value="d"
              name="radio-button-demo"
              inputProps={{ "aria-label": "D" }}
            />
          </td>
          <td>
            <Radio
              checked={selectedValue === "e"}
              onChange={handleChange}
              value="e"
              name="radio-button-demo"
              inputProps={{ "aria-label": "E" }}
            />
          </td>
          <td>
            <Radio
              checked={selectedValue === "f"}
              onChange={handleChange}
              value="f"
              name="radio-button-demo"
              inputProps={{ "aria-label": "F" }}
            />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Screening;
