// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

import "chartjs-adapter-moment";
import { Chart, Line } from "react-chartjs-2";
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

// import faker from 'faker';

const ENDPOINT = 'https://j7wyyzwjef.execute-api.us-east-1.amazonaws.com/stage/counts/';

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

export const App = () => {
  const [timeseries, setTimeseries] = useState([]);
  const [data, setData] = useState(tempData);
  

  useEffect(() => {
    fetch(ENDPOINT)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      }).then((data) => {
        const newResults = data.map((s) => {
          return {
            x: new Date(s.timestamp),
            y: Number(s.count)
          }
        })
        setTimeseries(newResults);
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
