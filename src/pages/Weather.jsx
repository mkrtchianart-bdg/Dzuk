import WeekForecast from '../components/WeekForecast';
import Calendar from '../components/Calendar';
import './Weather.css';
import { useNavigate } from 'react-router-dom';

function Weather() {
  const navigate = useNavigate();

  return (
    <>
      <header className="weather-header">
        <a href="/" className="back-button">
          <img src="/menu/back.svg" alt="Back" />
        </a>
        <h1 className="weather-title">Եղանակ</h1>
        <button 
          className="search-button"
          onClick={() => navigate('/search')}
        >
          <img src="/menu/blacksearch.svg" alt="Search" />
        </button>
      </header>
    <div className="weather-page">
      <WeekForecast />
      <h3>Օրացույց</h3>
      <Calendar />
    </div>
    </>
  );
}

export default Weather;