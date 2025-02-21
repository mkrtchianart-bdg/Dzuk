import "./Calendar.css"
import PartCloud from "../../public/weathericons/PartCloud.svg"

const Calendar = () => {
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="weather-info">
          <img src={PartCloud} alt="Weather" className="weather-icon" />
          <div className="weather-text">
            <span className="month-text">Հիմնականում ամպամած</span>
            <span className="temperature">72°<span> f</span></span>
          </div>
        </div>
        <div className="date-info">
          <div className="month-text">Մարտ</div>
          <div className="year">2024</div>
        </div>
      </div>

      <div className="calendar-grid">
        <div className="weekdays">
          <span>Երկ</span>
          <span>Երբ</span>
          <span>Չրբ</span>
          <span>Հնգ</span>
          <span>Ուրբ</span>
          <span>Շբթ</span>
          <span>Կիր</span>
        </div>

        <div className="days">
          <span className="prev-month">31</span>
          {[...Array(30)].map((_, index) => (
            <span key={index + 1} className={index + 1 === 13 ? "current-day" : ""}>
              {index + 1}
            </span>
          ))}
          {[1, 2, 3, 4].map((day) => (
            <span key={`next-${day}`} className="next-month">
              {day}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calendar

