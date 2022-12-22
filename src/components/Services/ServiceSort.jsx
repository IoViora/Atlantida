import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useProducts } from "../../contexts/ServiceContextProvider";

export default function NativeSelectDemo() {
  const { filters, getProducts } = useProducts();
  return (
    <Box
      sx={{
        display: "flex",
        minWidth: 120,
        marginLeft: {
          xs: "30px",
          sm: "30px",
          md: "0",
          lg: "15px",
          xl: "0",
        },
      }}
    >
      <FormControl fullWidth>
        <InputLabel
          variant="standard"
          htmlFor="uncontrolled-native"
          sx={{ color: "black" }}
        >
          Sort By Type
        </InputLabel>
        <NativeSelect
          className="sortinp"
          defaultValue={"All"}
          inputProps={{
            name: "sort",
          }}
          onChange={(e) => filters(e.target.value)}
        >
          <option
            style={{ backgroundColor: "#020c15" }}
            className="sortvalue"
            value={"All"}
          >
            All
          </option>

          <option
            style={{ backgroundColor: "#020c15" }}
            className="sortvalue"
            value={"Chemistry"}
          >
            Chemistry
          </option>
          <option
            style={{ backgroundColor: "#020c15" }}
            className="sortvalue"
            value={"Biology"}
          >
            Biology
          </option>
          <option
            style={{ backgroundColor: "#020c15" }}
            className="sortvalue"
            value={"Medicine"}
          >
            Medicine
          </option>
          <option
            style={{ backgroundColor: "#020c15" }}
            className="sortvalue"
            value={"Science"}
          >
            Science
          </option>
          <option
            style={{ backgroundColor: "#020c15" }}
            className="sortvalue"
            value={"Special Services"}
          >
            Special Services
          </option>
          <option
            style={{ backgroundColor: "#020c15" }}
            className="sortvalue"
            value={"Military mercenary"}
          >
            Military mercenary
          </option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
