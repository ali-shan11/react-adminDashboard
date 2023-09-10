import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { useState, useEffect } from "react";
import { Public } from "@mui/icons-material";

function CalStdDevChart() {
  const [finalData, setFinalData] = useState([]);
  const [prevPoint, setPrevPoint] = useState([]);
  const [prevPayload, setPrevPayload] = useState("");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isDashboard = false;
  const colorsNivo = {
    violet: "violet",
    blue: "blue",
    green: "green",
    yellow: "yellow",
    orange: "orange",
    red: "red",
  };

  function showFirstData() {
    const graph = localStorage.getItem("tablePayload");

    const parsedData = JSON.parse(graph);
    setPrevPayload(graph);
    // console.log("this is propes inside 1", props);
    const data = [
      {
        id: "violet",
        data: [
          {
            x: parsedData?.Time_Stamp[0],
            y: parsedData?.Cal_StdDev_Vio_450nm[0],
          },
        ],
      },
      {
        id: "blue",
        data: [
          {
            x: parsedData?.Time_Stamp[0],
            y: parsedData?.Cal_StdDev_Blu_500nm[0],
          },
        ],
      },
      {
        id: "green",
        data: [
          {
            x: parsedData?.Time_Stamp[0],
            y: parsedData?.Cal_StdDev_Grn_550nm[0],
          },
        ],
      },
      {
        id: "yellow",
        data: [
          {
            x: parsedData?.Time_Stamp[0],
            y: parsedData?.Cal_StdDev_Yel_570nm[0],
          },
        ],
      },
      {
        id: "orange",
        data: [
          {
            x: parsedData?.Time_Stamp[0],
            y: parsedData?.Cal_StdDev_Org_600nm[0],
          },
        ],
      },
      {
        id: "red",
        data: [
          {
            x: parsedData?.Time_Stamp[0],
            y: parsedData?.Cal_StdDev_Red_650nm[0],
          },
        ],
      },
    ];

    console.log(data, "data in the 1st time");
    setPrevPoint(data);

    setFinalData(data);
  }

  useEffect(() => {
    showFirstData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // console.log(props, "this is props every time");
      const txt = localStorage.getItem("tablePayload");
      if (txt !== prevPayload) {
        console.log("condition is true txt is not equal to rev paylad");
        const parsedData = JSON.parse(txt);
        // console.log("Graph's Parsed Data", parsedData);
        setPrevPayload(txt);

        const maindata = [
          {
            id: "violet",
            data: [
              {
                x: parsedData?.Time_Stamp[0],
                y: parsedData?.Cal_StdDev_Vio_450nm[0],
              },
            ],
          },
          {
            id: "blue",
            data: [
              {
                x: parsedData?.Time_Stamp[0],
                y: parsedData?.Cal_StdDev_Blu_500nm[0],
              },
            ],
          },
          {
            id: "green",
            data: [
              {
                x: parsedData?.Time_Stamp[0],
                y: parsedData?.Cal_StdDev_Grn_550nm[0],
              },
            ],
          },
          {
            id: "yellow",
            data: [
              {
                x: parsedData?.Time_Stamp[0],
                y: parsedData?.Cal_StdDev_Yel_570nm[0],
              },
            ],
          },
          {
            id: "orange",
            data: [
              {
                x: parsedData?.Time_Stamp[0],
                y: parsedData?.Cal_StdDev_Org_600nm[0],
              },
            ],
          },
          {
            id: "red",
            data: [
              {
                x: parsedData?.Time_Stamp[0],
                y: parsedData?.Cal_StdDev_Red_650nm[0],
              },
            ],
          },
        ];

        console.log(prevPoint, "this is previos point above loop");

        for (let i = 0; i <= 5; i++) {
          prevPoint[i]?.data.push(maindata[i]?.data[0]);
        }

        console.log(prevPoint, "this is previous point");

        setFinalData(prevPoint);
        console.log(finalData, "this is graph fianl data");
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [prevPayload]);

  return (
    <>
      <h3 style={{ margin: 0, marginTop: "50px" }}>
        This is the Calculated Standard Deviation Graph Data
      </h3>
      <ResponsiveLine
        data={finalData}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: colors.grey[100],
              },
            },
            legend: {
              text: {
                fill: colors.grey[100],
              },
            },
            ticks: {
              line: {
                stroke: colors.grey[100],
                strokeWidth: 1,
              },
              text: {
                fill: colors.grey[100],
              },
            },
          },
          legends: {
            text: {
              fill: colors.grey[100],
            },
          },
          tooltip: {
            container: {
              color: colors.primary[500],
            },
          },
        }}
        colors={({ id }) => colorsNivo[id]}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? undefined : "Time", // added
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickValues: 5, // added
          tickSize: 3,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? undefined : "Value", // added
          legendOffset: -40,
          legendPosition: "middle",
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={8}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </>
  );
}

export default CalStdDevChart;
