import './Landing.scss';

function Landing() {
  return (
    <div className='sesamm-app__landing'>
      <div className='sesamm-app__landing__title'>
        <span>DINH Quang Tuyen - Typescript Developer</span>
      </div>
      <div className='sesamm-app__landing__informations'>
        <span>Github: <a href='https://github.com/Quang-Tuyen-DINH/weather-app'>github.com/Quang-Tuyen-DINH/weather-app</a></span>
        <br />
        <span>Demo: <a href='https://weather-dinh.vercel.app/'>weather-dinh.vercel.app</a></span>
        <br />
        <span>API ID: <a href='https://openweathermap.org/'>openweathermap.org</a></span>
      </div>
    </div>
  )
}

export default Landing