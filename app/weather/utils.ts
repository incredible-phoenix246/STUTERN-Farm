// // // weatherUtils.ts
// // interface WeatherData {
// //   time: string;
// //   temperature2m: number;
// //   isDay: boolean;
// //   rain: number;
// // }

// // interface HourlyWeatherData {
// //   time: string[];
// //   temperature2m: number[];
// //   relativeHumidity2m: number[];
// //   rain: number[];
// //   soilTemperature6cm: number[];
// //   soilMoisture3To9cm: number[];
// //   soilMoisture27To81cm: number[];
// // }

// // interface DailyWeatherData {
// //   time: string[];
// //   temperature2mMax: number[];
// //   sunrise: string[];
// //   windSpeed10mMax: number[];
// // }

// // export const processWeatherData = (responses: any[]): { current: WeatherData; hourly: HourlyWeatherData; daily: DailyWeatherData } => {
// //   const response = responses[0];

// //   const current = processCurrentWeather(response.current());
// //   const hourly = processHourlyWeather(response.hourly());
// //   const daily = processDailyWeather(response.daily());

// //   return { current, hourly, daily };
// // };

// // const processCurrentWeather = (current: any): WeatherData => {
// //   return {
// //     time: new Date(current.time()).toISOString(),
// //     temperature2m: current.variables(0)!.value(),
// //     isDay: current.variables(1)!.value(),
// //     rain: current.variables(2)!.value(),
// //   };
// // };

// // const processHourlyWeather = (hourly: any): HourlyWeatherData => {
// //   const time = range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
// //     (t) => new Date((t + Response.utcOffsetSeconds()) * 1000).toISOString()
// //   );

// //   return {
// //     time,
// //     temperature2m: hourly.variables(0)!.valuesArray()!,
// //     relativeHumidity2m: hourly.variables(1)!.valuesArray()!,
// //     rain: hourly.variables(2)!.valuesArray()!,
// //     soilTemperature6cm: hourly.variables(3)!.valuesArray()!,
// //     soilMoisture3To9cm: hourly.variables(4)!.valuesArray()!,
// //     soilMoisture27To81cm: hourly.variables(5)!.valuesArray()!,
// //   };
// // };

// // const processDailyWeather = (daily: any): DailyWeatherData => {
// //   const time = range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
// //     (t) => new Date((t + Response.utcOffsetSeconds()) * 1000).toISOString()
// //   );

// //   return {
// //     time,
// //     temperature2mMax: daily.variables(0)!.valuesArray()!,
// //     sunrise: daily.variables(1)!.valuesArray()!,
// //     windSpeed10mMax: daily.variables(2)!.valuesArray()!,
// //   };
// // };

// // // Helper function to form time ranges
// // const range = (start: number, stop: number, step: number) =>
// //   Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

// // weatherUtils.ts
// interface WeatherData {
//   time: string;
//   temperature2m: number;
//   isDay: boolean;
//   rain: number;
// }

// interface HourlyWeatherData {
//   time: string[];
//   temperature2m: number[];
//   relativeHumidity2m: number[];
//   rain: number[];
//   soilTemperature6cm: number[];
//   soilMoisture3To9cm: number[];
//   soilMoisture27To81cm: number[];
// }

// interface DailyWeatherData {
//   time: string[];
//   temperature2mMax: number[];
//   sunrise: string[];
//   windSpeed10mMax: number[];
// }

// export const processWeatherData = (responses: any[]): { current: WeatherData; hourly: HourlyWeatherData; daily: DailyWeatherData } => {
//   const response = Response(0);

//   const current = processCurrentWeather(response.current());
//   const hourly = processHourlyWeather(response.hourly(), response.utcOffsetSeconds());
//   const daily = processDailyWeather(response.daily(), response.utcOffsetSeconds());

//   return { current, hourly, daily };
// };

// const processCurrentWeather = (current: any): WeatherData => {
//   return {
//     time: new Date(current.time()).toISOString(),
//     temperature2m: current.variables(0)!.value(),
//     isDay: current.variables(1)!.value(),
//     rain: current.variables(2)!.value(),
//   };
// };

// const processHourlyWeather = (hourly: any): HourlyWeatherData => {
//   const response = Response; // Add this line to get the response object

