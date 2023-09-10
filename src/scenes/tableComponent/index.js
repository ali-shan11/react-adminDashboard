import { Box, colors, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";

const Table = () => {
  const [rows, setRows] = useState([]);
  const [prevPayload, setPrevPayload] = useState("");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const txt = localStorage.getItem("tablePayload");

    const parsedData = JSON.parse(txt);
    console.log("this is parsed Data", parsedData);
    setPrevPayload(txt);

    const newRow = Object.keys(parsedData.Data_Point).map((key) => ({
      Data_Point: parsedData.Data_Point[key],
      Sample_Num: parsedData.Sample_Num[key],
      Time_Stamp: parsedData.Time_Stamp[key],
      Time_Per: parsedData.Time_Per[key],
      Temp: parsedData.Temp[key],
      Gain: parsedData.Gain[key],
      Int_Time: parsedData.Int_Time[key],
    }));

    const row = newRow;

    setRows(row);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const txt = localStorage.getItem("tablePayload");
      if (txt !== prevPayload) {
        const parsedData = JSON.parse(txt);
        console.log("Table's Parsed Data", parsedData);
        setPrevPayload(txt);

        const newRow = Object.keys(parsedData.Data_Point).map((key) => ({
          Data_Point: parsedData.Data_Point[key],
          Sample_Num: parsedData.Sample_Num[key],
          Time_Stamp: parsedData.Time_Stamp[key],
          Time_Per: parsedData.Time_Per[key],
          Temp: parsedData.Temp[key],
          Gain: parsedData.Gain[key],
          Int_Time: parsedData.Int_Time[key],
        }));

        const row = [];

        row.push(...rows, newRow[0]);
        console.log("this is the final output", row);

        setRows(row);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [prevPayload]);

  const columns = [
    { field: "Data_Point", headerName: "Data Point", flex: 1 },
    { field: "Sample_Num", headerName: "Sample Num", flex: 1 },
    { field: "Time_Stamp", headerName: "Time Stamp", flex: 1 },
    { field: "Time_Per", headerName: "Time Per", flex: 1 },
    { field: "Temp", headerName: "Temp", flex: 1 },
    { field: "Gain", headerName: "Gain", flex: 1 },
    { field: "Int_Time", headerName: "Int Time", flex: 1 },
  ];

  return (
    <Box m={"20px"}>
      <Header title="Table Page" subtitle="This is the table page" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
        }}
      >
        {rows && (
          <DataGrid
            rows={rows}
            columns={columns}
            getRowId={() => Math.random().toString(16).substr(2, 8)}
            disableSelectionOnClick
          />
        )}
      </Box>
    </Box>
  );
};

export default Table;
