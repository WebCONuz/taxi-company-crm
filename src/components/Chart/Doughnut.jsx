import React from "react";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = (props) => {
  const data = {
    labels: props.label,
    datasets: [
      {
        label: "24.04.2023",
        backgroundColor: props.color,
        borderColor: "white",
        data: props.data,
        hoverOffset: 4,
      },
    ],
  };
  return (
    <>
      <Doughnut data={data} className="mx-auto" />
    </>
  );
};
export default DoughnutChart;
