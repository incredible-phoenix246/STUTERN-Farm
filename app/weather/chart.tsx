import { ChartOptions } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Line  } from 'react-chartjs-2';

interface WeatherChartProps {
  hourlyData: {
    time: string;
    temp_c: number;
    wind_kph: number;
  }[];
}

const WeatherChart: React.FC<WeatherChartProps> = () => {
  const [hourlyData, setHourlyData] = useState<WeatherChartProps['hourlyData']>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=65c3ea8123ca484d889235042232711&q=nigeria');
        const data = await response.json();
        const hourlyData = data.forecast.forecastday[0].hour;
        setHourlyData(hourlyData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  const labels = hourlyData.map((hour) => hour.time);
  const temperatureData = hourlyData.map((hour) => hour.temp_c);
  const windSpeedData = hourlyData.map((hour) => hour.wind_kph);

  const data = {
    labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: temperatureData,
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        yAxisID: 'temperature',
      },
      {
        label: 'Wind Speed (kph)',
        data: windSpeedData,
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 2,
        yAxisID: 'windSpeed',
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
      temperature: {
        type: 'linear',
        position: 'left',
      },
      windSpeed: {
        type: 'linear',
        position: 'right',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default WeatherChart;
