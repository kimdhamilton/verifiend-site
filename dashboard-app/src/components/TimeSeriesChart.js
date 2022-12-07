import React, { useState, useEffect } from 'react';

import "chartjs-adapter-moment";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  TimeScale,
  TimeSeriesScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  TimeScale,
  TimeSeriesScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  response: true,
  scales: {
    x: {
      type: "timeseries",
      time: {
        unit: "day",
        /*displayFormats: {
          'hour': 'MMM DD HH'
        }*/
      }
    }
  }
};

const tempData = {
  datasets: [
    {
      label: 'Verified counts',
      data: [],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    }
  ]
};

/*
time: {
        displayFormats: {
           'millisecond': 'MMM DD',
           'second': 'MMM DD',
           'minute': 'MMM DD',
           'hour': 'MMM DD',
           'day': 'MMM DD',
           'week': 'MMM DD',
           'month': 'MMM DD',
           'quarter': 'MMM DD',
           'year': 'MMM DD',
        }
*/

export const TimeSeriesChart = ({endpoint}) => {
  const [data, setData] = useState(tempData);
  
  useEffect(() => {
    fetch(endpoint)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      }).then((data) => {
        const newResults = data.map((s) => {
          return {
            x: new Date(s.day || s.timestamp),
            y: Number(s.count)
          }
        })
        const newData = {
          datasets: [
            {
              label: 'Verified counts',
              data: newResults,
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: 'rgba(53, 162, 235, 0.5)'
            }
          ]
        };
        setData(newData);
      }).catch((err) => {
        console.error(err);
      });
  }, []);


  return <Line options={options} data={data} />
};
