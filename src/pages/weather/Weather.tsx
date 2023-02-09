import { useState } from 'react';
import CityInput from '../../components/forms/city-input/CityInput';
import CityCard from '../../components/ui/city-card/CityCard';
import CityForecast from '../../components/ui/city-forecast/CityForecast';
import weatherService from '../../services/openweathermap/openweathermap.service';
import { City } from '../../shared/models/City.model';
import { CityDetails } from '../../shared/models/CityDetails.model';
import './Weather.scss';

function Weather() {
  const [appId, setAppId] = useState<string>('');
  const [foundCities, setFoundCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<CityDetails | null>();
  const [error, setError] = useState<string>('');

  const findCity = async (coordinations: {
    city: string,
    appId: string
  }) => {
    setFoundCities([]);
    setSelectedCity(null);
    setAppId(coordinations.appId);
    await weatherService.findCities(coordinations.city, coordinations.appId)
      .then((response) => {
        setFoundCities(response.data.list);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }

  const getCity = async (coordinations: {
    lon: number,
    lat: number
  }) => {
    await weatherService.getCity(coordinations.lon, coordinations.lat, appId)
      .then((response) => {
        setSelectedCity(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  
  return (
    <div className='sesamm-app__weather'>
      <CityInput searchCity={findCity}/>
      {!selectedCity && <div className='sesamm-app__weather__cities-list'>
        {foundCities.map((city: City) => (
          <div key={city.id} onClick={() => getCity(city.coord)}>
            <CityCard city={city} />
          </div>
        ))}
      </div>}
      {selectedCity && <CityForecast cityDetails={selectedCity}/>}
    </div>
  )
}

export default Weather