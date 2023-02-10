import { useEffect, useState } from 'react';
import { CityDetails } from '../../../shared/models/CityDetails.model'
import { Daily } from '../../../shared/models/Daily.model';
import './CityForecast.scss';

function CityForecast(props: {cityDetails: CityDetails}) {
  const [zone, setZone] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [daily, setDaily] = useState<Daily[]>([]);

  useEffect(() => {
    separateTimezone(props.cityDetails.timezone);
    setDaily(props.cityDetails.daily.slice(1, 7));
  }, [])

  const convertDate = (dateTime: number, fullDate: boolean) => {
    if(fullDate) {
      const date = new Date(dateTime*1000);
      return date.toDateString();
    } else {
      const date = new Date(dateTime*1000);
      return `${date.getDate()} ${date.toLocaleString('default', {month: 'short'})}`;
    }
  }

  const separateTimezone = (timezone: string) => {
    setZone(timezone.split("/")[0]);
    setCity(timezone.split("/")[1]);
  }

  return (
    <div className='sesamm-app__city-forecast'>
      <div className='sesamm-app__city-forecast__hourly'>

      </div>
      <div className='sesamm-app__city-forecast__main'>
        <div className='sesamm-app__city-forecast__main__header'>
          <span className='sesamm-app__city-forecast__main__header__timezone'>{city}, {zone}</span>
          <span className='sesamm-app__city-forecast__main__header__lat'>Lattitude: {props.cityDetails.lat}</span>
          <span className='sesamm-app__city-forecast__main__header__lon'>Longtitude: {props.cityDetails.lon}</span>
          <span className='sesamm-app__city-forecast__main__header__date'>{convertDate(props.cityDetails.current.dt, true)}</span>
        </div>
        <div className='sesamm-app__city-forecast__main__body'>
          <div className='sesamm-app__city-forecast__main__body__left'>
            <img
              className='sesamm-app__city-forecast__main__body__left__icon'
              src={`${process.env.REACT_APP_ICON_API}/${props.cityDetails.current.weather[0].icon}@4x.png`}
              alt={props.cityDetails.current.weather[0].main}
            />
          </div>
          <div className='sesamm-app__city-forecast__main__body__right'>
            <span className='sesamm-app__city-forecast__main__body__right__temp'>{props.cityDetails.current.temp}°C</span>
            <span className='sesamm-app__city-forecast__main__body__right__feels-like'>Feels like {props.cityDetails.current.feels_like}°C</span>
            <span className='sesamm-app__city-forecast__main__body__right__description'>{props.cityDetails.current.weather[0].description.toLocaleUpperCase()}</span>
            <span className='sesamm-app__city-forecast__main__body__right__uv'>UV: {props.cityDetails.current.uvi}</span>
            <span className='sesamm-app__city-forecast__main__body__right__humidity'>Humidity: {props.cityDetails.current.humidity}</span>
            <span className='sesamm-app__city-forecast__main__body__right__visibility'>Visibility: {props.cityDetails.current.visibility}m</span>
          </div>
        </div>
      </div>
      <div className='sesamm-app__city-forecast__daily'>
      {daily.map((day: Daily) => (
        <div className='sesamm-app__city-forecast__daily__day' key={`day-${day.dt}`}>
          <span className='sesamm-app__city-forecast__daily__day__date'>{convertDate(day.dt, false)}</span>
          <img
            className='sesamm-app__city-forecast__daily__day__icon'
            src={`${process.env.REACT_APP_ICON_API}/${day.weather[0].icon}@2x.png`}
            alt={props.cityDetails.current.weather[0].main}
          />
          <span className='sesamm-app__city-forecast__daily__day__temp'>{day.temp.min}°C - {day.temp.max}°C</span>
          <span className='sesamm-app__city-forecast__daily__day__description'>{day.weather[0].description}</span>
        </div>
      ))}
      </div>
    </div>
  )
}

export default CityForecast