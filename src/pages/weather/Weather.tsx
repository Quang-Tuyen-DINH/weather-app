import { useState } from 'react';
import CityInput from '../../components/forms/city-input/CityInput';
import CityCard from '../../components/ui/city-card/CityCard';
import weatherService from '../../services/openweathermap/openweathermap.service';
import { City } from '../../shared/models/City.model';
import { CityDetails } from '../../shared/models/CityDetails.model';
import './Weather.scss';

function Weather() {
  const [appId, setAppId] = useState<string>('');
  const [foundCities, setFoundCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<CityDetails>();

  const findCity = async (coordinations: {
    city: string,
    appId: string
  }) => {
    setAppId(coordinations.appId);
    await weatherService.findCities(coordinations.city, coordinations.appId)
      .then((response) => {
        setFoundCities(response.data.list);
        console.log(foundCities)
      })
      .catch((err) => {
        console.log(err.response.data.message)
      });
  }

  const getCity = async (coordinations: {
    lon: number,
    lat: number
  }) => {
    await weatherService.getCity(coordinations.lon, coordinations.lat, appId);
  }

  return (
    <div className='sesamm-app__weather'>
      <CityInput searchCity={findCity}/>
      <div className='sesamm-app__weather__cities-list'>
        {foundCities.map((city: City) => (
          <CityCard city={city} />
        ))}
      </div>
    </div>
  )
}

export default Weather