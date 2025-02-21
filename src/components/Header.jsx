import { useState, useEffect, useRef } from 'react';
import MenuLeft from "../../public/menu/menuleft.svg";
import MenuFish from "../../public/menu/menufish.svg";
import SearchIcon from "../../public/menu/search.svg";
import { useNavigate } from "react-router-dom";
import fishList from "../helper/fishlist";
import "./Header.css";

function Header({ location = "Արփի լիճ, Շիրակ" }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="header">
        <div className="header-left">
          <img src={MenuLeft} alt="Menu" className="header-icon" />
        </div>
        <div className="header-center">
          <h1>{location}</h1>
        </div>
        <div className="header-right">
          <img 
            src={SearchIcon} 
            alt="Search" 
            className="header-icon" 
            onClick={() => navigate('/search')}
            style={{ cursor: 'pointer' }}
          />
          <img 
            src={MenuFish} 
            alt="Menu" 
            className="header-icon" 
            onClick={toggleMenu}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </header>
      
      <div 
        className={`fish-menu ${isMenuOpen ? 'open' : ''}`}
        ref={menuRef}
      >
        <div className="fish-list">
          {fishList.map((fish, index) => (
            <div key={index} className="fish-item">
              <img src={fish.icon} alt={fish.name} className="fish-icon" />
              <span className="fish-name">{fish.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Header; 