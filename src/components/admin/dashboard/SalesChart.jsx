"use client";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const SalesChart = () => {
  const [period, setPeriod] = useState("yearly");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    fetchChartData(period);
  }, [period]);

  const fetchChartData = (period) => {
    let data;
    switch (period) {
      case "daily":
        data = generateDailyData();
        break;
      case "weekly":
        data = generateWeeklyData();
        break;
      case "monthly":
        data = generateMonthlyData();
        break;
      case "yearly":
        data = generateYearlyData();
        break;

      default:
        data = generateDailyData();
    }
    setChartData(data);
  };

  const generateYearlyData = () => {
    return {
      labels: ["2020", "2021", "2022", "2023", "2024"],
      datasets: [
        {
          label: "Yearly Sales",
          data: [100, 200, 300, 400, 500],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true,
        },
      ],
    };
  };

  const generateMonthlyData = () => {
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Monthly Sales",
          data: [10, 20, 30, 40, 50, 60, 70, 60, 90, 100, 110, 120],
          borderColor: "rgb(37 9 235)",
          backgroundColor: "rgb(20 92 225)",
          fill: true,
        },
      ],
    };
  };

  const generateWeeklyData = () => {
    return {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Weekly Sales",
          data: [25, 50, 75,, 13, 100],
          borderColor: "#DB2777",
          backgroundColor: "#F9A8D4",
          fill: true,
        },
      ],
    };
  };

  const generateDailyData = () => {
    return {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Daily Sales",
          data: [15, 10, 15, 50, 25, 70, 15,],
          borderColor: "#fff",
          backgroundColor: "#ddd",
          fill: true,
        },
      ],
    };
  };

  return (
    <div className="rounded-lg p-4 bg-black text-white">
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel className="text-white" id="period-select-label">
          Select Period
        </InputLabel>
        <Select
          className="text-white"
          labelId="period-select-label"
          id="period-select"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          label="Select Period"
        >
          <MenuItem value="daily">Daily</MenuItem>
          <MenuItem value="weekly">Weekly</MenuItem>
          <MenuItem value="monthly">Monthly</MenuItem>
          <MenuItem value="yearly">Yearly</MenuItem>
        </Select>
      </FormControl>
      {chartData.labels.length > 0 && chartData.datasets.length > 0 ? (
        <Line className="text-white" data={chartData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SalesChart;