//   const time = range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
//     (t) => new Date((t + response.utcOffsetSeconds()) * 1000).toISOString()
//   );

//   return {
//     time,
//     temperature2m: hourly.variables(0)!.valuesArray()!,
//     relativeHumidity2m: hourly.variables(1)!.valuesArray()!,
//     rain: hourly.variables(2)!.valuesArray()!,
//     soilTemperature6cm: hourly.variables(3)!.valuesArray()!,
//     soilMoisture3To9cm: hourly.variables(4)!.valuesArray()!,
//     soilMoisture27To81cm: hourly.variables(5)!.valuesArray()!,
//   };
// };

// const processDailyWeather = (daily: any): DailyWeatherData => {
//   const response = new Response(); // Add this line to get the response object

//   const time = range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
//     (t) => new Date((t + response.utcOffsetSeconds()) * 1000).toISOString()
//   );

//   return {
//     time,
//     temperature2mMax: daily.variables(0)!.valuesArray()!,
//     sunrise: daily.variables(1)!.valuesArray()!,
//     windSpeed10mMax: daily.variables(2)!.valuesArray()!,
//   };
// };

// // Helper function to form time ranges
// const range = (start: number, stop: number, step: number) =>
//   Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

import { fetchWeatherApi } from 'openmeteo';

const params = {
  latitude: 10,
  longitude: 8,
  current: ['temperature_2m', 'is_day', 'rain'],
  hourly: [
    'temperature_2m',
    'relative_humidity_2m',
    'rain',
    'soil_temperature_6cm',
    'soil_moisture_3_to_9cm',
    'soil_moisture_27_to_81cm',
  ],
  daily: ['temperature_2m_max', 'sunrise', 'wind_speed_10m_max'],
  timezone: 'auto',
};
const url = 'https://my-server.tld/v1/forecast';
const responses = await fetchWeatherApi(url, params);

// Helper function to form time ranges
const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

// Attributes for timezone and location
const utcOffsetSeconds = response.utcOffsetSeconds();
const timezone = response.timezone();
const timezoneAbbreviation = response.timezoneAbbreviation();
const latitude = response.latitude();
const longitude = response.longitude();

const current = response.current()!;
const hourly = response.hourly()!;
const daily = response.daily()!;

// Note: The order of weather variables in the URL query and the indices below need to match!
const weatherData = {
  current: {
    time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
    temperature2m: current.variables(0)!.value(),
    isDay: current.variables(1)!.value(),
    rain: current.variables(2)!.value(),
  },
  hourly: {
    time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
      (t) => new Date((t + utcOffsetSeconds) * 1000),
    ),
    temperature2m: hourly.variables(0)!.valuesArray()!,
    relativeHumidity2m: hourly.variables(1)!.valuesArray()!,
    rain: hourly.variables(2)!.valuesArray()!,
    soilTemperature6cm: hourly.variables(3)!.valuesArray()!,
    soilMoisture3To9cm: hourly.variables(4)!.valuesArray()!,
    soilMoisture27To81cm: hourly.variables(5)!.valuesArray()!,
  },
  daily: {
    time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
      (t) => new Date((t + utcOffsetSeconds) * 1000),
    ),
    temperature2mMax: daily.variables(0)!.valuesArray()!,
    sunrise: daily.variables(1)!.valuesArray()!,
    windSpeed10mMax: daily.variables(2)!.valuesArray()!,
  },
};

// `weatherData` now contains a simple structure with arrays for datetime and weather data
for (let i = 0; i < weatherData.hourly.time.length; i++) {
  console.log(
    weatherData.hourly.time[i].toISOString(),
    weatherData.hourly.temperature2m[i],
    weatherData.hourly.relativeHumidity2m[i],
    weatherData.hourly.rain[i],
    weatherData.hourly.soilTemperature6cm[i],
    weatherData.hourly.soilMoisture3To9cm[i],
    weatherData.hourly.soilMoisture27To81cm[i],
  );
}
for (let i = 0; i < weatherData.daily.time.length; i++) {
  console.log(
    weatherData.daily.time[i].toISOString(),
    weatherData.daily.temperature2mMax[i],
    weatherData.daily.sunrise[i],
    weatherData.daily.windSpeed10mMax[i],
  );
}
