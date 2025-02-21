import './Map.css';
import BackIcon from '../../public/menu/back.svg';

function Map() {
  return (
    <div className="map-page">
      <header className="map-header">
        <a href="/" className="back-button">
          <img src={BackIcon} alt="Back" />
        </a>
        <h3 className="map-title">Քարտեզ</h3>
      </header>
      <div className="map-container">
        <iframe 
          width="100%"
          height="100%"
          id="gmap_canvas"
          src="https://maps.google.com/maps?https://www.google.com/maps/@40.1686468,44.4574922,15zl=en&amp;q=%20+()&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Google Map"
        ></iframe>
        <script 
          type='text/javascript' 
          src='https://embedmaps.com/google-maps-authorization/script.js?id=7ecffaf644ea37f33459ab3599c55f3808a75059'
        ></script>
      </div>
    </div>
  );
}

export default Map; 