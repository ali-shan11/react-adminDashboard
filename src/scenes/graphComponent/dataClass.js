import React, { Component } from "react";
import LineChart from "./graphs/rawAvgGraphData";

class DataClass extends React.Component {
  constructor(data) {
    super();
    this.state = {
      data: [],
    };
  }
  saveData() {
    const txt = localStorage.getItem("tablePayload");
    const payload = JSON.parse(txt);
    const jsonDataObject = {
      Allowable_Dev: payload.Allowable_Dev[0],
      Cal_Avg_Blu_500nm: payload.Cal_Avg_Blu_500nm[0],
      Cal_Avg_Grn_550nm: payload.Cal_Avg_Grn_550nm[0],
      Cal_Avg_Org_600nm: payload.Cal_Avg_Org_600nm[0],
      Cal_Avg_Red_650nm: payload.Cal_Avg_Red_650nm[0],
      Cal_Avg_Vio_450nm: payload.Cal_Avg_Vio_450nm[0],
      Cal_Avg_Yel_570nm: payload.Cal_Avg_Yel_570nm[0],
      Cal_Selected_Blu_500nm: payload.Cal_Selected_Blu_500nm[0],
      Cal_Selected_Grn_550nm: payload.Cal_Selected_Grn_550nm[0],
      Cal_Selected_Org_600nm: payload.Cal_Selected_Org_600nm[0],
      Cal_Selected_Red_650nm: payload.Cal_Selected_Red_650nm[0],
      Cal_Selected_Vio_450nm: payload.Cal_Selected_Vio_450nm,
      Cal_Selected_Yel_570nm: payload.Cal_Selected_Yel_570nm,
      Cal_StdDev_Blu_500nm: payload.Cal_StdDev_Grn_550nm[0],
      Cal_StdDev_Grn_550nm: payload.Cal_StdDev_Grn_550nm[0],
      Cal_StdDev_Org_600nm: payload.Cal_StdDev_Org_600nm[0],
      Cal_StdDev_Red_650nm: payload.Cal_StdDev_Red_650nm[0],
      Cal_StdDev_Vio_450nm: payload.Cal_StdDev_Vio_450nm[0],
      Cal_StdDev_Yel_570nm: payload.Cal_StdDev_Yel_570nm[0],
      Call_Used_Blu: payload.Call_Used_Blu[0],
      Call_Used_Grn: payload.Call_Used_Grn[0],
      Call_Used_Org: payload.Call_Used_Org[0],
      Call_Used_Red: payload.Call_Used_Red[0],
      Call_Used_Vio: payload.Call_Used_Vio[0],
      Call_Used_Yel: payload.Call_Used_Yel[0],
      Call_Values_Blu_500nm: payload.Call_Values_Blu_500nm[0],
      Call_Values_Grn_550nm: payload.Call_Values_Grn_550nm[0],
      Call_Values_Org_600nm: payload.Call_Values_Org_600nm[0],
      Call_Values_Red_650nm: payload.Call_Values_Red_650nm[0],
      Call_Values_Vio_450nm: payload.Call_Values_Vio_450nm[0],
      Call_Values_Yel_570nm: payload.Call_Values_Yel_570nm[0],
      Data_Point: payload.Data_Point[0],
      Gain: payload.Gain[0],
      Int_Time: payload.Int_Time[0],
      Raw_Avg_Blu_500nm: payload.Raw_Avg_Blu_500nm[0],
      Raw_Avg_Grn_550nm: payload.Raw_Avg_Grn_550nm[0],
      Raw_Avg_Org_600nm: payload.Raw_Avg_Org_600nm[0],
      Raw_Avg_Red_650nm: payload.Raw_Avg_Red_650nm[0],
      Raw_Avg_Vio_450nm: payload.Raw_Avg_Vio_450nm[0],
      Raw_Avg_Yel_570nm: payload.Raw_Avg_Yel_570nm[0],
      Raw_Selected_Blu_500nm: payload.Raw_Selected_Blu_500nm[0],
      Raw_Selected_Grn_550nm: payload.Raw_Selected_Grn_550nm[0],
      Raw_Selected_Org_600nm: payload.Raw_Selected_Org_600nm[0],
      Raw_Selected_Red_650nm: payload.Raw_Selected_Red_650nm[0],
      Raw_Selected_Vio_450nm: payload.Raw_Selected_Vio_450nm[0],
      Raw_Selected_Yel_570nm: payload.Raw_Selected_Yel_570nm[0],
      Raw_StdDev_Blu_500nm: payload.Raw_StdDev_Blu_500nm[0],
      Raw_StdDev_Grn_550nm: payload.Raw_StdDev_Grn_550nm[0],
      Raw_StdDev_Org_600nm: payload.Raw_StdDev_Org_600nm[0],
      Raw_StdDev_Red_650nm: payload.Raw_StdDev_Red_650nm[0],
      Raw_StdDev_Vio_450nm: payload.Raw_StdDev_Vio_450nm[0],
      Raw_StdDev_Yel_570nm: payload.Raw_StdDev_Yel_570nm[0],
      Raw_Used_Blu: payload.Raw_Used_Blu[0],
      Raw_Used_Grn: payload.Raw_Used_Grn[0],
      Raw_Used_Org: payload.Raw_Used_Org[0],
      Raw_Used_Red: payload.Raw_Used_Red[0],
      Raw_Used_Vio: payload.Raw_Used_Vio[0],
      Raw_Used_Yel: payload.Raw_Used_Yel[0],
      Raw_Values_Blu_500nm: payload.Raw_Values_Blu_500nm[0],
      Raw_Values_Grn_550nm: payload.Raw_Values_Grn_550nm[0],
      Raw_Values_Org_600nm: payload.Raw_Values_Org_600nm[0],
      Raw_Values_Red_650nm: payload.Raw_Values_Red_650nm[0],
      Raw_Values_Vio_450nm: payload.Raw_Values_Vio_450nm[0],
      Raw_Values_Yel_570nm: payload.Raw_Values_Yel_570nm[0],
      Sample_Num: payload.Sample_Num[0],
      Temp: payload.Temp[0],
      Time_Per: payload.Time_Per[0],
      Time_Stamp: payload.Time_Stamp[0],
    };
    if (this.props.graphType === "Raw_Avg") {
      const data = [
        {
          id: "violet",
          data: [
            {
              x: payload?.Time_Stamp[0],
              y: payload?.Raw_Avg_Vio_450nm[0],
            },
          ],
        },
        {
          id: "blue",
          data: [
            {
              x: payload?.Time_Stamp[0],
              y: payload?.Raw_Avg_Blu_500nm[0],
            },
          ],
        },
        {
          id: "green",
          data: [
            {
              x: payload?.Time_Stamp[0],
              y: payload?.Raw_Avg_Grn_550nm[0],
            },
          ],
        },
        {
          id: "yellow",
          data: [
            {
              x: payload?.Time_Stamp[0],
              y: payload?.Raw_Avg_Yel_570nm[0],
            },
          ],
        },
        {
          id: "orange",
          data: [
            {
              x: payload?.Time_Stamp[0],
              y: payload?.Raw_Avg_Org_600nm[0],
            },
          ],
        },
        {
          id: "red",
          data: [
            {
              x: payload?.Time_Stamp[0],
              y: payload?.Raw_Avg_Red_650nm[0],
            },
          ],
        },
      ];
      // this.setState(data);
    }
    // this.setState(payload);
    console.log(jsonDataObject, "payload insidde the class");
    // this.props.parentCallBack(jsonDataObject);
    console.log(this.props.graphType, "is props in class component");
  }

  render() {
    return <>{this.saveData()}</>;
  }
}
export default DataClass;
