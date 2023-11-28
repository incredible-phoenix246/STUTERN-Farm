// // import { useEffect, useState } from 'react';
// // import {weatherData} from "./request"

// // const WeatherPage = () => {
// // //  const [weatherData, setWeatherData] = useState<any>(null);

// // return (
// //     <div>
// //       <h1>Weather Data Visualization</h1>
// //       {weatherData && (
// //         <div>
// //           <h2>Current Weather</h2>
// //           <table>
// //             <thead>
// //               <tr>
// //                 <th>Time</th>
// //                 <th>Temperature (2m)</th>
// //                 <th>Is Day</th>
// //                 <th>Rain</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               <tr>
// //                 <td>{weatherData.current.time}</td>
// //                 <td>{weatherData.current.temperature2m}</td>
// //                 <td>{weatherData.current.isDay}</td>
// //                 <td>{weatherData.current.rain}</td>
// //               </tr>
// //             </tbody>
// //           </table>

// //           <h2>Hourly Weather</h2>
// //           <table>
// //             <thead>
// //               <tr>
// //                 <th>Time</th>
// //                 <th>Temperature (2m)</th>
// //                 <th>Relative Humidity (2m)</th>
// //                 <th>Rain</th>
// //                 <th>Soil Temperature (6cm)</th>
// //                 <th>Soil Moisture (3-9cm)</th>
// //                 <th>Soil Moisture (27-81cm)</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {weatherData.hourly.time.map((time: string, index: number) => (
// //                 <tr key={index}>
// //                   <td>{time}</td>
// //                   <td>{weatherData.hourly.temperature2m[index]}</td>
// //                   <td>{weatherData.hourly.relativeHumidity2m[index]}</td>
// //                   <td>{weatherData.hourly.rain[index]}</td>
// //                   <td>{weatherData.hourly.soilTemperature6cm[index]}</td>
// //                   <td>{weatherData.hourly.soilMoisture3To9cm[index]}</td>
// //                   <td>{weatherData.hourly.soilMoisture27To81cm[index]}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>

// //           {/* Similar structure for daily weather */}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default WeatherPage;

// // pages/weather.tsx
// import { useEffect, useState } from 'react';
// import { fetchWeatherApi } from 'openmeteo';
// import { processWeatherData } from './utils';

// const WeatherPage = () => {
//   const [weatherData, setWeatherData] = useState<any>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const params = {
//         latitude: 10,
//         longitude: 8,
//         current: ['temperature_2m', 'is_day', 'rain'],
//         hourly: [
//           'temperature_2m',
//           'relative_humidity_2m',
//           'rain',
//           'soil_temperature_6cm',
//           'soil_moisture_3_to_9cm',
//           'soil_moisture_27_to_81cm',
//         ],
//         daily: ['temperature_2m_max', 'sunrise', 'wind_speed_10m_max'],
//         timezone: 'auto',
//       };
//       const url = 'https://my-server.tld/v1/forecast';
//       const responses = await fetchWeatherApi(url, params);

//       // Process the weather data
//       const processedData = processWeatherData(responses);
//       setWeatherData(processedData);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Weather Data Visualization</h1>
//       {weatherData && <div>{/* Render your components using weatherData */}</div>}
//     </div>
//   );
// };

// export default WeatherPage;

// import { fetchWeatherApi } from 'openmeteo';

// const params = {
//   latitude: 10,
//   longitude: 8,
//   current: ['temperature_2m', 'is_day', 'rain'],
//   hourly: [
//     'temperature_2m',
//     'relative_humidity_2m',
//     'rain',
//     'soil_temperature_6cm',
//     'soil_moisture_3_to_9cm',
//     'soil_moisture_27_to_81cm',
//   ],
//   daily: ['temperature_2m_max', 'sunrise', 'wind_speed_10m_max'],
//   timezone: 'auto',
// };
// const url = 'https://my-server.tld/v1/forecast';
// const responses = await fetchWeatherApi(url, params);

// // // Helper function to form time ranges
// // const range = (start: number, stop: number, step: number) =>
// //   Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

// // // Process first location. Add a for-loop for multiple locations or weather models
// // const response = responses[0];

// // // Attributes for timezone and location
// // const utcOffsetSeconds = response.utcOffsetSeconds();
// // const timezone = response.timezone();
// // const timezoneAbbreviation = response.timezoneAbbreviation();
// // const latitude = response.latitude();
// // const longitude = response.longitude();

