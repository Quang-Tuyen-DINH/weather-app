import { Weather } from "./Weather.model";

export interface CityDetails {
  lat: number,
  lon: number,
  timezone: string,
  current: Current
}

interface Current {
  dt: number,
  temp: number,
  feels_like: number,
  humidity: number,
  uvi: number,
  visibility: number,
  weather: Weather[]
}