import React from "react";
import ReactDOM from "react-dom";

import ReactFC from "react-fusioncharts";

import FusionCharts from "fusioncharts";

import Chart from "fusioncharts/fusioncharts.charts";

import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: "pie3d",
    width: "400",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Languages",
        theme: "fusion",
        decimals: 0,
        pieRedius: "45%",
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
