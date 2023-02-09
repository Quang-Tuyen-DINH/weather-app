import { useEffect, useState } from 'react';
import { CityDetails } from '../../../shared/models/CityDetails.model'

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
          <span className='sesamm-app__city-forecast__main__header__lat'>{props.cityDetails.lat}</span>
          <span className='sesamm-app__city-forecast__main__header__lon'>{props.cityDetails.lon}</span>
          <span className='sesamm-app__city-forecast__main__header__date'>{convertDate(props.cityDetails.current.dt)}</span>
        </div>
        <div className='sesamm-app__city-forecast__main__body'>
          <div className='sesamm-app__city-forecast__main__body__left'>
            <img
              className='sesamm-app__city-forecast__main__body__left__icon'
              src={`https://openweathermap.org/img/wn/${props.cityDetails.current.weather[0].icon}@4x.png`}
              alt={props.cityDetails.current.weather[0].main}
            />
            <span className='sesamm-app__city-forecast__main__body__left__degree'>{props.cityDetails.current.temp}°C</span>
          </div>
          <div className='sesamm-app__city-forecast__main__body__right'>
            <span className='sesamm-app__city-forecast__main__body__right__description'>{props.cityDetails.current.weather[0].description.toLocaleUpperCase()}</span>
            <span className='sesamm-app__city-forecast__main__body__right__feels-like'>{props.cityDetails.current.feels_like}</span>
            <span className='sesamm-app__city-forecast__main__body__right__humidity'>{props.cityDetails.current.humidity}</span>
            <span className='sesamm-app__city-forecast__main__body__right__visibility'>{props.cityDetails.current.visibility}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CityForecast