// // const current = response.current()!;
// // const hourly = response.hourly()!;
// // const daily = response.daily()!;

// // // Note: The order of weather variables in the URL query and the indices below need to match!
// // const weatherData = {
// //   current: {
// //     time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
// //     temperature2m: current.variables(0)!.value(),
// //     isDay: current.variables(1)!.value(),
// //     rain: current.variables(2)!.value(),
// //   },
// //   hourly: {
// //     time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
// //       (t) => new Date((t + utcOffsetSeconds) * 1000),
// //     ),
// //     temperature2m: hourly.variables(0)!.valuesArray()!,
// //     relativeHumidity2m: hourly.variables(1)!.valuesArray()!,
// //     rain: hourly.variables(2)!.valuesArray()!,
// //     soilTemperature6cm: hourly.variables(3)!.valuesArray()!,
// //     soilMoisture3To9cm: hourly.variables(4)!.valuesArray()!,
// //     soilMoisture27To81cm: hourly.variables(5)!.valuesArray()!,
// //   },
// //   daily: {
// //     time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
// //       (t) => new Date((t + utcOffsetSeconds) * 1000),
// //     ),
// //     temperature2mMax: daily.variables(0)!.valuesArray()!,
// //     sunrise: daily.variables(1)!.valuesArray()!,
// //     windSpeed10mMax: daily.variables(2)!.valuesArray()!,
// //   },
// // };

// // // `weatherData` now contains a simple structure with arrays for datetime and weather data
// // for (let i = 0; i < weatherData.hourly.time.length; i++) {
// //   console.log(
// //     weatherData.hourly.time[i].toISOString(),
// //     weatherData.hourly.temperature2m[i],
// //     weatherData.hourly.relativeHumidity2m[i],
// //     weatherData.hourly.rain[i],
// //     weatherData.hourly.soilTemperature6cm[i],
// //     weatherData.hourly.soilMoisture3To9cm[i],
// //     weatherData.hourly.soilMoisture27To81cm[i],
// //   );
// // }
// // for (let i = 0; i < weatherData.daily.time.length; i++) {
// //   console.log(
// //     weatherData.daily.time[i].toISOString(),
// //     weatherData.daily.temperature2mMax[i],
// //     weatherData.daily.sunrise[i],
// //     weatherData.daily.windSpeed10mMax[i],
// //   );
// // }

// "use client"

// import React from 'react';
// import WeatherChart from './chart';

// const Home: React.FC<{ hourlyData: any[] }> = ({ hourlyData }) => {
//   return (
//     <div>
//       <h1>Weather Chart</h1>
//       <WeatherChart hourlyData={hourlyData} />
//     </div>
//   );
// };

// // export async function getStaticProps() {
// //   // Fetch the data from the API and pass it as props
// //   const res = await fetch(
// //     'http://api.weatherapi.com/v1/forecast.json?key=65c3ea8123ca484d889235042232711&q=nigeria'
// //   );
// //   const data = await res.json();

// //   const hourlyData = data.forecast.forecastday[0].hour;

// //   return {
// //     props: {
// //       hourlyData,
// //     },
// //   };

// export default Home;
'use client';

// WeatherComponent.tsx
// import React, { useState, useEffect } from 'react';
// import Loggedin from '../Layouts/Loggedin';

// interface WeatherResponse {
//   location: {
//     name: string;
//   };
//   current: {
//     temp_c: number;
//     wind_kph: number;
//   };
//   forecast: {
//     forecastday: {
//       hour: {
//         time: string;
//         temp_c: number;
//         wind_kph: number;
//       }[];
//     }[];
//   };
// }

// const WeatherComponent: React.FC = () => {
//   const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           'http://api.weatherapi.com/v1/forecast.json?key=65c3ea8123ca484d889235042232711&q=nigeria',
//         );
//         const data: WeatherResponse = await response.json();
//         setWeatherData(data);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Loggedin>
//       <div>
//         {weatherData && (
//           <div>
//             <h2>{weatherData.location.name}</h2>
//             <p>Current Temperature: {weatherData.current.temp_c} °C</p>
//             <p>Current Wind Speed: {weatherData.current.wind_kph} kph</p>
//             <h3>Forecast:</h3>
//             {weatherData.forecast.forecastday[0].hour.map((hourData) => (
//               <div key={hourData.time}>
//                 <p>
//                   {hourData.time}: {hourData.temp_c} °C, Wind Speed: {hourData.wind_kph} kph
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </Loggedin>
//   );
// };

