import { useEffect, useState } from 'react';
import './CityInput.scss';

function CityInput(props: {
  searchCity: any
}) {
const [city, setCity] = useState<string>('');
const [appId, setAppId] = useState<string>('');

const handleSearch = () => {
  props.searchCity({
    city: city,
    appId: appId
  });
}

const handleKeyDown = (event: any) => {
  if(event.key === 'Enter') {
    handleSearch();
  }
}

  return (
    <div className='sesamm-app__city-input' onKeyDown={handleKeyDown}>
      <div className='sesamm-app__city-input__inputs'>
        <div className='sesamm-app__city-input__inputs__city-name'>
          <label className='sesamm-app__city-input__inputs__city-name__label'>City name</label>
          <input
            className='sesamm-app__city-input__inputs__city-name__input'
            onChange={event => setCity(event.target.value)}
          ></input>
        </div>
        <div className='sesamm-app__city-input__inputs__app-id'>
          <label className='sesamm-app__city-input__inputs__app-id__label'>App ID</label>
          <input
            className='sesamm-app__city-input__inputs__app-id__input'
            onChange={event => setAppId(event.target.value)}
          ></input>
        </div>
      </div>
      <button
        className='sesamm-app__city-input__search-button'
        disabled={(city.length < 1 || appId.length < 1)}
        onClick={handleSearch}
      >Search</button>
    </div>
  )
}

export default CityInput