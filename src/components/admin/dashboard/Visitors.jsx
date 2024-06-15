'use client';
import TourIcon from '@mui/icons-material/Tour';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

Chart.register(...registerables);

const Visitors = () => {
  const [visitorIps, setVisitorIps] = useState([]);

  useEffect(() => {
    const ips = localStorage.getItem('visitorIps');
    const data = ips ? JSON.parse(ips) : [];
    setVisitorIps(data);
  }, []);


   // Create an array of dates and counts
   const dates = visitorIps.map(visitor => new Date(visitor.date));
   const dateCountMap = dates.reduce((acc, date) => {
     const dateStr = date.toISOString().split('T')[0]; // Use only the date part for uniqueness
     acc[dateStr] = (acc[dateStr] || 0) + 1;
     return acc;
   }, {});
 
   const uniqueDates = Object.keys(dateCountMap);
   const visitorCounts = Object.values(dateCountMap);



  const data = {
    labels: uniqueDates,
    datasets: [
      {
        label: 'Unique Visitors',
        data: visitorCounts,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
          tooltipFormat: 'PPpp', 
          displayFormats: {
            day: 'MMM d, yyyy', 
            hour: 'MMM d, yyyy, h:mm a', 
          },
        },
        ticks: {
          color: '#FFFFFF', 
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', 
        },
      },
      y: {
        ticks: {
          color: '#FFFFFF', 
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', 
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#FFFFFF',
        },
      },
      tooltip: {
        bodyColor: '#FFFFFF', 
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      },
    },
  };

  return (
    <div className='rounded-lg bg-black p-[20px] mb-4'>
      <div className="flex items-center justify-between">
        <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-cyan-500">
          <TourIcon className="text-[20px]" />
        </div>
        <div className="text-end">
          <p className="text-base text-text">Total Unique Visitors</p>
          <h2 className="text-[26px] font-semibold text-white">
            {visitorIps.length}
          </h2>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default Visitors;
