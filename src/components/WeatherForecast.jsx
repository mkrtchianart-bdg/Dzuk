import { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import weatherMenu from '../../public/menu/weathermenu.svg';
import './WeatherForecast.css';
import { useNavigate } from 'react-router-dom';
import PartCloud from '../../public/weathericons/PartCloud.svg';
import Cloudy from '../../public/weathericons/Cloudy.svg';
import Sunny from '../../public/weathericons/Sunny.svg';
import Rainy from '../../public/weathericons/Rainy.svg';
import Thunder from '../../public/weathericons/Thunder.svg';



function WeatherForecast() {
  const [tabIndex, setTabIndex] = useState(0);
  const navigate = useNavigate();

  // Mock data structure for the UI
  const mockData = [
    { time: '2 PM', temp: '20°C', icon: PartCloud },
    { time: '3 PM', temp: '21°C', icon: Cloudy },
    { time: '4 PM', temp: '22°C', icon: Sunny },
    { time: '5 PM', temp: '23°C', icon: Rainy },
    { time: '6 PM', temp: '24°C', icon: Thunder }
  ];

  return (
    <div className="weather-forecast-container">
      {/* Top row with weather menu */}
      <div className="weather-menu">
        <img 
          src={weatherMenu} 
          alt="Weather Menu" 
          onClick={() => navigate('/weather')}
          style={{ cursor: 'pointer' }}
        />
      </div>

      {/* Tabs */}
      <Box className="forecast-tabs">
        <Tabs 
          value={tabIndex} 
          onChange={(event, newValue) => setTabIndex(newValue)}
          variant="fullWidth"
        >
          <Tab className="forecast-tab" label="Երեկ" />
          <Tab className="forecast-tab" label="Այսօր"/>
          <Tab className="forecast-tab" label="Վաղը" />
        </Tabs>
      </Box>

      {/* Forecast Cards */}
      <div className="forecast-grid">
        {mockData.map((item, index) => (
          <div className="forecast-card" key={index}>
            <div className="forecast-content">
              <Typography className="forecast-time" variant="body2">{item.time}</Typography>
              <img 
                className="forecast-icon"
                src={item.icon} 
                alt="weather" 
              />
              <Typography className="forecast-temp" variant="body1">{item.temp}</Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherForecast; 