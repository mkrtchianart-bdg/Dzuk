import "./SplashScreen.css";
import logo from "../../public/logo.png";

function SplashScreen() {
  return (
    <div className="splash-container">
      <img src={logo} alt="App Logo" className="splash-logo" />
      <h1 className="splash-text">Ձկնորսի օգնական</h1>
    </div>
  );
}

export default SplashScreen; 