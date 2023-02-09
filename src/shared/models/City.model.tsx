import { Weather } from "./Weather.model"

export interface City {
  coord: {
    lat: number,
    lon: number
  },
  dt: number,
  id: number,
  main: {
    feels_like: number,
    humidity: number,
    temp: number,
    temp_max: number,
    temp_min: number,
  },
  name: string,
  sys: {
    country: string
  }
  weather: Weather[],
  wind: {
    deg: number,
    speed: number
  }
};