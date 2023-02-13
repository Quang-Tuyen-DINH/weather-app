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

  const findCity = async (coordinations: {
    city: string,
    appId: string
  }) => {
    setFoundCities([]);
    setSelectedCity(null);
    setAppId(coordinations.appId);
    const response = await weatherService.findCities(coordinations.city, coordinations.appId);
      setFoundCities(response.data.list);
  }

  const getCity = async (coordinations: {
    lon: number,
    lat: number
  }) => {
    const response = await weatherService.getCity(coordinations.lon, coordinations.lat, appId);
    setSelectedCity(response.data);
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