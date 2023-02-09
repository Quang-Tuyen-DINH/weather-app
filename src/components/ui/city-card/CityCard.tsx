import React from 'react'
import { City } from '../../../shared/models/City.model'

function CityCard(props: {city: City}) {
  return (
    <div className='sesamm-app__city'>
      <div className='sesamm-app__city__left'>
        <span className='sesamm-app__city__left__name'>{props.city.name}</span>
        <div className='sesamm-app__city__left__country'>
          <span className='sesamm-app__city__left__country__name'>{props.city.sys.country}</span>
          <img
            className='sesamm-app__city__left__country__flag-icon'
            src={`https://openweathermap.org/images/flags/${props.city.sys.country.toLowerCase()}.png`}
            alt={props.city.sys.country}
          />
        </div>
      </div>
      <div className='sesamm-app__city__right'>
        <div className='sesamm-app__city__right__weather'>
          <img
            className='sesamm-app__city__right__weather__icon'
            src={`https://openweathermap.org/img/wn/${props.city.weather[0].icon}@2x.png`}
            alt={props.city.weather[0].main}
          />
          <span className='sesamm-app__city__right__weather__temp'>{props.city.weather[0].main}</span>
        </div>
        <div className='sesamm-app__city__right__coordinations'>
          <span className='sesamm-app__city__right__coordinations__lat'>{props.city.coord.lat}</span>
          <span className='sesamm-app__city__right__coordinations__lon'>{props.city.coord.lon}</span>
        </div>
      </div>
    </div>
  )
}

export default CityCard