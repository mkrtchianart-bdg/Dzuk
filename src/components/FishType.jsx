import React from 'react';
import './FishType.css'; 
import Amur from '../../public/fish/amur.jpg';
import Angor from '../../public/fish/angor.jpg';
import Trtur from '../../public/fish/trtur.png';
import Vord from '../../public/fish/vord.png';
import Xmor from '../../public/fish/xmor.png';

const FishInfo = [
  {
    name: 'Ամուրյան նրբաձկնիկ',
    icon: Amur,
   xayc:[
    {
      icon: Trtur,
      name: 'Թրթուր',
    },
    {
      icon: Vord,
      name: 'Որդ',
    }
   ]
  },
  {
    name: 'Անգորական լերկաձուկ',
    icon: Angor,
    xayc:[
      {
        icon: Trtur,
        name: 'Թրթուր',
      },
      {
        icon: Xmor,
        name: 'Խմոր',
      }
    ]
  }
]

const FishType = () => {
  return (
    <div>
      <h3 className="double-card-title">Ձկնատեսակ</h3>
      <div className="double-card-container">
        {FishInfo.map((fish, index) => (
          <div className="full-card" key={index}>
            <div className="fish-info-top">
              <img src={fish.icon} alt={fish.name} className="fish-icon" />
              <h4 className="fish-name">{fish.name}</h4> 
            </div>
            <div className="divider"></div>
            <div className="fish-info-bottom">
              <h4>Օրվա խայծը</h4>
              <div className="xayc-container">
                {fish.xayc.map((xayc, i) => (
                  <div className="xayc-item" key={i}>
                    <img src={xayc.icon} alt={xayc.name} className="xayc-icon" />
                    <span>{xayc.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FishType; 