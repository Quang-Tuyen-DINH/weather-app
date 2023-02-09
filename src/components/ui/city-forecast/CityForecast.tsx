import { useEffect, useState } from 'react';
import { CityDetails } from '../../../shared/models/CityDetails.model'
import './CityForecast.scss';

function CityForecast(props: {cityDetails: CityDetails}) {
  const [zone, setZone] = useState<string>('');
  const [city, setCity] = useState<string>('');

  useEffect(() => {
    separateTimezone(props.cityDetails.timezone);
  }, [])

  const convertDate = (dateTime: number) => {
    const date = new Date(dateTime*1000);
    return date.toDateString();
  }

  const separateTimezone = (timezone: string) => {
    setZone(timezone.split("/")[0]);
    setCity(timezone.split("/")[1]);
  }

  return (
    <div className='sesamm-app__city-forecast'>
      <div className='sesamm-app__city-forecast__main'>
        <div className='sesamm-app__city-forecast__main__header'>
          <span className='sesamm-app__city-forecast__main__header__timezone'>{city}, {zone}</span>
          <span className='sesamm-app__city-forecast__main__header__lat'>Lattitude: {props.cityDetails.lat}</span>
          <span className='sesamm-app__city-forecast__main__header__lon'>Longtitude: {props.cityDetails.lon}</span>
          <span className='sesamm-app__city-forecast__main__header__date'>{convertDate(props.cityDetails.current.dt)}</span>
        </div>
        <div className='sesamm-app__city-forecast__main__body'>
          <div className='sesamm-app__city-forecast__main__body__left'>
            <img
              className='sesamm-app__city-forecast__main__body__left__icon'
              src={`https://openweathermap.org/img/wn/${props.cityDetails.current.weather[0].icon}@4x.png`}
              alt={props.cityDetails.current.weather[0].main}
            />
          </div>
          <div className='sesamm-app__city-forecast__main__body__right'>
            <span className='sesamm-app__city-forecast__main__body__right__degree'>{props.cityDetails.current.temp}°C</span>
            <span className='sesamm-app__city-forecast__main__body__right__feels-like'>Feels like {props.cityDetails.current.feels_like}°C</span>
            <span className='sesamm-app__city-forecast__main__body__right__description'>{props.cityDetails.current.weather[0].description.toLocaleUpperCase()}</span>
            <span className='sesamm-app__city-forecast__main__body__right__humidity'>Humidity: {props.cityDetails.current.humidity}</span>
            <span className='sesamm-app__city-forecast__main__body__right__visibility'>Visibility: {props.cityDetails.current.visibility}m</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CityForecast