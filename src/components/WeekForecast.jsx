import React from 'react';
import './WeekForecast.css';
import PartCloud from '../../public/weathericons/PartCloud.svg';
import Cloudy from '../../public/weathericons/Cloudy.svg';
import Sunny from '../../public/weathericons/Sunny.svg';
import Rainy from '../../public/weathericons/Rainy.svg';
import Thunder from '../../public/weathericons/Thunder.svg';

const WeekForecast = () => {
  const forecastData = [
    { day: 'Երկուշաբթի', icon: Sunny, maxTemp: 18, minTemp: 8 },
    { day: 'Երեքշաբթի', icon: PartCloud, maxTemp: 16, minTemp: 7 },
    { day: 'Չորեքշաբթի', icon: Cloudy, maxTemp: 14, minTemp: 6 },
    { day: 'Հինգշաբթի', icon: Rainy, maxTemp: 12, minTemp: 5 },
    { day: 'Ուրբաթ', icon: Thunder, maxTemp: 13, minTemp: 4 },
    { day: 'Շաբաթ', icon: PartCloud, maxTemp: 15, minTemp: 6 },
    { day: 'Կիրակի', icon: Sunny, maxTemp: 17, minTemp: 7 }
  ];

  return (
    <div className="weather-card">
      <div className="card-header">
        <h3>Հիմնականում ամպամած</h3>
        <p className="date"> 20 Մարտ 2024</p>
      </div>
      
      <div className="forecast-list">
        {forecastData.map((day, index) => (
          <div key={index} className="forecast-item">
            <img 
              src={day.icon} 
              alt={`${day.day} weather icon`} 
              className="weather-icon" 
            />
            <span className="day">{day.day}</span>
            <span className="temp">{day.maxTemp}° / {day.minTemp}°</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekForecast;