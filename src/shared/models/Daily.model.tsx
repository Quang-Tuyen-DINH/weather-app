import { Weather } from "./Weather.model";

export interface Daily {
  dt: number,
  temp: {
    day: number,
    max: number,
    min: number,
    morn: number,
    night: number
  }
  uvi: number,
  weather: Weather[]
}