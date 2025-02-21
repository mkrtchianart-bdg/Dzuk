import { useNavigate } from 'react-router-dom';
import './Search.css';
import SearchIcon from '../../public/menu/graysearch.svg';
import BackIcon from '../../public/menu/back.svg';
import GpsIcon from '../../public/menu/gps.svg';
import MapIcon from '../../public/menu/map.svg';
import SmallGps from '../../public/menu/smallgps.svg';
import Cloudy from '../../public/weathericons/Cloudy.svg';
import Sunny from '../../public/weathericons/Sunny.svg';
import Rainy from '../../public/weathericons/Rainy.svg';
import Snow from '../../public/weathericons/Snow.svg';

function Search() {
  const navigate = useNavigate();

  const searchCards = [
    {
      title: "Գտնել GPS-ի միջոցով",
      onClick: () => console.log('GPS clicked')
    },
    {
      title: "Նշել քարտեզի վրա",
      onClick: () => navigate('/map')
    }
  ];

  const locationCards = [
    {
      title: "Ապարանի ջրամբար",
      description: "Արագածոտնի մարզ",
      weatherIcon: Cloudy
    },
    {
      title: "Աշնակի ջրամբար",
      description: "Արաագծոտնի մարզ",
      weatherIcon: Sunny
    },
    {
      title: "Ակնա լճի ջրամբար",
      description: "Գեղարքունիքի մարզ",
      weatherIcon: Rainy
    },
    {
      title: "Ղազիգյոլի ջրամբար",
      description: "Կոտայքի մարզ",
      weatherIcon: Snow
    },
  ];

  return (
    <>
      <header className="search-header">
        <a href="/" className="back-button">
          <img src={BackIcon} alt="Back" />
        </a>
        <h3 className="search-title">Ընտրել տարածքը</h3>
      </header>
      <div className="search-page">
        <div className="search-input-container">
          <img src={SearchIcon} alt="Search" className="search-icon" />
          <input 
            type="text" 
            placeholder="Փնտրել․․․"
            className="search-input"
          />
        </div>
        <div className="location-cards">
          {searchCards.map((card, index) => (
            <div 
              className="location-card" 
              key={index}
              onClick={card.onClick}
              style={{ cursor: 'pointer' }}
            >
              <div className="location-content">
                <img src={index === 0 ? GpsIcon : MapIcon} alt={card.title} className="location-icon" />
                <span className="location-title">{card.title}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="location-list">
          {locationCards.map((card, index) => (
            <div className="location-item" key={index}>
              <div className="location-info">
                <img src={SmallGps} alt="Location" className="location-marker" />
                <div className="location-text">
                  <h4 className="location-name">{card.title}</h4>
                  <p className="location-description">{card.description}</p>
                </div>
              </div>
              <img src={card.weatherIcon} alt="Weather" className="weather-icon" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Search; 