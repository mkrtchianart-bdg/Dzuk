import './WeatherDisplay.css';
import PartCloud from '../../public/weathericons/PartCloud.svg';

function WeatherDisplay({ weather, loading, error }) {
  if (loading) return <div>Loading weather...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="weather-display">
        <img 
          src={PartCloud} 
          alt="icon" 
          style={{ width: '100px', height: '100px' }}
        />
        <h2 className="weather-description">Հիմնականում ամպամած</h2>
        <p className="weather-date">Չորեքշաբթի, 20 Մարտ 2024</p>
      </div>
      <div className='empty-space'></div>
    </>
  );
}

export default WeatherDisplay; 