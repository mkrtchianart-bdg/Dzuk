import React from 'react';
import './WeatherDetails.css';
import uvIcon from '../../public/weathericons/details/uv.svg'
import tempIcon from '../../public/weathericons/details/temp.svg'
import windIcon from '../../public/weathericons/details/wind.svg'
import humidityIcon from '../../public/weathericons/details/humidity.svg'

const WeatherDetails = () => {
  const details = [
    {
      icon: tempIcon,
      value: `6°`,
      label: "Ցելսիուս",
      alt: "Temperature"
    },
    {
      icon: windIcon,
      value: `134 կմ/ժ`,
      label: "Քամու ուժգնություն",
      alt: "Wind"
    },
    {
      icon: uvIcon,
      value: '0.2',
      label: "UV Ինդեքս",
      alt: "UV"
    },
    {
      icon: humidityIcon,
      value: `48%`,
      label: "Խոնավություն",
      alt: "Humidity"
    }
  ];

  return (
    <div className="weather-container">
      <h3 className="weather-title">Օդերևութաբանական տվյալներ</h3>
      <div className="details-grid">
        {details.map((detail, index) => (
          <div className="detail-card" key={index}>
            <img 
              src={detail.icon || "/placeholder.svg"} 
              alt={detail.alt} 
              className="detail-icon"
            />
            <div className="detail-content">
              <span className="detail-value">{detail.value}</span>
              <span className="detail-label">{detail.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;