import axios from "axios";

const weatherService = {
  async findCities(cityName: string, appId: string) {
    const cities = await axios.get(`${process.env.REACT_APP_WEATHER_API}/find?q=${cityName}&appid=${appId}&units=metric`);
    return cities;
  },

  async getCity(lon: number, lat: number, appId: string) {
    const city = await axios.get(`${process.env.REACT_APP_WEATHER_API}/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${appId}`);
    return city;
  }
}

export default weatherService;