import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import React, { useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DataClass from "./dataClass";
import AvgChart from "./graphs/rawAvgGraphData";
import CalAvgChart from "./graphs/calAvgGraphData";
import CalStdDevChart from "./graphs/calStdDevGraphData";
import RawStdDevChart from "./graphs/rawStdDevGraphData";

const Graph = () => {
  const [showAvg, setShowAvg] = useState(true);
  const [showCalAvg, setShowCalAvg] = useState(false);
  const [showCalStdDev, setshowCalStdDev] = useState(false);
  const [showRawStdDev, setshowRawStdDev] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={"20px"}>
      <Header title="Graph Page" subtitle="This is the graph page" />
      <Box height="75vh">
        <FormControlLabel
          sx={{ color: colors.grey[100] }}
          control={
            <Checkbox
              checked={showAvg}
              onChange={(e) => {
                setShowAvg(e.target.checked);
              }}
              style={{ color: colors.greenAccent[400] }}
            />
          }
          label="Raw_Avg"
        />
        <FormControlLabel
          sx={{ color: colors.grey[100] }}
          control={
            <Checkbox
              checked={showCalAvg}
              onChange={(e) => {
                setShowCalAvg(e.target.checked);
              }}
              style={{ color: colors.greenAccent[400] }}
            />
          }
          label="Cal_Raw_Avg"
        />
        <FormControlLabel
          sx={{ color: colors.grey[100] }}
          control={
            <Checkbox
              checked={showRawStdDev}
              onChange={(e) => {
                setshowRawStdDev(e.target.checked);
              }}
              style={{ color: colors.greenAccent[400] }}
            />
          }
          label="Raw_StdDev"
        />
        <FormControlLabel
          sx={{ color: colors.grey[100] }}
          control={
            <Checkbox
              checked={showCalStdDev}
              onChange={(e) => {
                setshowCalStdDev(e.target.checked);
              }}
              style={{ color: colors.greenAccent[400] }}
            />
          }
          label="Cal_StdDev"
        />
        {showAvg && <AvgChart />}
        {showCalAvg && <CalAvgChart />}
        {showRawStdDev && <RawStdDevChart />}
        {showCalStdDev && <CalStdDevChart />}
      </Box>
    </Box>
  );
};

export default Graph;
