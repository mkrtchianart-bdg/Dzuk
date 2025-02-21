import "./FishLevel.css";

function FishLevel() {
  return (
    <>
      <h3 className="fish-level-title">Խփման մակարդակ</h3>
      <div className="fish-level-container">
        <div className="fish-icons">
          <img src="/fish/ion_fish.svg" alt="Fish icon" className="fish-icon" />
          <img src="/fish/ion_fish.svg" alt="Fish icon" className="fish-icon" />
          <img src="/fish/ion_fish-outline.svg" alt="Fish icon" className="fish-icon" />
          <img src="/fish/ion_fish-outline.svg" alt="Fish icon" className="fish-icon" />
          <img src="/fish/ion_fish-outline.svg" alt="Fish icon" className="fish-icon" />
        </div>
      </div>
    </>
  );
}

export default FishLevel;