// export default WeatherComponent;

// // WeatherComponent.tsx
// import React, { useState, useEffect } from 'react';
// import Chart from 'chart.js/auto';

// interface WeatherResponse {
//   location: {
//     name: string;
//   };
//   current: {
//     temp_c: number;
//     wind_kph: number;
//   };
//   forecast: {
//     forecastday: {
//       hour: {
//         time: string;
//         temp_c: number;
//         wind_kph: number;
//       }[];
//     }[];
//   };
// }

// const WeatherComponent: React.FC = () => {
//   const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           'http://api.weatherapi.com/v1/forecast.json?key=65c3ea8123ca484d889235042232711&q=nigeria'
//         );
//         const data: WeatherResponse = await response.json();
//         setWeatherData(data);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (weatherData) {
//       // Create chart
//       const ctx = document.getElementById('weatherChart') as HTMLCanvasElement;
//       const myChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//           labels: weatherData.forecast.forecastday[0].hour.map((hourData) => hourData.time),
//           datasets: [
//             {
//               label: 'Temperature (°C)',
//               data: weatherData.forecast.forecastday[0].hour.map((hourData) => hourData.temp_c),
//               borderColor: 'rgba(255, 99, 132, 1)',
//               borderWidth: 2,
//               fill: false,
//             },
//             {
//               label: 'Wind Speed (kph)',
//               data: weatherData.forecast.forecastday[0].hour.map((hourData) => hourData.wind_kph),
//               borderColor: 'rgba(54, 162, 235, 1)',
//               borderWidth: 2,
//               fill: false,
//             },
//           ],
//         },
//         options: {
//           scales: {
//             y: {
//               beginAtZero: true,
//             },
//           },
//         },
//       });
//     }
//   }, [weatherData]);

//   return (
//     <div>
//       {weatherData && (
//         <div>
//           <h2>{weatherData.location.name}</h2>
//           <p>Current Temperature: {weatherData.current.temp_c} °C</p>
//           <p>Current Wind Speed: {weatherData.current.wind_kph} kph</p>
//           <h3>Forecast:</h3>
//           <canvas id="weatherChart" width="400" height="200"></canvas>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherComponent;

// WeatherComponent.tsx
import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import 'chart.js';
import Loggedin from '../Layouts/Loggedin';

interface WeatherResponse {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    wind_kph: number;
  };
  forecast: {
    forecastday: {
      hour: {
        time: string;
        temp_c: number;
        wind_kph: number;
      }[];
    }[];
  };
}

const WeatherComponent: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.weatherapi.com/v1/forecast.json?key=65c3ea8123ca484d889235042232711&q=nigeria',
        );
        const data: WeatherResponse = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let myChart: Chart;

    const createChart = () => {
      if (weatherData) {
        const ctx = document.getElementById('weatherChart') as HTMLCanvasElement;

        // Destroy existing chart if it exists
        if (myChart) {
          myChart.destroy();
        }

        myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: weatherData.forecast.forecastday[0].hour.map((hourData) => hourData.time),
            datasets: [
              {
                label: 'Temperature (°C)',
                data: weatherData.forecast.forecastday[0].hour.map((hourData) => hourData.temp_c),
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                fill: false,
              },
              {
                label: 'Wind Speed (kph)',
                data: weatherData.forecast.forecastday[0].hour.map((hourData) => hourData.wind_kph),
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                fill: false,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    };

    createChart();

    return () => {
      // Cleanup function to destroy the chart when the component unmounts
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [weatherData]);

  return (
    <>
      <div className="max-w-md mx-auto bg-black p-4 rounded-md">
        {weatherData && (
          <div>
            <h2 className="text-2xl font-semibold">{weatherData.location.name}</h2>
            <p className="text-lg">Current Temperature: {weatherData.current.temp_c} °C</p>
            <p className="text-lg">Current Wind Speed: {weatherData.current.wind_kph} kph</p>
            <h3 className="text-xl font-semibold mt-4">Forecast:</h3>
            <canvas id="weatherChart" className="mt-2" width="400" height="200"></canvas>
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherComponent;
